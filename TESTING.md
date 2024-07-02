# Coffee Trivia Quiz - Testing

![ai responsive screen](/document/mock-responsive.png)

This is where you can find the deployed site: [Coffee Trivia Quiz]( https://micmic210.github.io/coffee-trivia/)

- - -

## Table of Contents
  ### [Validator Testing](#validator-testing)
  #### [Automated Testing](#automated-testing) 
  - [W3C Validator](#w3c-validator)
    - [HTML](#html)
    - [CSS](#css)
  - [JavaScript Validator](#javascript-validator-jshint)
  - [Lighthouse](#lighthouse)
    - [Desktop](#desktop)
    - [Mobile](#mobile)
  #### [Manual Testing](#manual-testing-1) 
  - [Full Tesing](#full-testing) 

- - - 

## Validator Testing 

### Automated Testing 

#### W3C Validator

##### [HTML](https://validator.w3.org/)
![HTML Result](/document/w3c-html.png)


##### [CSS](https://jigsaw.w3.org/css-validator/)
![CSS Result](/document/w3c-css.png)


#### [JavaScript Validator-JSHint](https://jshint.com/)


Here's a copy of the metrics from JSHint:
There are 14 functions in this file. Function with the largest signature take 2 arguments, 
while median is 0. Largest function has 13 statements in it, while the median is 5. 
The most complex function has a cyclomatic complexity value of 2 while median is 1.5.

#### Lighthouse 

##### Desktop 
![Desktop Result](/document/seo-desktop.png)


##### Mobile 
![Mobile Result](/document/seo-mobile.png)

- - -

### Manual Testing 
#### Full Testing 

`Home Page`

 | Feature | Expected Outcome | Testing Method | Result |
 | --- | --- | --- | --- | 
 | Homepage Load | The homepage should load within 3 seconds and display the Coffee Trivia Quiz title, a start button, and brief instructions | 1. Navigate to the Coffee Trivia Quiz URL　<br> 2. Measure the time taken for the page to load <br> 3. Verify the presence of the title start button and instructions | The homepage loads in 2.3 seconds. The title "Coffee Trivia Quiz", start button, and instructions are displayed correctly |
 | Start Button Functionality | Clicking the start button should navigate to the first quiz question | 1. Click the start button on the homepage <br> 2. Observe the navigation to the first quiz question | The start button navigates to the first quiz question as expected |
 | Navigate to Questions with Enter Key | Pressing the Enter key on the username input field should start the quiz and navigate to the first question | 1. Enter a valid username in the input field <br> 2. Press the Enter key <br> 3. Verify that the quiz starts and the first question is displayed | Pressing the Enter key starts the quiz and navigates to the first question |
 | Display Alert if Username is Not Given | If the username is not provided or is only white space, an alert should be displayed | 1. Leave the username input field blank or enter white space <br> 2. Click the start button or press the Enter key <br> 3. Verify that an alert is displayed indicating that a username is required | An alert is displayed when the username is not provided |


- - - 


`Question Area`
 | Feature | Expected Outcome | Testing Method | Result |
 | --- | --- | --- | --- | 
 | Question Display | The question area should display a single question with four answer options | 1. Start the quiz and navigate to the first question <br> 2. Verify that one question and four answer options are displayed | The question and four answer options are displayed correctly |
 | Answer Selection | Selecting an answer should highlight the chosen option | 1. Click on one of the answer options <br> 2. Verify that the selected option is highlighted | The selected answer option is highlighted |
 | Next Button Functionality | Clicking the next button should navigate to the next question | 1. Select an answer and click the next button <br> 2. Observe the navigation to the next question | The next button navigates to the next question as expected |
 | Highlight Correct and Incorrect Answers | When an incorrect answer is selected, it should be highlighted in red, and the correct answer should be highlighted in green | 1. Start the quiz and navigate to a question <br> 2. Select an incorrect answer <br> 3. Verify that the incorrect answer is highlighted in red and the correct answer is highlighted in green | Incorrect answer is highlighted in red, and the correct answer is highlighted in green |
 | Question Counter | A counter should display the current question number out of the total number of questions | 1. Start the quiz and navigate to a question <br> 2. Verify that the counter displays the correct question number and total number of questions | The counter correctly displays the current question number and total number of questions| 


- - -


`Result Area`
 | Feature | Expected Outcome | Testing Method | Result |
 | --- | --- | --- | --- | 
 | Final Score Display | The result area should display the total score and a message based on the score | 1. Complete the quiz <br> 2. Verify that the result area displays the total score and an appropriate message | The result area shows the total score and an appropriate message |
 | Play Again Button | Clicking the play again button should reset the quiz and navigate back to the username input screen | 1. Complete the quiz to reach the result area <br> 2. Click the play again button <br> 3. Verify that the quiz is reset, and the username input screen is displayed | The quiz is reset and the username input screen is displayed |

