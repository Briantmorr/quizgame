//start with an array of 8 questions that are true/false or multiple choice

class Model{
    
    constructor(){
        this.questionArray = [
            {
                id: 1, 
                question: "cattle have four stomachs to digest grass.",
                type:'true/false',
                answer:'true'
            },
            {
                id: 2, 
                question: "an ostrich's eye is bigger than its brain",
                type:'true/false',
                answer:'true'
            },
            {
                id: 3, 
                question: "an ant can live to be 29 years old",
                type:'true/false',
                answer:'true'
            },
            {
                id: 4, 
                question: "a mole can dig a tunnel 500 feet long in just one night",
                type:'true/false',
                answer:'false'
            },
            {
                id: 5, 
                question: "a donkey is an ass",
                type:'true/false',
                answer:'true'
            },
            {
                id: 6, 
                question: "dalmatians are born without spots.",
                type:'true/false',
                answer:'true'
            },
            {
                id: 7, 
                question: "which animal has the longest lifespan?",
                type:'multiple',
                choices: [
                    'Elephant', 'locust', 'blue whale', 'giant tortoise'
                ],
                answer: 'giant tortoise'
            },
            {
                id: 8, 
                question: "Which of the following animals sleep standing up?",
                type:'multiple',
                choices: [
                    'Gorillas', 'Flamingos', 'Camels', 'Ravens'
                ],
                answer: 'Flamingos'
            },
        ];
    }

    getQuestions(){
        return this.questionArray;
    }
}
