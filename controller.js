
class Controller {

    constructor(){
        this.questions = [];
        this.answers = {};
    }

    getQuestions(){
        this.questions;
    }

    setQuestions(questions){        
        for(let i =0; i < questions;i++){
            addQuestion(questions[i]);
        }        
    }

    addQuestion(question){
        this.questions.push(question);
        this.answers[question.number] =  question.answer;        
    }

    checkAnswers(userAnswers){
        var countCorrectAnswers = 0;
        for(let i = 0; i < userAnswers.length; i++){
            if(userAnswers[i].answer === this.answers[userAnswers[i].number]){
                countCorrectAnswers++;
            }
        }
    }

    calculatePercentage(countCorrectAnswers){
        var percentage = (100 * this.questions.length) / countCorrectAnswers;
        if(percentage >= 75){
            return true;
        }
        return false;
    }
}