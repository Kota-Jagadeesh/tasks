# As part of my assignment in the html and css i have done my  simple "PORTFOLIO" :

So , the index.html be as follows :

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <header>
        <h1 class="welcome">WELCOME TO MY PORTFOLIO</h1>
    </header>

    <section class="profile">
        
        <img class="profile-pic" src="JAGADEESH.png" alt="My Pic">
        <h1>About Me</h1>
        <p>Hello! I am K. Jagadeeshwar Reddy from Andhra Pradesh. My mother tongue is Telugu. I am an MPC student in Intermediate. My hobbies include listening to music, playing mobile games, badminton, and chess, which I deeply enjoy. In my leisure time, I watch movies to unwind. I have a strong passion for coding and enjoy working on computers for extended periods, constantly seeking to improve my skills.</p>
    </section>

    <section class="details">
        <h2>Personal Details</h2>
        <ul>
            <li><b>Name:</b> Jagadeesh Kota</li>
            <li><b>Birthplace:</b> Kurnool</li>
            <li><b>Mother Tongue:</b> Telugu</li>
            <li><b>Nationality:</b> India</li>
            <li><b>Email:</b> kota.jagadesh123@gmail.com</li>
            <li><b>Phone:</b> +91 7013631730</li>
        </ul>
    </section>

    <section class="education">
        <h2>Education Details</h2>
        <ul>
            <li><b>College:</b> Amrita Viswa Vidyapeetham</li>
            <li><b>State:</b> Kerala</li>
            <li><b>Branch:</b> AI & DS</li>
            <li><b>Roll No:</b> AM.SC.U4AID24019</li>
            <li><b>Email:</b> am.sc.u4aid24019@am.students.amrita.edu</li>
            <li><b>Semester:</b> 2</li>
            <li><b>SGPA:</b> 8.1</li>
        </ul>
    </section>

    <section class="social-media">
        <h2>Social Media Links</h2>
        <div class="social-links">
            <a href="https://github.com/Jagadeesh-18-bot" target="_blank" class="btn">GitHub</a>
            <a href="https://www.linkedin.com/in/jagadeeshwar-reddy-kota-48673a334" target="_blank" class="btn">LinkedIn</a>
            <a href="https://x.com/JAGADEESH_KOTA_" target="_blank" class="btn">Twitter</a>
        </div>
    </section>

</body>
</html>

```
here, the  list of funnctions i used are `header`,`section`,`li`,`ul` these are some of the new tags i  used here :

1) `section` : section tag here is used to group together the related elements .
2) `header` : this i used here for the heading we can also use h1 tag  , but for the heading it is better to use heade tag because this makes some difference from h1 to h6 tags
3) `li` : list tags aare used here to display them in the form of lists and in a decent way if there are no `li` tag that wont be in a proper order.
4) `b` : this is a bold tag mean it differs the main parameters and make them appear in abold manner.
5) `ul` : without this unordered list we get a bullet points for each list .

---

And for the `css` styling the code goes as follows :

style.css :

```
/* General Styles */
body {
    background-color: #0f0f0f;
    color: white;
    font-family: 'Poppins', sans-serif;
    text-align: center;
}


header {
    background: linear-gradient(90deg, #ff0080, #8000ff);
    padding: 15px;
    
}
.welcome {
    font-size: 2em;
    font-weight: bold;
    color: white;
}

/*this contains the profile section */
.profile {
    margin: 30px auto; /*here as this property is shorthanded to top-bottom and left-right */
    max-width: 600px;
    padding: 20px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 0px 20px #ee02021a; /*horiz vertical offset blurradius */ 
}
.profile-pic {
    display: block;
    margin: 0 auto 15px; /* top right-left bottom */
    width: 150px;
    height: 150px;
    border-radius: 0%;
    border: 3px solid #fff;
}

/* Sections */
.details, .education {
    margin: 20px auto;
    max-width: 500px;
    padding: 20px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.1);
}
.details h2, .education h2 {
    color: #ffcc00;
}
.details ul, .education ul {
    list-style-type: none;
    padding: 0;
}
.details li, .education li {
    font-size: 1.2em;
    padding: 5px;
}

/* Social Media Section */
.social-media {
    margin: 30px auto;
    padding: 20px;
}
.social-links {
    display: flex;
    flex-direction:row;
    justify-content: center;
    gap: 15px;
}
.btn {
    background: #ff0080;
    padding: 10px 20px;
    color: white;
    border-radius: 5px;
    font-size: 1.2em;
    transition: 0.1s ;
}
.btn:hover {
    background: #8000ff;
    transform: scale(2);
}

```
This is a simple css styling i used to make my web page attractive .

---

## This is the assignment which i wrote for DOM manipulation and a closure :
# DOM assignment :
## Firstly `DOM` stands for Document Object Model
So, DOM is a programming interface that represents the structure of the web page and this is used to change the pages's style , structure and content in the page .

---

- Dom represents the document as a logical tree of objects and content
- here each part of the branch ends in a node and each node further have another branch again.
- this DOM method allows programmatic access to the tree
- we can use DOM method to change the documents structure and style
- So, this is how the DOM works ...

`DOM also helps the scripting languages like javascript to interact with the webpage`s

---

There are 3 types in DOM :
- CORE DOM this is the standard Model for any structured  document 
- XML DOM this is the standard Model for XML documents
- HTML DOM and this is the model for  HTML documents 

here i'll list some of the DOM methods what i have learnt

1) **getElementId()** - this is used to get the elements with id  mean to work with the elements in javascript which should be applied only for the requred "id" elements and here it access the first element with the specified id 
2) **getElementsByTagName()** - this method allows us to search all the elements with the specified tagname in our page.
3) **getElementByClassName()** - this returns the collection of all the elements that has the class name as specified in the function
4) **querySelectorAll()** - this returns the list of the elements that matches a specified group of selectors
5) **querySelector()** - this method returns the element that matches with the specified css selector


