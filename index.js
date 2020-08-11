const fs = require('fs')
console.log(fs)

// create file README.md
fs.appendFile('README.md',`#${process.argv[2]}`,(err) => {
  if(err) {console.log(err)}
  console.log(`#${process.argv[2]}`)
})
// Prompt user to input project title and make that the title of the readme.


// Description


// Table of Contents
// Links to each other section in the readme

// Installation


// Usage


// License
// need a list of license options
// when one is picked, add a badge for that license near the top of readme
// then in this section, explain which license the application is covered under

// Contributing


// Tests


// Questions
// Prompt for GitHub username
// Put it in the readme w/ a link to GitHub profile
// Prompt for email, and add "Please email me at ___ with any additional questions."