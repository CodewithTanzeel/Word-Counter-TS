import inquirer from "inquirer";

const answers: {
  Sentence: string;
} = await inquirer.prompt([
  {
    name: "Sentence",
    type: "input",
    message: "Enter your sentence to count the word: "
  },
]);

const words = answers.Sentence.trim().split(" ")
console.log(`Your sentence word count is ${words.length}`)

// I have completed the following project on march 28 3:51pm