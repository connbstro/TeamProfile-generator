const inquirer = require("inquirer");
const fs = require("fs");
const generatePage = require("./src/generate-page");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const teamArray = [];
