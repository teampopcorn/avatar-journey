const waterOne = {
    questTitle: 'Sparring Tournament',
    questDescription: 'Master Tommy takes you and your fellow pupils to an open field, far outside the boundaries of the village. "You will all be sparring against each other today. I\'ve brought you all out here so that you can go all out," announced Master Tommy. "The winner of our little tournament today will only have to go through all the advanced water bending forms ten times tomorrow. Good luck." You make it to the second to last round before you were soundly defeated. You\'re victorious opponent exclaims, "Y\'know I expected the Avatar to be better, since you\'ve only learned water bending like a thousand times, what a loser!"',
    questChoices: [
        {
            choiceName: 'option 1',
            choiceDescription: 'You challenge your opponent to a rematch. They\'ve just disrespected the Avatar and that is unacceptable!',
            choicePoints: 3,
            choiceResult: 'Master Tommy denies your request for a rematch at first, but grants it at your insistence and you were able to defeat them! The Avatar\'s honor was successfully defended!'
        },
        {
            choiceName: 'option 2',
            choiceDescription: 'You brush off the comment. You know that you\'ll master water bending soon enough.',
            choicePoints: 1,
            choiceResult: 'Master Tommy denies your request for a rematch at first, but grants it at your insistence and you were able to defeat them! The Avatar\'s honor was successfully defended! did bad'
        }
    ]
};

const waterTwo = {
    questTitle: 'water two',
    questDescription: 'You try to bend water...Again',
    questChoices: [
        {
            choiceName: 'option 1',
            choiceDescription: 'Good',
            choicePoints: 3,
            choiceResult: 'You did good, once more'
        },
        {
            choiceName: 'option 2',
            choiceDescription: 'Bad',
            choicePoints: 1,
            choiceResult: 'You did bad....still'
        }
    ]
};

const waterThree = {
    questTitle: 'water three',
    questDescription: 'You bend water?',
    questChoices: [
        {
            choiceName: 'option 1',
            choiceDescription: 'Good',
            choicePoints: 3,
            choiceResult: 'Yes'
        },
        {
            choiceName: 'option 2',
            choiceDescription: 'Bad',
            choicePoints: 1,
            choiceResult: 'No'
        }
    ]
};

const earthOne = {
    questTitle: 'earth one',
    questDescription: 'You try to bend earth',
    questChoices: [
        {
            choiceName: 'option 1',
            choiceDescription: 'Good',
            choicePoints: 3,
            choiceResult: 'You did good'
        },
        {
            choiceName: 'option 2',
            choiceDescription: 'Bad',
            choicePoints: 1,
            choiceResult: 'You did bad'
        }
    ]
};

const earthTwo = {
    questTitle: 'earth two',
    questDescription: 'You try to bend earth...Again',
    questChoices: [
        {
            choiceName: 'option 1',
            choiceDescription: 'Good',
            choicePoints: 3,
            choiceResult: 'You did good, once more'
        },
        {
            choiceName: 'option 2',
            choiceDescription: 'Bad',
            choicePoints: 1,
            choiceResult: 'You did bad....still'
        }
    ]
};

const earthThree = {
    questTitle: 'earth three',
    questDescription: 'You bend earth?',
    questChoices: [
        {
            choiceName: 'option 1',
            choiceDescription: 'Good',
            choicePoints: 3,
            choiceResult: 'Yes'
        },
        {
            choiceName: 'option 2',
            choiceDescription: 'Bad',
            choicePoints: 1,
            choiceResult: 'No'
        }
    ]
};



const fireOne = {
    questTitle: 'fire one',
    questDescription: 'You try to bend fire',
    questChoices: [
        {
            choiceName: 'option 1',
            choiceDescription: 'Good',
            choicePoints: 3,
            choiceResult: 'You did good'
        },
        {
            choiceName: 'option 2',
            choiceDescription: 'Bad',
            choicePoints: 1,
            choiceResult: 'You did bad'
        }
    ]
};

const fireTwo = {
    questTitle: 'fire two',
    questDescription: 'You try to bend fire...Again',
    questChoices: [
        {
            choiceName: 'option 1',
            choiceDescription: 'Good',
            choicePoints: 3,
            choiceResult: 'You did good, once more'
        },
        {
            choiceName: 'option 2',
            choiceDescription: 'Bad',
            choicePoints: 1,
            choiceResult: 'You did bad....still'
        }
    ]
};

const fireThree = {
    questTitle: 'fire three',
    questDescription: 'You bend fire?',
    questChoices: [
        {
            choiceName: 'option 1',
            choiceDescription: 'Good',
            choicePoints: 3,
            choiceResult: 'Yes'
        },
        {
            choiceName: 'option 2',
            choiceDescription: 'Bad',
            choicePoints: 1,
            choiceResult: 'No'
        }
    ]
};


const airOne = {
    questTitle: 'air one',
    questDescription: 'You try to bend air',
    questChoices: [
        {
            choiceName: 'option 1',
            choiceDescription: 'Good',
            choicePoints: 3,
            choiceResult: 'You did good'
        },
        {
            choiceName: 'option 2',
            choiceDescription: 'Bad',
            choicePoints: 1,
            choiceResult: 'You did bad'
        }
    ]
};

const airTwo = {
    questTitle: 'air two',
    questDescription: 'You try to bend air...Again',
    questChoices: [
        {
            choiceName: 'option 1',
            choiceDescription: 'Good',
            choicePoints: 3,
            choiceResult: 'You did good, once more'
        },
        {
            choiceName: 'option 2',
            choiceDescription: 'Bad',
            choicePoints: 1,
            choiceResult: 'You did bad....still'
        }
    ]
};

const airThree = {
    questTitle: 'air three',
    questDescription: 'You bend air?',
    questChoices: [
        {
            choiceName: 'option 1',
            choiceDescription: 'Good',
            choicePoints: 3,
            choiceResult: 'Yes'
        },
        {
            choiceName: 'option 2',
            choiceDescription: 'Bad',
            choicePoints: 1,
            choiceResult: 'No'
        }
    ]
};


const earthQuests = [earthOne, earthTwo, earthThree];
const waterQuests = [waterOne, waterTwo, waterThree];
const fireQuests = [fireOne, fireTwo, fireThree];
const airQuests = [airOne, airTwo, airThree];

const allQuests = {
    waterQuests: waterQuests,
    earthQuests: earthQuests,
    fireQuests: fireQuests,
    airQuests: airQuests
};
export default allQuests;