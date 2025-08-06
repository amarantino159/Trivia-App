Trivia GAME


MVP: Minimum Viable Product
  Have basic Trivia Questions
    same json format from API, just mocked
  Have basic user inputs
    only multiple choice
  Have basic score keeping for Single player
    useContext for multiple rounds of questions

MVP++: One step above MVP
  Pull Trivia questions from Trivia API
  Have multiple user input types for multiple question types
  Score keeping for multiplayer
  Basic CSS

MVP#: two steps above MVP
  Make custom questions
  Multiplayer tournament tracking
    Bar trivia vs classroom vs PVP
  Timer for each question/set of questions

MVPv3FinalFinal: three steps above MVP
  Making questions automatically form other APIs
  CSS theming for tournament type and/or api questions are from


File Structure: VITE APP
  src: client side folder
    Component files
      App
      text Question component
      picture and text Question component
      UI Answers component
      score board component
      tournament title bar component
    Style files
      main .css for theming, export to rest of the .css files
    Test files
    Context files
      scores
      theme
      question bank
      tournament rules
      round rules
  server: for API and mocked data
    3000 server spun up ahead of time in case of API misbehaving
    API Fetch/.test

Epics: (each line is a user story)
  Trivia game set up:
    A user wants to make a single player, multiple choice, and a specific category, Trivia app question set, game with 2 rounds and 25 questions a round with a chosen category per round.
    The user selects from the home page each of those items from dropdown or buble select UIs and hits the Start Game button.
    The user is taken to another page showing the first question and answer section, the round number, the number of questions done and remaining, and the current score.
    After answering each question and round the user is taken to a final scoreboard screen with high-scores.
  Multiplayer Game set up:
    A user wants to play a trivia game against a friend. Like the previous epic they see on the home screen all the game choices.
    They choose all the game settings they need and select 2 player.
    They hit run game and are brought to the game screen where along with the questions and answers, round, and score they also see who's turn it is and who's currently winning.
    After the final round an overall win screen shows who won and by how much and how the scores compare to the high-scores.
    Repeat this epic for 3 and 4 players.
  Bar trivia set up:
    like multiplayer but now showing teams and switching not just players but also by team for each round.
    End of each round shows the team leader boards with team MVPs
    End of the game the overall tournament bracket style outcome summary is shown
  Classroom trivia set up:
    like multiplayer but now with a 20+ free for all and a running leaderboard after each question.
    each question has a timer and the faster to answer gets more points.
    win streaks get more points.
    Final leaderboard shows who had the biggest comeback/ longest streak.
  Non trivia API questions:
    User is a teacher that wants one game with custom questions and one with fun pokemon ones
    Need a custom question bank.
    Need an API pull from a pokemon API to auto generate pokemon questions.
    then those questions cna be used in any of the previous modes.

KANBAN BOARD:
Backlog
  Have basic Trivia Questions
    same json format from API, just mocked
  Have basic user inputs
    only multiple choice
  Have basic score keeping for Single player
    useContext for multiple rounds of questions
Blocks

Doing

Todo

Tested
Finished








