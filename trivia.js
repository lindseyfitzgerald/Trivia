const questions = [
    {
        question: "Who does the gang save when they raid the home filled with O'Driscolls in the snow storm?",
        optionA: "Sadie Adler",
        optionB: "Abigail Roberts",
        optionC: "Mary-Beth Gaskill",
        optionD: "Molly O'Shea",
        correctOption: "optionA"
    },

    {
        question: "Who does Arthur go with to hunt the legendary bear?",
        optionA: "Hosea Matthews",
        optionB: "Lenny Summers",
        optionC: "Miach Bell",
        optionD: "Sadie Adler",
        correctOption: "optionA"
    },

    {
        question: "What does Strauss give to people just to make Arthur take it away?",
        optionA: "Hide",
        optionB: "Horses",
        optionC: "Money",
        optionD: "Cattle",
        correctOption: "optionC"
    },

    {
        question: "Who does Arthur go with to save John when he is almost eaten by wolves?",
        optionA: "Miach Bell",
        optionB: "Javier Escuella",
        optionC: "Dutch Van der Linde",
        optionD: "Sean MacGuire",
        correctOption: "optionB"
    },

    {
        question: "Who sends Arthur a letter then asks for help with family?",
        optionA: "Mr. Gillis",
        optionB: "Mary Linton",
        optionC: "Edgar Ross",
        optionD: "Kieran Duffy",
        correctOption: "optionB"
    },

    {
        question: "What town does Lenny and Arthur go to to have '1 or 2' drinks?",
        optionA: "Valentine",
        optionB: "Blackwater",
        optionC: "Rhodes",
        optionD: "Strawberry",
        correctOption: "optionA"
    },

    {
        question: "Who givse Arthur tuberculosis?",
        optionA: "Winton Holmes",
        optionB: "Keiran Duffy",
        optionC: "Thomas Downes",
        optionD: "John Marston",
        correctOption: "optionC"
    },

    {
        question: "Who does the player control after Arthur dies?",
        optionA: "Dutch Van der Linde",
        optionB: "John Marston",
        optionC: "Sadie Adler",
        optionD: "Charles",
        correctOption: "optionB"
    },

    {
        question: "Which settlement is the furthest west on the map?",
        optionA: "Blackwater",
        optionB: "Rio Bravo",
        optionC: "Armadilo",
        optionD: "Tumbleweed",
        correctOption: "optionD"
    },

    {
        question: "Who ends Arthurs life?",
        optionA: "Micah Bell",
        optionB: "Dutch Van der Linde",
        optionC: "Charles",
        optionD: "John Cena",
        correctOption: "optionA"
    },

    {
        question: "What does Arthur ride to get a look at John Marston in prison?",
        optionA: "Boat",
        optionB: "Horse",
        optionC: "Hot Air Balloon",
        optionD: "Para-glider",
        correctOption: "optionC"
    },

    {
        question: "Which gun type does the game never allow you to dual weild?",
        optionA: "Shotgun",
        optionB: "Pistols",
        optionC: "Revolvers",
        optionD: "Repeaters",
        correctOption: "optionD"
    },


    {
        question: "Which gold gun does Dutch dual weild the entire game?",
        optionA: "Schofield Revolver",
        optionB: "Cattleman Revolver",
        optionC: "Double-Action Revolver",
        optionD: "Volcanic Pistol",
        correctOption: "optionA"
    },

    {
        question: "What does uncle tell the gang to rob when they force him to go with them on a robbery?",
        optionA: "Train",
        optionB: "Homestead",
        optionC: "Stagecoach",
        optionD: "Bank",
        correctOption: "optionC"
    },

    {
        question: "Which horse is a 'war' type?",
        optionA: "Belgian",
        optionB: "Ardennes",
        optionC: "Dutch Warmblood",
        optionD: "Kentucky Saddles",
        correctOption: "optionB"
    },

    {
        question: "What is the price Arthur looking to get for 3 stolen horses?",
        optionA: "$10,000",
        optionB: "$1000",
        optionC: "$5000",
        optionD: "$500",
        correctOption: "optionC"
    },

    {
        question: "How does Arthur kill Fussar?",
        optionA: "Shoots with cannon",
        optionB: "Shoots with gun",
        optionC: "Throws him off a cliff",
        optionD: "Chokes him",
        correctOption: "optionA"
    },

    {
        question: "What is the maximum amount of guns a player can carry?",
        optionA: "6",
        optionB: "8",
        optionC: "4",
        optionD: "5",
        correctOption: "optionC"
    },

    {
        question: "What attacks Dutch's friend in the swamp and nearly takes off his leg?",
        optionA: "Shark",
        optionB: "Ram Gator",
        optionC: "Catfish",
        optionD: "Bull Gator",
        correctOption: "optionD"
    },

    {
        question: "Which town has only a gunsmith and a post office in New Hanover?",
        optionA: "Annesburg",
        optionB: "Valintine",
        optionC: "Rhodes",
        optionD: "None",
        correctOption: "optionA"
    },

    {
        question: "Who developed the Read Dead series?",
        optionA: "Rockstar North",
        optionB: "Rockstar San Diego",
        optionC: "Rockstar India",
        optionD: "Rockstar Toronto",
        correctOption: "optionB"
    },

    {
        question: "What year is Read Dead Redemption 2 set in?",
        optionA: "1881",
        optionB: "1893",
        optionC: "1887",
        optionD: "1899",
        correctOption: "optionD"
    },

    {
        question: "Who is Leviticus Cornwall?",
        optionA: "A sheriff from Ambarino",
        optionB: "A wealthy businessman",
        optionC: "A member of Van der Linde gang",
        optionD: "An agent of Pinkerton National Detective Agency",
        correctOption: "optionB"
    },

    {
        question: "What gaming engine is RDR2 based on?",
        optionA: "Unity",
        optionB: "Unreal Engine",
        optionC: "RAGE",
        optionD: "CryEngine",
        correctOption: "optionC"
    },

    {
        question: "What breed of horse foes Dutch Van der Linde ride in RDR2?",
        optionA: "An Appaloosa with brown leopard coat",
        optionB: "A white Arabian",
        optionC: "An Andalisian with dark bay coat",
        optionD: "An Albino horse",
        correctOption: "optionD"
    }

]

let randomQuestions = [] 

const sortQuestions = () => { 
    while (randomQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!randomQuestions.includes(random)) {
            randomQuestions.push(random)
        }
    }
}


let questionNumber = 1
let playerScore = 0 
let wrongAttempt = 0 
let indexNumber = 0

const NextQuestion = (index) => {
    sortQuestions()
    const currentQuestion = randomQuestions[index]
    /*document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore*/
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


const checkAnswer = () => {
    const currentQuestion = randomQuestions[indexNumber] 
    const currentQuestionAnswer = currentQuestion.correctOption 
    const options = document.getElementsByName("option"); 
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's button input with correct answer
            correctOption = option.labels[0].id
        }
    })

    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ 
            indexNumber++ 
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ 
            indexNumber++
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}


const handleNextQuestion = () => {
    checkAnswer() 
    unCheckbuttonButtons()
    setTimeout(() => {
        if (indexNumber <= 9) {

            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

const resetOptionBackground = () => {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

const unCheckbuttonButtons = () => {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}


const handleEndGame = () => {
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

const closeScoreModal = () => {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    randomQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

const closeOptionModal = () => {
    document.getElementById('option-modal').style.display = "none"}