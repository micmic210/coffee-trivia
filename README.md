# Coffee Trivia Quiz

Welcome to the Coffee Trivia Quiz! This app is designed for coffee enthusiasts of all levels, including passionate enthusiasts and curious newcomers. It provides a fun and engaging platform to test your knowledge and gain further insight into your preferred beverage. <br> You can visit the site here: [Coffee Trivia Quiz](https://micmic210.github.io/coffee-trivia/)

![ai responsive screen](/document/mock-responsive.png)

- - - 

## Table of Contents
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
       - [The 404 Error Page](#the-404-error-page)
- [Future Features](#future-features)
- [Testing](#testing)
    - [Fixed Bugs](#fixed-bugs)
    - [Unfixed Bugs](#unfixed-bugs)
- [Technologies Used](#technologies-used)
- [Languages Used](#languages-used)
- [Frameworks, Libraries and Programs Used](#frameworks-libraries-and-programs-used)
- [Deployment & Local Deployment](#deployment--local-deployment)
    - [Deployment](#deployment)
    - [Local Deployment](#local-deployment)
- [Credits](#credits)
- [Content](#content)
- [Media](#media)

- - - 

## About This App 

Coffee Trivia Quiz combines the thrill of a quiz game with the rich history and culture of coffee. Explore a wide range of topics, including:

* The origins and history of coffee 
* Different coffee beans and their unique flavors 
* Various brewing techniques from around the world 
* Coffee's role in different cultures
* Fun facts and myths about coffee

- - - 

## Design 

### Color Scheme 
The Coffee Trivia Quiz employs a carefully chosen color scheme that reflects the rich and inviting tones of coffee. The colors used enhance the user experience by ensuring clarity and thematic consistency.Below are the colors listed with their specific applications and intended effects:

  | Color | Application | Intention |
  | --- | --- | --- |
  | #5A3D34 | Used for the color of #counter, headings within containers, and text within the error container. | This deep coffee brown evokes the warmth and richness of freshly brewed coffee, enhancing the thematic coherence of the quiz. |
  | #058080 | Used for indicating correct answers and the color of the correct button. | This refreshing teal provides a pleasant contrast reminiscent of minty coffee beverages, effectively highlighting correct responses. |
  | #F45D48 | Used for indicating incorrect answers and the color of the incorrect button. | This warm red stands out like a hot cup of spiced coffee, clearly signaling incorrect choices to the user. |
  | #55423D | Used for the answer buttons before they are clicked. | This dark mocha color offers a consistent, inviting tone for the answer choices, akin to the color of a rich espresso. |
  | #716040 | Used for the start, next and play again buttons. | This light brown complements the overall color scheme, guiding the user through the quiz like the aroma of coffee leading you to your favorite café. |
  | #FEF7F5 | Used for the background paper. | This soft cream color resembles a perfectly frothed latte, providing a clean and readable backdrop, enhancing readability and overall aesthetics. |


 ![The Coffee Trivia Quiz Color Scheme](/document/coffee-trivia-color-palette.png)

- - - 

### Typography 
- The Coffee Trivia Quiz uses the "Poppins" from Google Fonts to enhance readability and create a modern, clean aesthetic. "Poppins" is a versatile sans-serif font with geometric shapes and balanced proportions, ensuring clarity across all devices. Its contemporary look complements the engaging nature of the quiz, making the text easy to read and visually appealing. The font's simplicity and elegance align with the coffee theme, providing a professional and enjoyable user experience. 

![Poppins](/document/poppins.png)

- - -

### Imagery
The Coffee Trivia Quiz web app uses imagery resembling a cozy coffee shop, with soft, muted tones and intricate line drawings of coffee beans and brewing equipment. This enhances the visual appeal and thematic experience, creating a charming environment for users to enjoy. 

- - -

#### Wireframes 
Wireframes are created for mobile and desktop by Balsamiq.

![Homepage](/document/wireframes/mobile-desktop1.png) 
![Quiz Page](/document/wireframes/mobile-desktop2.png)
![Incorrect](/document/wireframes/mobile-desktop3.png)
![Result Page](/document/wireframes/mobile-desktop4.png)

- - -

## Features 
* Diverse Questions: Challenge yourself with questions that range from beginner to expert level.
* Educational Content: Learn interesting tidbits about coffee with every quiz.
* Interactive Gameplay: Enjoy a user-friendly interface that makes quizzing fun and easy.

### Existing Features

#### Homepage
On the Coffee Trivia Quiz homepage, you'll find a welcoming coffee bean logo and a clear title. An inviting message reads, "Hello, coffee lovers! Get ready to test your coffee knowledge." Simply enter your username in the provided box and either hit the start button or press Enter. The coffee-themed background enhances the immersive experience. 

![home](/document/home.png)
#### Username Entry
Users are prompted to enter their username to start the quiz. This step is mandatory for proceeding to the quizzes. While it may seem like a minor inconvenience, it enhances the user experience by personalizing the quiz, displaying their name on the screen.

![username-alert](/document/username-alert.png)

#### Quiz Section
This section presents questions with four possible answers, displaying the user’s name at the top. When a correct answer is selected, the button turns green, and a “Correct!” message appears. If an incorrect answer is chosen, the button turns red, and “Incorrect!” appears, while the correct answer button also turns green. This feature helps users learn from their mistakes. Additionally, a question counter on each page allows users to track their progress.

![answer-correct](/document/correct.png)
![answer-incorrect](/document/incorrect.png)

#### Result Section
After completing the quiz, users see their final score and have the option to retake the quiz with a convenient retry button.

![score](/document/result.png)

#### The 404 Error Page 
The 404 error page on the Coffee Trivia Quiz website features the same coffee-themed background. It displays the message "Sorry, the page you are looking for does not exixt" and includes a "Go Back to Home" button, which helps users quickly return to the main page. <br> You can find the page here: [404 Error Page](https://micmic210.github.io/coffee-trivia/404.html)

![Pages-not-found](/document/404-responsive.png)

- - - 

### Future Features

* __Difficutly Levels__: Enable users to select the difficulty level of questions, such as easy, normal, and hard.
* __Score Tracking and Rankings__: Implement a system to track user scores and provide a ranking system for added competitiveness.

- - -

### Testing 

Please refer to [TESTING.md](/TESTING.md) for detailed results of all the tests performed. 

#### Fixed Bugs

1. Autocomplete Issue: 

  | Description | Cause | Solution |
  | --- | --- | --- |
  | The autocomplete feature was not functioning correctly for certain form fields, particularly for the username input field. | The issue was identified in the developer’s tool, issue section, and was due to the absence of the autocomplete attribute on the field. | Added the autocomplete="username" attribute to the username input field. This resolved the issue, enabling the browser’s autocomplete feature to work as expected. | 


2. Empty Heading in "Username's Challenge": 

  | Description | Cause | Solution |
  | --- | --- | --- |
  | The heading for “Username’s Challenge” was initially empty because it was being generated by JavaScript rather than being predefined in the HTML. | The issue was detected by the W3C Markup Validation Service, which flagged the empty heading as a warning. | Added default text to the heading to ensure it is not blank initially. Verified that the JavaScript code correctly updates the heading with the user’s input when the quiz starts. Additionally, ensured that the CSS styles are properly adapted to the updated structure, maintaining a consistent appearance across all devices. | 


#### Unfixed bugs
No unfixed bugs reported at this time. 

- - - 

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
  - Coolers - to make color pallete https://coolors.co/

- - -

## Deployment & Local Deployment

### Deployment 

  #### To deploy the site by using GitHub page
 
   1. Log in to GitHub. 
   2. Locate the repository: [micmic210/coffee-trivia](https://github.com/micmic210/coffee-trivia) 
   3. Click the "Settings".
   4. Select "Pages" in the left hand navigation menu. 
   5. Go to "Build and deployment" in the "GitHub Pages".
   6. Select "main" for branch and save. 
   7. The site is deployed as the URL becomes available in the top of "GitHub Pages". It will take some time. 

Here's the link - [Coffee Trivia Quiz]( https://micmic210.github.io/coffee-trivia/)

### Local Deployment 

  #### To fork the repositoty: 
  1. Sign in to GitHub.
  2. Navigate to the respository, [micmic210/coffee-trivia](https://github.com/micmic210/coffee-trivia).
  3. Click the Fork button in the upper right corner of the page

  #### To clone the repository: 
   1. Log in to GitHub.
   2. Locate the repository: [micmic210/coffee-trivia](https://github.com/micmic210/coffee-trivia).
   3. Click the "Code".
   4. Select a cloning method: HTTPS, SSH or GitHub CLI.   
   5. Copy the repository, [micmic210/coffee-trivia](https://github.com/micmic210/coffee-trivia) 
   6. Open the terminal and enter "git clone https://github.com/micmic210/coffee-trivia.git" <br> This is an example of using HTTPS. 

- - - 

### Credits 
 - **Mentor**: Mr. Jubril Akolade
 - **Special Thanks**: Hiro, Erina, Mariko, Ryoma, and Kosuke who have tried out my mock app and gave me advices. 

- - -

### Content 
 - **Content Sources**: 
   - [National Coffee Association](https://www.ncausa.org/About-Coffee)
   - [Rainforest Alliance](https://voltagecoffee.com/coffee/)
   - [Britannica](https://www.britannica.com/topic/coffee)
   - [key Coffee](https://www.keycoffee.co.jp/e/)
 - **Tutorial Videos**: Step-by-step guides available on: 
   - [GreatStack](https://www.youtube.com/watch?v=PBcqGxrr9g8&t=88s)
   - [Dotinstall](https://dotinstall.com/)

- - -

### Media 
 - **Images**: Background wallpaper and icon from Canva
   - Peach-and-brown-sketch-coffee-beans-branches-cups-pattern-phone-wallpaper by Tatahnka Illustrations
   - Coffee Beans Icon by iconbunny


[back to table of contents](#table-of-contents)
