const inquirer = require("inquirer");
const path = require ("path");
const fs = require ("fs");
const Choices = require("inquirer/lib/objects/choices");
const questions = [
    {
        type: "list",
        name: "choices",
        message: "What would you like to do?"
    },
    {
        type: "input",
        name: "description",
        message: "What would you like to view?"
    },