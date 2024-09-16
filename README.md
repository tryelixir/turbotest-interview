# 🐺 TurboTest Interview

Welcome to the TurboTest interview for our [QA Engineer](https://wellfound.com/l/2ABh8v) role!

### Task

In this interview, you will create a script on [Stack Overflow](https://stackoverflow.com/questions) using JavaScript and Microsoft's [Playwright](https://playwright.dev/) framework.

1. Install node modules by running `npm i`.

2. Edit the `index.js` file in this project to perform the following steps:

   1. Navigate to the [Stack Overflow](https://stackoverflow.com/questions) Questions page.
   2. Apply Filters:
      - Sort the questions by "Newest" using the sort options.
      - Filter the questions to only include those tagged with "javascript".
   3. Extract the following data for the first 100 questions:
      - Title of the question.
      - The tags
      - Number of votes.
      - Timestamp indicating when the question was asked.
   4. Validate the following:
      - The questions are sorted from newest to oldest based on the timestamp.
      - Each question includes the "javascript" tag.
   5. Handle any dynamic content loading, delays, or pagination that Stack Overflow uses to display the questions.

Note that you are welcome to update Playwright or install other packages as you see fit, however you must utilize Playwright in this interview.
