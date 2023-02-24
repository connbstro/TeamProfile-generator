const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generatePage = require("./src/generate-page");
const teamArray = [];

// Prompt start //
const showMenu = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "menu",
        message: "Please select an option:",
        choices: ["Add Engineer Profile", "Add Intern Profile", "Finish Building Team"],
      },
    ])
    .then((menuOption) => {
      switch (menuOption.menu) {
        case "Add Engineer Profile":
          promptEngineer();
          break;
        case "Add Intern Profile":
          promptIntern();
          break;
        case "Finish Building Team":
          htmlContent = generatePage(teamArray);
          finalTeam(htmlContent);
          break;
      }
    });
};

// Manager Questions //
const promptManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter manager's name:",
      },
      {
        type: "number",
        name: "id",
        message: "Enter manager's ID number:",
      },
      {
        type: "input",
        name: "email",
        message: "Enter manager's email:",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Enter manager's office number:",
      },
    ])
    .then((userInput) => {
      const manager = new Manager(
        userInput.name,
        userInput.id,
        userInput.email,
        userInput.officeNumber
      );
      teamArray.push(manager);
      showMenu();
    });
};

// Engineer Questions //
const promptEngineer = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter engineer's name:",
      },
      {
        type: "number",
        name: "id",
        message: "Enter engineer's ID number:",
      },
      {
        type: "input",
        name: "email",
        message: "Enter engineer's email:",
      },
      {
        type: "input",
        name: "github",
        message: "Enter engineer's GitHub username:",
      },
    ])
    .then((userInput) => {
      const engineer = new Engineer(
        userInput.name,
        userInput.id,
        userInput.email,
        userInput.github
      );
      teamArray.push(engineer);
      showMenu();
    });
};

// Intern Questions //
const promptIntern = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter intern's name:",
      },
      {
        type: "number",
        name: "id",
        message: "Enter intern's ID number:",
      },
      {
        type: "input",
        name: "email",
        message: "Enter intern's email address:",
      },
      {
        type: "input",
        name: "school",
        message: "Enter the intern's school:",
      },
    ])
    .then((userInput) => {
      const intern = new Intern(
        userInput.name,
        userInput.id,
        userInput.email,
        userInput.school
      );
      teamArray.push(intern);
      showMenu();
    });
};

const finalTeam = (data) => {
  fs.writeFile("./dist/index.html", data, (err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("Webpage has been generated!");
    }
  });
};

// Call method to begin questions //
promptManager();
