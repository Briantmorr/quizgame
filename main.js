var gameView = null;
var gameController = null;
$(document).ready(initializeApp);

function initializeApp(){
    gameController = new Controller();
<<<<<<< HEAD
    gameView = new View();
=======
    gameView = new View(gameController);
>>>>>>> d6878b131ad42cb5d5527f3f582343d08936b826
    
}