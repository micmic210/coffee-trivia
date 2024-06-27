# Coffee Trivia Quiz

Welcome to the Coffee Trivia Quiz! This app is designed for coffee enthusiasts of all levels, including passionate enthusiasts and curious newcomers. It provides a fun and engaging platform to test your knowledge and gain further insight into your preferred beverage. 

![ai responsive screen](/document/ai-responsive.png)

## Contents
- [Introduction](#coffee-trivia-quiz)
- [About This App](#about-this-app)
- [Design](#design)
  - [Color Scheme](#color-scheme)
  - [Typography](#typography)
  - [Imagery](#imagery)
  - [Wireframes](#wireframes)
- [Features](#features)
  - [Existing Features](#existing-features)
       - [Homepage](#homepage)
       - [Username Entry](#username-entry)
       - [Quiz Section](#quiz-section)
       - [Results Section](#result-section)
- [Future Features](#future-features)
- [Validator Testing](#validator-testing) 
  - [HTML](#html)
  - [CSS](#css)
  - [JavaScript](#javascript)
  - [SEO](#seo)
- [Unfixed Bugs](#unfixed-bugs)
- [Technologies Used](#technologies-used)
- [Languages Used](#languages-used)
- [Frameworks, Libraries and Programs Used](#frameworks-libraries-and-programs-used)
- [Deployment](#deployment)
- [Credits](#credits)
- [Content](#content)
- [Media](#media)

## About This App 

Coffee Trivia Quiz combines the thrill of a quiz game with the rich history and culture of coffee. Explore a wide range of topics, including:

* The origins and history of coffee 
* Different coffee beans and their unique flavors 
* Various brewing techniques from around the world 
* Coffee's role in different cultures
* Fun facts and myths about coffee

## Design 

### Color Scheme 
When designing the Coffee Trivia Quiz web application, careful consideration was given to the color scheme to enhance user experience and ensure readability. Here's an explanation of the color choices and their application:

#### Background and Decorative Elements
The background and decorative elements have soft, muted colors like beige and brown, evoking a cozy, coffee shop atmosphere. The intricate drawings of coffee items make them look sophisticated and charming without overwhelming the user. 

#### Interactive Elements
 1. Light Roast (Teal - #468787): The light roast option uses teal to stand out against the neutral background while maintaining a soothing appeal. Teal's calming properties make it an inviting choice for users. 
 2. Medium Roast (Red - #E38E84): The medium roast option is highlighted in soft red, associated with energy and alertness. This color contrasts with teal, making it easy to distinguish between choices. 
 3. Dark Roast (Dark Brown - #4A3933): The dark roast option uses deep brown, reflecting dark roast coffee's rich, intense nature. It harmonizes with the overall coffee theme and conveys robustness and depth. 
 4. French Roast (Chocolate Brown - #3B2C25): The French roast option is depicted in chocolate brown, slightly lighter than dark roast. This warm, inviting color fits the coffee-inspired pallet and creates a comforting feeling. 

 #### Feedback and Navigation
 - Correct Feedback (Teal Green - #468787)
 Correct answers are displayed in a teal green, a color associated with success and positive reinforcement. This shade maintains visual coherence and provides satisfying confirmation to users, enhancing their quiz experience. 
 - Incorrect Feedback (Red):
 Incorrect answers are displayed in bright red, drawing attention and indicating mistakes. Red's urgency effectively prompts users to consider their choices. 
 - Next and Play Again Buttons (Olive Green - #6E6555): 
 The "Next" button and "Play Again" buttons are in olive green, associated with progress and forward movement. This tone complements the earthy color scheme, maintaining visual harmony while guiding users through the quiz. 

 ![The Coffee Trivia Quiz Color Scheme](/document/coffee-trivia-color-pallet.png)

### Typography 
- The Coffee Trivia Quiz uses the "Poppins" from Google Fonts to enhance readability and create a modern, clean aesthetic. "Poppins" is a versatile sans-serif font with geometric shapes and balanced proportions, ensuring clarity across all devices. Its contemporary look complements the engaging nature of the quiz, making the text easy to read and visually appealing. The font's simplicity and elegance align with the coffee theme, providing a professional and enjoyable user experience. 

### Imagery
The Coffee Trivia Quiz web app uses imagery resembling a cozy coffee shop, with soft, muted tones and intricate line drawings of coffee beans and brewing equipment. This enhances the visual appeal and thematic experience, creating a charming environment for users to enjoy. 

#### Wireframes 
Wireframes are created for mobile and desktop by Balsamiq.

![Homepage](/document/wireframes/mobile1.png) ![Quiz Page](/document/wireframes/mobile2.png)
![Incorrect](/document/wireframes/mobile3.png) ![Result Page](/document/wireframes/mobile4.png)

![Homepage](/document/wireframes/coffeetrivia-web-1.png) 
![Quiz Page](/document/wireframes/coffeetrivia-web-2.png)
![Incorrect](/document/wireframes/coffeetrivia-web-3.png)
![Result Page](/document/wireframes/coffeetrivia-web-4.png)

## Features 
* Diverse Questions: Challenge yourself with questions that range from beginner to expert level.
* Educational Content: Learn interesting tidbits about coffee with every quiz.
* Interactive Gameplay: Enjoy a user-friendly interface that makes quizzing fun and easy.

### Existing Features

#### Homepage
The Coffee Trivia Quiz homepage instantly sets the tone with a coffee-themed wallpaper, making it clear that this website is all about coffee. A welcoming message invites users to test their knowledge and discover new facts about their favorite beverage.


![welcome](/document/homepage.png)
#### Username Entry
Users are prompted to enter their username to start the quiz. This step is mandatory for proceeding to the quizzes. While it may seem like a minor inconvenience, it enhances the user experience by personalizing the quiz, displaying their name on the screen.

![username-alert](/document/alert.png)

#### Quiz Section
This section presents questions with four possible answers, displaying the user’s name at the top. When a correct answer is selected, the button turns green, and a “Correct!” message appears. If an incorrect answer is chosen, the button turns red, and “Incorrect!” appears, while the correct answer button also turns green. This feature helps users learn from their mistakes. Additionally, a question counter on each page allows users to track their progress.

![answer-correct](/document/correct.png)
![answer-incorrect](/document/incorrect.png)

#### Result Section
After completing the quiz, users see their final score and have the option to retake the quiz with a convenient retry button.

![score](/document/result.png)

### Future Features

* __Difficutly Levels__: Enable users to select the difficulty level of questions, such as easy, normal, and hard.
* __Score Tracking and Rankings__: Implement a system to track user scores and provide a ranking system for added competitiveness.

## Testing

### Validator Testing 

 - __HTML__

 ![w3c-html](/document/w3c-html.png)

 - __CSS__

 ![w3c-css](/document/w3c-css.png)

 - __JavaScript__ 

 [JSHint](https://jshint.com/)

 Here's a copy of the metrics from JSHint: 
 There are 14 functions in this file.
 Function with the largest signature take 2 arguments, while the median is 0. 
 Largest function has 13 statements in it, while the median is 5.
 The most complex function has a cyclomatic complexity value of 2 while the median is 1.5.

  - __SEO__ 
 _Desktop_: ![seo-desktop](/document/seo-website.png) 

 _Mobile_: ![seo-mobile](/document/seo-mobile.png)

 ## Manual Testing 

 ### Full testing was performed on the following devices: 
 - Laptop:
    - Mackbook Air 2020 13.3-inch screen 
 - Mobile Devices: 
    - iphone SE
    - iphone 13

`Home Page`
 
 | Feature | Expected Outcome | Testing Method | Result |
 | --- | --- | --- | --- | 
 | Homepage Load | The homepage should load within 3 seconds and display the Coffee Trivia Quiz title, a start button, and brief instructions | 1. Navigate to the Coffee Trivia Quiz URL　<br> 2. Measure the time taken for the page to load <br> 3. Verify the presence of the title start button and instructions | The homepage loads in 2.5 seconds. The title "Coffee Trivia Quiz", start button, and instructions are displayed correctly |
 | Start Button Functionality | Clicking the start button should navigate to the first quiz question | 1. Click the start button on the homepage <br> 2. Observe the navigation to the first quiz question | The start button navigates to the first quiz question as expected |
 | Navigate to Questions with Enter Key | Pressing the Enter key on the username input field should start the quiz and navigate to the first question | 1. Enter a valid username in the input field <br> 2. Press the Enter key <br> 3. Verify that the quiz starts and the first question is displayed | Pressing the Enter key starts the quiz and navigates to the first question |
 | Display Alert if Username is Not Given | If the username is not provided or is only white space, an alert should be displayed | 1. Leave the username input field blank or enter white space <br> 2. Click the start button or press the Enter key <br> 3. Verify that an alert is displayed indicating that a username is required | An alert is displayed when the username is not provided |

`Question Area`
 | Feature | Expected Outcome | Testing Method | Result |
 | --- | --- | --- | --- | 
 | Question Display | The question area should display a single question with four answer options | 1. Start the quiz and navigate to the first question <br> 2. Verify that one question and four answer options are displayed | The question and four answer options are displayed correctly |
 | Answer Selection | Selecting an answer should highlight the chosen option | 1. Click on one of the answer options <br> 2. Verify that the selected option is highlighted | The selected answer option is highlighted |
 | Next Button Functionality | Clicking the next button should navigate to the next question | 1. Select an answer and click the next button <br> 2. Observe the navigation to the next question | The next button navigates to the next question as expected |
 | Highlight Correct and Incorrect Answers | When an incorrect answer is selected, it should be highlighted in red, and the correct answer should be highlighted in green | 1. Start the quiz and navigate to a question <br> 2. Select an incorrect answer <br> 3. Verify that the incorrect answer is highlighted in red and the correct answer is highlighted in green | Incorrect answer is highlighted in red, and the correct answer is highlighted in green |
 | Question Counter | A counter should display the current question number out of the total number of questions | 1. Start the quiz and navigate to a question <br> 2. Verify that the counter displays the correct question number and total number of questions | The counter correctly displays the current question number and total number of questions| 

`Result Area`
 | Feature | Expected Outcome | Testing Method | Result |
 | --- | --- | --- | --- | 
 | Final Score Display | The result area should display the total score and a message based on the score | 1. Complete the quiz <br> 2. Verify that the result area displays the total score and an appropriate message | The result area shows the total score and an appropriate message |
 | Play Again Button | Clicking the play again button should reset the quiz and navigate back to the username input screen | 1. Complete the quiz to reach the result area <br> 2. Click the play again button <br> 3. Verify that the quiz is reset, and the username input screen is displayed | The quiz is reset and the username input screen is displayed |

 
### Unfixed Bugs
 ![unfixed bugs](/document/bug.png)

### Technologies Used 

## Languages Used
 - HTML, CSS, JavaScript

## Frameworks, Libraries and Programs Used 
  - GitHub - to save and store the files for the website https://github.com
  - GitPod - IDE to create the website https://www.gitpod.io
  - Google Fonts - to import the fonts used on the website https://fonts.google.com/
  - Am I Responsive - to check the website image on various devices https://ui.dev/amiresponsive
  - Happy Hues - to have an idea to select colors for the website https://www.happyhues.co/
  - Favicon generator - to create favicon from png file https://favicon-generator.mintsu-dev.com/ 
  - CANVA - to obtain free images for coffee bean icon and background wallpaper https://www.canva.com/  
  - MDN Web Docs - to check the use of codes https://developer.mozilla.org/en-US/
  - IMG2GO - to crop the images https://www.img2go.com/crop-image
  - optimizilla - to compress the images https://imagecompressor.com/ 
  - W3C Validator - to validate html and css codes https://validator.w3.org/
  - jshint Validator - to validate javascript code https://jshint.com/
  - Stack Overflow - https://stackoverflow.com/
  - Sweetalert2 - to obtain a better window alert https://sweetalert2.github.io/ 
  - Balsamiq - to create wireframes https://www.balsamiq.com

## Deployment 
 - This site is deployed by GitHub Pages 
   1. Log in to GitHub. 
   2. Locate the repository: "coffee trivia". 
   3. Click the "Settings".
   4. Select "Pages" in the left hand navigation menu. 
   5. Go to "Build and deployment" in the "GitHub Pages".
   6. Select "main" for branch and save. 
   7. The site is deployed as the URL becomes available in the top of "GitHub Pages". It will take some time. 

### Local Deployment: Clone 
 
Here's the link - https://micmic210.github.io/coffee-trivia/ 

### Credits 
 - **Mentor**: Mr. Jubril Akolade
 - **Special Thanks**: Hiro, Erina, Mariko, Ryoma, and Kosuke who have tried out my mock app and gave me advices. 
 
### Content 
 - **Content Sources**: 
   - [National Coffee Association](https://www.ncausa.org/About-Coffee)
   - [Rainforest Alliance](https://voltagecoffee.com/coffee/)
   - [Britannica](https://www.britannica.com/topic/coffee)
   - [key Coffee](https://www.keycoffee.co.jp/e/)
 - **Tutorial Videos**: Step-by-step guides available on: 
   - [GreatStack](https://www.youtube.com/watch?v=PBcqGxrr9g8&t=88s)
   - [Dotinstall](https://dotinstall.com/)

### Media 
 - **Images**: Background wallpaper and icon from Canva
   - Tatahnka Illustrations [https://www.canva.com/p/templates/EAF2VhW6xnQ-peach-and-brown-sketch-coffee-beans-branches-cups-pattern-phone-wallpaper/] 
   - iconbunny [https://www.canva.com/icons/MAF6Hm58SbQ-coffee-beans-icon/]


