const questions = [
    {
        quest: "what is your name?",
        ans: [
            {
                text: "lucifer",
                correct: true,
            },
            {
                text: "Mike tyson",
                correct: false,
            },
            {
                text: "Elon Musk",
                correct: false,
            },
            {
                text: "Musk",
                correct: false,
            }
        ]
    },
    {
        quest: "what ise?",
        ans: [
            {
                text: "luer",
                correct: true,
            },
            {
                text: "Mson",
                correct: false,
            },
            {
                text: "Elon Musk",
                correct: false,
            },
            {
                text: "Musk",
                correct: false,
            }

        ]
    },
    {
        quest: "what is your game?",
        ans: [
            {
                text: "football",
                correct: true,
            },
            {
                text: "Mike tyson",
                correct: false,
            },
            {
                text: "Elon Musk",
                correct: false,
            },
            {
                text: "Musk",
                correct: false,
            }
        ]
    },
    {
        quest: "what is your fame?",
        ans: [
            {
                text: "MMA",
                correct: true,
            },
            {
                text: "Mike tyson",
                correct: false,
            },
            {
                text: "Elon Musk",
                correct: false,
            },
            {
                text: "Musk",
                correct: false,
            }
        ]
    },
    {
        quest: "what is your craze?",
        ans: [
            {
                text: "tns",
                correct: true,
            },
            {
                text: "Mike tyson",
                correct: false,
            },
            {
                text: "Elon Musk",
                correct: false,
            },
            {
                text: "Musk",
                correct: false,
            }
        ]
    },
]

let questNumber = 0;
let score = 0;
let mcq = questions[questNumber]["ans"].length



const box = document.getElementById("answer-buttons")

function start(questNumber) {
    const questionElement = document.getElementById("question")
    questionElement.innerHTML = questions[questNumber]["quest"]

    for (let i = 0; i < mcq; i++) {
      const  button = document.createElement("button")
        button.innerHTML = questions[questNumber]["ans"][i]["text"]
        button.classList.add("btn")
        button.addEventListener("click",
            function () {
                if (questions[questNumber]["ans"][i]["correct"] == true) {
                    button.innerHTML = "correct"
                    score++
                }
                else {
                    button.innerHTML = "incorrect"
                }
            })

        box.appendChild(button)
    }

    const nextButton = document.getElementById("next-btn")
    nextButton.addEventListener(
        "click",
        function () {

            questionElement.innerHTML = ""
            questNumber++

            while (box.firstChild) {
                box.removeChild(box.firstChild)
            }

            if (questNumber < questionLength) {
                start(questNumber)
            }
            else {
                const scorecard = document.getElementById("num")
                scorecard.innerHTML = "Score :" + score

            }

        }
    )
}

const questionLength = questions.length

start(questNumber)
