// render questions into view.html

class View {

    constructor(gameController) {
        this.gameController = gameController;
        this.questionArray = this.gameController.getQuestions();
        this.renderAllQuestions();
    }

    renderAllQuestions() {
        for (var i = 0; i < this.questionArray.length; i++) {
            this.renderEachQuestion(this.questionArray[i], i);
        }
    }
    renderEachQuestion(question, i) {
        var qDiv = $('<div>', {
            id: i
        });
        var qQuestion = $('<p>', {
            text: `${i}) ${question.question}`
        });
        if (question.type === 'multiple') {
            var qChoices = $('<div>');
            for (var i = 0; i < question.choices.length; i++) {
                var qChoice = $('<input>', {
                    type: 'radio',
                    value: question.choices[i]
                });
                qChoices.append(qChoice);
            }
        }
        else {
            var qChoices = $('<div>');
            var qChoice = $('<input>', {
                type: 'radio',
                value: 'true'
            });
            var qChoice1 = $('<input>', {
                type: 'radio',
                value: 'false'
            });
            qChoices.append(qChoice, qChoice1);
        }
        qDiv.append(qQuestion, qChoices);
        console.log('qDiv is: ', qDiv);
        $('main').append(qDiv);
    }


    createAnswersObjectFromDOMElements() {

        var userAnswers = [];
        var questions = this.gameController.getQuestions();

        for (let x = 0; x < questions.length; x++) {
            var radios = document.getElementsById(questions[x].id);

            for (let i = 0; i < radios.length; i++) {
                if (radios[i].checked) {
                    userAnswers.push({
                        id: questions[x].id,
                        answer: radios[i].value
                    });
                }
            }
        }
        return userAnswers;
    }

    checkUserAnswers() {
        var userAnswers = this.createAnswersObjectFromDOMElements();
        var finalResult = this.gameController.checkAnswers(userAnswers);
        if (finalResult) {
            var passElement = document.getElementsById('passMessage');
            passElement.classList.remove("hidden");
        } else {
            var taButton = document.getElementsById('tryAgainButton');
            taButton.classList.remove("hidden");
        }
    }

}