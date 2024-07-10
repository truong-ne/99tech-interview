# Task

Write the specification for a software module on the API service (backend application server).

1. Create a documentation for this module on a `README.md` file.
2. Create a diagram to illustrate the flow of execution.
3. Add additional comments for improvement you may have in the documentation.
4. Your specification will be given to a backend engineering team to implement.

### Software Requirements

1. We have a website with a score board, which shows the top 10 user’s scores.
2. We want live update of the score board.
3. User can do an action (which we do not need to care what the action is), completing this action will increase the user’s score.
4. Upon completion the action will dispatch an API call to the application server to update the score.
5. We want to prevent malicious users from increasing scores without authorization.

<!-- Analyze project needs - Technical need -->

1. Live Update The score board + Complete Action Increase user'score: socket.io or streaming queue ( for streaming queue client must be consume to queue to get data ). Using socket.io will be more effective for project cost and availability
2. Client Send Event Socket; Socket return live data to client
3. Prevent malicious: Rate Limiting + UserWSGuard

<!-- specification Document -->

1. FLOW
   ![Flow](/Problem-6/flow.png)
2. USE CASE
   | USE CASE | SCORE BOARD |
   | ------------- |:-------------|
   | name | Update user score board |
   | description | Upon completion the action will dispatch an API call to the application server to update the score. |
   | actor | user |
   | priority | medium |
   | pre-condition | user logged in and connect to socket server |
   | basic flow | 1. do something \n 2. system update score board \n 3. update successfully |
   | alternate flow | user not logged in |
   | exception flow | update fail and return message |
