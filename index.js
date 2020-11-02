  
const inquirer = require("inquirer");
const fs = require('fs');
const axios = require("axios");
const generate = require('./createFile.js');

const questions = [
    {
        type: "input",
        name: "title",
        message: "Project Title: "
    },
    {
        type: "input",
        name: "badge",
        message: "Badge Links: "
    },
    {
        type: "input",
        name: "description",
        message: "Project Description: "
    },
    {
        type: "input",
        name: "installation",
        message: "Installation Instructions: "
    },
    {
        type: "input",
        name: "usage",
        message: "Project Usage: "
    },
    {
        type: "input",
        name: "licence",
        message: "Project License: "
    },
    {
        type: "input",
        name: "contributing",
        message: " Contributors: "
    },
    {
        type: "input",
        name: "test",
        message: "Project Tests: "
    },
    {
        type: "input",
        name: "username",
        message: "GitHub Username: "
    },
    {
        type: "input",
        name: "repo",
        message: "GitHub Repository Link: "
    },
];

