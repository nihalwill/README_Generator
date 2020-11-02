  
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

inquirer
    .prompt(questions)
    .then(function(data){
        const queryUrl = `https://api.github.com/users/${data.username}`;

        axios.get(queryUrl).then(function(res) {
            
            const githubInfo = {
                githubImage: res.data.avatar_url,
                email: res.data.email,
                profile: res.data.html_url,
                name: res.data.name
            };
            
          fs.writeFile("README.md", generate(data, githubInfo), function(err) {
            if (err) {
              throw err;
            };
    
            console.log("README File has been created");
          });
        });

});

function init() {

}

init();
