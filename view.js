// render questions into view.html
var gameView = null;
var gameController = null;
$(document).ready(initializeApp);

function initializeApp(){
    gameController = new Controller();
    gameView = new View();
    
}
class View{
    constructor(){
        gameController.setQuestions(questionArray);
    }
    renderAllQuestions() {
        for (var i = 0; i < questionArray.length; i++) {
            this.renderEachQuestion(questionArray[i]);
        }
    }
    renderEachQuestion(question){

    }

}