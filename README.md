# Ryan's TTT game for HRATX40

WIP Repo for a tic tac toe game mini-app 

## Things to do

- [x] Create a ToDo list in ReadMe
- [x] Format ToDo list for readability
- [x] Add HTML index
- [x] Add Stylesheet
- [x] Add JS for HTML
- [ ] Create a changelog after achieving MVP v0.0
	- [ ] Draw and a Table
	- [ ] Draw Xs and Os, alternating after each press
	- [ ] Reset Table

## Notes and Research of on the humble Tic-Tac-Toe game

How do things work around here?

  psuedo-whiteboarding!

  How can we create an HTML/JS/CSS Tic-tac-toe game?
  How is it structure?

  What's the flow of the gameplay?
    How does the game start?
    How does the game end?
      What is the win condition?

  How are things handled?
    When a square is clicked it should draw a circle
      The opposite is true for Xs
    How do we know whose turn it is? X or O

    What is the win condition?
      When you can strike through 3 of a kind
      Othewise it's a CAT game


	Answering how should be the board be structure?
	Xs and Os should be contained in a `<div>`
	within that `<div>` should contain arrays of divs.
	
	Essentially a matrix!

	So the matrix is made, but it's hardcoded 9 cells.
	It'd be a hassle to create and refer to each cell by class.

	Unless there is some sort of way to draw the table using our app.js!

	How can I check game state?
