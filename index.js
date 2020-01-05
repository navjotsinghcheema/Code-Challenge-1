const inquirer = require('inquirer');
const questionBank = require('./questionBank');

inquirer
  .prompt([
    /* Pass your questions in here */
    questionBank.command
  ])
  .then(answers => {
      console.log(answers);
    // Use user feedback for... whatever!!
  });
