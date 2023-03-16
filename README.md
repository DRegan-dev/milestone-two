# Triviopolis
Welcome to Triviopolis. This site is designed to invite users to participate in a race against the clock multiple choice type quiz to save the citizens of triviopolis from an evil entity known as The Void. Triviopolis is a fully responsize quiz that allows users to see the question above 4 buttons containing 4 possible answers to each question. As soon as one question is answers another will appear. Users have 60 seconds to answer all 15 questions. The score of the game equates to number of citizens saved so users must answer quickly if they want to save as many citiazens as they can. 

For example, Love Maths is a site that hopes to demonstrate how pure JavaScript works in a real-world context. The site will be targeted toward people who not only love to implement more advanced JavaScript concepts but also maths. Love Maths is a fully responsive JavaScript maths game that will allow users to add, subtract, multiply and divide numbers.

Responsice Mockup

Features
The Landing Page:

The Landing page consists of a greeting message of "Welcome to Triviopolis", a set up of the story Narrative and a button which allows the user to decide if they would like to proceed forward and further into the game.

The Instructions page
This gives the user a breakdown of what is required of them to play the game and how the game will respond if they carry out those required actions. It also features a button where the user can click to proceed forward to the next page.

StoryBoard page
This provides our first look at the games antagonist character "The Void". The purpose of this page is to provide the user an opportunity to get more emotionally invested in the game through a dialogue from its main character. It also provides the user an opportunity to proceed to the quiz page. 

The quiz page
The quiz page consists of the tricoplois logo displayed at the top of the page and two divs. one for displaying the questions and answer choices and the other for displaying the 60 second timer. The user will be able to select whichever answer they believe to be correct. They have 15 questions to play through with responsive answer buttons to select their answers. If time runs out or they answer all 15 questions before the time runs out the questions and answer choices disappear and the users score is displayed. This page also features a restart button which will reload the page and allow the user to start the quiz again. 

Future iterations
Future iterations of this quiz will include randomized displaying of questions so that its not the same sequnce of question everytime you restart the quiz.
It will also include an even more responsive design and more story and rounds to play through with increasing level of challenge in each.

Testing
No errors were found when testing this sites CSS @url(https://jigsaw.w3.org/css-validator/validator)

No errors were found when testing this sites HTML code @url (https://validator.w3.org/nu/?doc=https%3A%2F%2Fcode-institute-org.github.io%2Flove-maths%2F)

No errors were found when testing this sites Javascript code @url (https://jshint.com/)
However one warning came back as follows: 	"Functions declared within loops referencing an outer scoped variable may lead to confusing semantics. (questions, questionIndex, score, questionContainer, quizContainer, displayQuestion, endQuiz)"

This will be fixed in a future iteration.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.



The site was deployed to GitHub pages. The steps to deploy are as follows:
In the GitHub repository, navigate to the Settings tab
From the source section drop-down menu, select the Master Branch
Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.
The live link can be found here - https://code-institute-org.github.io/love-maths/

Credits
Inspiration for this site came from Netflix trivaverse quiz. 
Java script functions were obtained from w3schools. 
and the neon flicker effect was taken from code found on https://css-tricks.com/how-to-create-neon-text-with-css/