let allStudents = ['A', 'B-', 1, 4, 5, 2]; // Grades taken from the given assignment 
let studentsPassed = []; // This stores the passing students

for (let i = 0; i < allStudents.length; i++) {
    let grade = allStudents[i];

    if (grade === 'A') {
        studentsPassed.push(grade);
    } else if (grade === 'A-') {
        studentsPassed.push(grade);
    } else if (grade === 'B') {
        studentsPassed.push(grade);
    } else if (grade === 'B-') {
        studentsPassed.push(grade);
    } else if (grade === 'C') {
        studentsPassed.push(grade);
    } else if (grade === 'C-') {
        studentsPassed.push(grade);
    } else if (grade >= 3) { 
        studentsPassed.push(grade);
    }
}

console.log(studentsPassed); // Output: ['A', 'B-', 4, 5]