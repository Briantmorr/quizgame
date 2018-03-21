// render questions into view.html

class View {

    constructor(gameController) {
        console.log('controller ques:, ', gameController);
        this.gameController = gameController;
        this.questionArray = this.gameController.getQuestions();
        console.log('in here', this.questionArray);
        this.renderAllQuestions();
    }
    renderAllQuestions() {
        console.log('in render');
        for (var i = 0; i < this.questionArray.length; i++) {
            this.renderEachQuestion(this.questionArray[i], i);
        }
    }
    renderEachQuestion(question, index) {
        var qDiv = $('<div>', {
            'class': `questions ${index}`,
            id: index
        });
        var qQuestion = $('<p>', {
            text: `${index + 1}) ${question.question}`
        });
        if (question.type === 'multiple') {
            var qChoices = $('<div>');
            for (var i = 0; i < question.choices.length; i++) {
                var label = $('<label>',{
                    for: index,
                    text: question.choices[i]
                });
                var qChoice = $('<input>', {
                    type: 'radio',
                    'class': 'radiobutton',
                    value: question.choices[i],
                    name: index
                });
                qChoices.append(label, qChoice);
            }
        }
        else {
            var label = $('<label>',{
                for: index,
                text: 'true'
            });
            var qChoices = $('<div>');
            var qChoice = $('<input>', {
                type: 'radio',
                value: 'true',
                name: index
            });
            var label1 = $('<label>',{
                for: index,
                text: 'false'
            });
            var qChoice1 = $('<input>', {
                type: 'radio',
                value: 'false',
                name: index
            });
            qChoices.append(label, qChoice, label1, qChoice1);
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