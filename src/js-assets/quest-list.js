const waterOne = {
    questTitle: 'water one',
    questDescription: 'You try to bend water',
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
    questTitle: 'Introduction to Fire Bending',
    questDescription: 'You approach a large shallow brazier, and notice a small drop of oil beaded at the center.  Marty stands across from you, his eyes flat and penetrating, a small smirk tugging at the corner of his mouth. "Your task is simple, Avatar.  Access your Jing, create a spark, and maintain the ensuing blaze to the best of your ability.  There is enough oil here for a master bender to maintain a week long fire, similarly apprentice benders often walk away from this challenge wearing ashes instead of clothing.  Summon a memory filled with passion, and feel the desire of the fire within you."',
    questChoices: [
        {
            choiceName: 'option 1',
            choiceDescription: 'Choose a memory of Anger',
            choicePoints: 5,
            choiceResult: 'You immediately conjure thoughts of the corruption present in your current world. A heat blossoms in your chest and you feel is spread through your limbs, the instant you focus on the oil a blaze blasts forth from the brazier and you feel an intest heat waft through your core.  Marty smiles around the pillar of flame.'
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