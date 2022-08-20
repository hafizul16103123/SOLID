interface Question {
    description: string;
    options?: string[];
    displayQuestion(): void;
    displayOptions(): void;
}

class BooleanTypeQuestion implements Question {
    constructor(public description: string) {
        this.description = description
    }
    displayQuestion() {
        console.log(this.description)
    }
    displayOptions() {
        console.log("1. true")
        console.log("2. false")
    }
}

class MultipleChoiceTypeQuestion implements Question {
    constructor(public description: string, public options: string[]) {
        this.description = description
        this.options = options
    }
    displayQuestion() {
        console.log(this.description)
    }
    displayOptions() {
        this.options.forEach((option) => {
            console.log(option)
        })
    }
}

class TextQuestion implements Question {
    constructor(public description: string) {
        this.description = description;
    }
    displayQuestion(): void {
        console.log(this.description);
    }
    displayOptions(): void {
        console.log("Ans:___________________________");
    }

}

const questons = [
    new BooleanTypeQuestion('IS this correct?'),
    new MultipleChoiceTypeQuestion('What is your favourite language ? ', ["1. TS", "2. JS", "3. Python"]),
    new TextQuestion("Intriduce yourself ?")
]

function printQueze(questons) {
    questons.forEach(question => {
        console.log()
        question.displayQuestion();
        question.displayOptions();
    })
}

printQueze(questons)