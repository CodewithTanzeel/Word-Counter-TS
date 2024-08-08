# Word Count Application

This command-line application allows users to count the number of words in a given sentence. The application prompts the user to input a sentence and then calculates the word count.

## Features

- Count the number of words in a user-provided sentence.
- Simple and intuitive command-line interface.

## Requirements

- Node.js
- `inquirer` package

## Installation

1. Clone this repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd <project-directory>
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

## Usage

1. Run the application:

   ```bash
   node index.js
   ```

2. Enter a sentence when prompted:

   ```plaintext
   Enter your sentence to count the word: This is a sample sentence.
   ```

3. The application will display the word count of the entered sentence.

## Code Explanation

- **Prompt**: Uses `inquirer` to get the user input for the sentence.
- **Word Count Calculation**: Trims the input sentence, splits it into words using space as a delimiter, and counts the number of words.
- **Output**: Displays the word count of the entered sentence.

## Example

```bash
Enter your sentence to count the word: This is a sample sentence.
Your sentence word count is 5
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

*This project was completed on March 28 at approximately 3:51 PM.*
```

