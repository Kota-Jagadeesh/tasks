// this is a centralised state object
let state = {
  account: null
};
const storageKey = 'savedAccount';

// function for updating any element's text or for appending a node
function updateElement(id, textOrNode) {
  const element = document.getElementById(id);
  element.textContent = ''; // this clears the previous content
  element.append(textOrNode);
}

// this fetches the account data from server
async function getAccount(user) {
  try {
      const response = await fetch(`http://localhost:5000/api/accounts/${encodeURIComponent(user)}`);
      return await response.json();
  } catch (error) {
      return { error: error.message || 'Unknown error' };
  }
}

// this function updates the state object with new data and stors them in local storage
function updateState(property, newData) {
  state[property] = newData;
  if (state.account) {
      localStorage.setItem(storageKey, JSON.stringify(state.account));
  }
}

// this handles the login
async function login() {
  const loginForm = document.getElementById('loginForm');
  const user = loginForm.user.value;
  const data = await getAccount(user);

  if (data.error) {
      return updateElement('loginError', data.error);
  }
  updateState('account', data);
  navigate('/dashboard');
}

// used for registering the new user 
async function register() {
  const registerForm = document.getElementById('registerForm');
  const user = registerForm.user.value;
  const currency = registerForm.currency.value;
  const description = registerForm.description.value;
  const balance = parseFloat(registerForm.balance.value);

  try {
      const response = await fetch('http://localhost:5000/api/accounts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ user, currency, description, balance })
      });

      const result = await response.json();

      if (result.error) {
          return updateElement('registerError', result.error);
      }
      updateState('account', result);
      navigate('/dashboard');
  } catch (error) {
      updateElement('registerError', 'Registration failed');
  }
}

// this updates the dashboard with account data
async function updateDashboard() {
  const account = state.account;
  if (!account) {
      return logout();
  }

  updateElement('description', account.description);
  updateElement('balance', account.balance.toFixed(2));  // will ensure the bank balance is formatter properly 
  updateElement('currency', account.currency);

  const transactionsRows = document.createDocumentFragment();
  for (const transaction of account.transactions) {
      const transactionRow = createTransactionRow(transaction);
      transactionsRows.appendChild(transactionRow);
  }
  updateElement('transactions', transactionsRows);
}

// ths creates the transaction row dynamically
function createTransactionRow(transaction) {
  const template = document.getElementById('transaction');
  const transactionRow = template.content.cloneNode(true);
  const tr = transactionRow.querySelector('tr');
  tr.children[0].textContent = transaction.date;
  tr.children[1].textContent = transaction.object;
  tr.children[2].textContent = transaction.amount.toFixed(2);
  return transactionRow;
}

// this is a logout function for logging out
function logout() {
  updateState('account', null);
  navigate('/login');
}

// used here to update account data from the server
async function updateAccountData() {
  const account = state.account;
  if (!account) {
      return logout();
  }

  const data = await getAccount(account.user);
  if (data.error) {
      return logout();
  }

  updateState('account', data);
}

// used refresh function for updating dashboard data
async function refresh() {
  await updateAccountData();
  updateDashboard();
}

// handles the navigation
function navigate(path) {
  history.pushState({}, path, window.location.origin + path);
  updateRoute();
}

// for  handling the link clicks
function onLinkClick(event) {
  event.preventDefault();
  navigate(event.target.getAttribute('href'));
}

// updates display page based on current path
function updateRoute() {
  const path = window.location.pathname;
  const route = routes[path] || routes['/login'];
  const template = document.getElementById(route.templateId);
  const appElement = document.getElementById('app');
  appElement.innerHTML = ''; // Clear current content
  appElement.appendChild(template.content.cloneNode(true));

  // after displying the template, attach the event listener
  if (path === '/dashboard') {
      const transactionForm = document.getElementById('transactionForm');
      if (transactionForm) {
          transactionForm.addEventListener('submit', addTransaction);
      }
  }

  // if the route has an init function, this call it
  if (typeof route.init === 'function') {
      route.init();
  }
}

// Defines routes
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard', init: refresh }
};

// initialises the app and check for saved account data
function init() {
  const savedAccount = localStorage.getItem(storageKey);
  if (savedAccount) {
      updateState('account', JSON.parse(savedAccount));
  }

  window.onpopstate = updateRoute;
  updateRoute();
}

// calls init on page load
window.onload = init;

// adding event listener for link clicks
document.addEventListener('click', (event) => {
  if (event.target.matches('a')) {
      onLinkClick(event);
  }
});

// used for opening the transaction form
function openTransactionForm() {
  document.getElementById('addTransactionForm').style.display = 'block';
}

// this closes the transaction form
function closeTransactionForm() {
  document.getElementById('addTransactionForm').style.display = 'none';
}

// handles the transaction form submission
async function addTransaction(event) {
  event.preventDefault();
  
  const transactionForm = document.getElementById('transactionForm');
  const date = transactionForm.date.value;
  const object = transactionForm.object.value;
  const amount = parseFloat(transactionForm.amount.value);

  // checks if the transaction amount is valid
  if (isNaN(amount) || amount === 0) {
      return updateElement('transactionError', 'Invalid transaction amount');
  }

  const newTransaction = { date, object, amount };

  //updates the account with the new transaction (add to account.transactions)
  const updatedAccount = { 
      ...state.account, 
      transactions: [...state.account.transactions, newTransaction],
      balance: state.account.balance + amount // Update balance correctly
  };

  // this updates the stae and save to localStorage
  updateState('account', updatedAccount);
  
  // closes the form
  closeTransactionForm();
  
  // update the dashboard to make see the new transaction and balance
  await updateDashboard();  // Ensure dashboard gets updated with the new data
}


// attaching the addTransaction function to the form submit
document.getElementById('transactionForm').addEventListener('submit', addTransaction);
