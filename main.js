
$(document).ready(initializeApp);

function initializeApp(){
    var gameModel = new Model();
    var gameController = new Controller();
    gameController.setQuestions(gameModel.getQuestions());
    var gameView = new View(gameController);
    
}