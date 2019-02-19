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

const waterQuests = [waterOne, waterTwo, waterThree];

export default waterQuests;