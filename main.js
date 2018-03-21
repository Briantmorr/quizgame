var gameView = null;
var gameController = null;
$(document).ready(initializeApp);

function initializeApp(){
    gameController = new Controller();
    gameView = new View();
    
}