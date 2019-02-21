const waterOne = {
    questTitle: 'Sparring Tournament',
    questDescription: 'Master Tommy takes you and your fellow pupils to an open field, far outside the boundaries of the village. "You will all be sparring against each other today. I\'ve brought you all out here so that you can go all out," announced Master Tommy. "The winner of our little tournament today will only have to go through all the advanced water bending forms ten times tomorrow. Good luck." You make it to the second to last round before you were soundly defeated. You\'re victorious opponent exclaims, "Y\'know I expected the Avatar to be better, since you\'ve only learned water bending like a thousand times, what a loser!"',
    questChoices: [
        {
            choiceName: 'option 1',
            choiceDescription: 'You challenge your opponent to a rematch. They\'ve just disrespected the Avatar and that is unacceptable!',
            choicePoints: 1,
            choiceResult: 'Master Tommy denies your request for a rematch at first, but grants it at your insistence and you were able to defeat them! The Avatar\'s honor was successfully defended!'
        },
        {
            choiceName: 'option 2',
            choiceDescription: 'You brush off the comment. You know that you\'ll master water bending soon enough.',
            choicePoints: 3,
            choiceResult: 'Your opponent seems to have gotten riled up at your disinterest in their comment. They end up losing in the final round. Master Tommy praises you for your restraint.'
        }
    ]
};

const waterTwo = {
    questTitle: 'Ambush',
    questDescription: 'On the way back to your igloo from water bending training, your are suddenly surrounded by a group of masked water benders. They all begin to attack you with projectile balls of ice.',
    questChoices: [
        {
            choiceName: 'option 1',
            choiceDescription: 'You stop the ice balls and launch a counter attack on each assailant.',
            choicePoints: 1,
            choiceResult: 'The masked water benders are all on the ground, having been subdued by you. Master Tommy appears and says "You still have much to learn before you can be a true water bender."'
        },
        {
            choiceName: 'option 2',
            choiceDescription: 'You divert the path of the ice balls and have them hit your attackers.',
            choicePoints: 3,
            choiceResult: 'The masked water benders are all on the ground, having been subdued by you. Master Tommy appears and says "You\'re thinking like a true water bender!"'
        }
    ]
};

const waterThree = {
    questTitle: 'Kiyoshi on Fire',
    questDescription: 'Master Tommy has given you the week off and so you decide to visit the island of Kiyoshi. You thought it would be a good opportunity to learn about your past life and maybe find guidance or wisdom on how to be a good Avatar. As Kiyoshi Island comes into view, you notice that smoke is starting to come up from the from the village. A lot of smoke, more than just from a simple fire. Someone has set the village aflame! As you get closer to the island, you see a small group of people fleeing the island and lighting the path behind them on fire. They board a small boat and are making their escape.',
    questChoices: [
        {
            choiceName: 'option 1',
            choiceDescription: 'You rush to the village and try to put out the fires. Even though you\'re not a water bending master yet, you know that you can still help out!',
            choicePoints: 1,
            choiceResult: 'You were able to help the villagers put out the fire. They give you their gratitude and provide you hospitality while you continue to help them rebuild the damaged parts of the village. The villagers also share with you their history of Avatar Kiyoshi. You return to the Southern Water Tribe after a great week!'
        },
        {
            choiceName: 'option 2',
            choiceDescription: 'You divert course and chase after the arsonists. If you don\'t catch them now, then they\'ll never be brought to justice!',
            choicePoints: 1,
            choiceResult: 'After chasing them for awhile, you begin to realize that you won\'t be able to catch up to them. You give up the pursuit and return to Kiyoshi Island only to find that it has been almost completely burned down. You do your best to help rebuild the village as much as you can, but the week ends and you have to leave. '
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