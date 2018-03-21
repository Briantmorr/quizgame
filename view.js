// render questions into view.html

class View{

    constructor(gameController){
        this.gameController = gameController;
    }
    
    renderAllQuestions() {
        for (var i = 0; i < questionArray.length; i++) {
            this.renderEachQuestion(questionArray[i]);
        }
    }
    renderEachQuestion(question){

    }

    createAnswersObjectFromDOMElements(){

        var userAnswers = [];
        var questions = this.gameController.getQuestions();

        for(let x = 0; x < questions.length; x++){
            var radios = document.getElementsById(questions[x].id);

            for (let i = 0; i < radios.length; i++){
                if (radios[i].checked){       
                    userAnswers.push({
                        id: questions[x].id,
                        answer: radios[i].value
                    });      
                }
            }
        }
        return userAnswers;
    }

    checkUserAnswers(){
        var userAnswers = this.createAnswersObjectFromDOMElements();
        var finalResult = this.gameController.checkAnswers(userAnswers);
        if(finalResult){
            var passElement = document.getElementsById('passMessage');
            passElement.classList.remove("hidden");
        }else{
            var taButton = document.getElementsById('tryAgainButton');
            taButton.classList.remove("hidden");
        }
    }

}