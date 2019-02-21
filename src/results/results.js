import userDisplay from '../js-assets/user-display.js';
const json = window.localStorage.getItem('player');
const player = JSON.parse(json);
const resultSection = document.getElementById('results');

userDisplay(player);

function tally(score) {
    if(score > 21) {
        return 'good';
    } else if(score > 15) {
        return 'okay';
    } else {
        return 'bad';
    }
}

resultSection.textContent = tally(player.score);

const good = {
    pOne: '*NAME* the Avatar began their journey in the *ELEMENT* Nation under the tutelage of *ELEMENT MASTER*.  Their training was arduous, but shortly after completing missions in the *OTHER ELEMENTS* Nations the new Avatar was put to the test!',
    pTwo: 'The Fire Nation sought to continue their militant spreading and launched an aggressive campaign against several large water tribes.  *NAME* organized a resistance with a group of Earth Benders and Earth Master Nairobi who turned the tides in the battle of QuonJi Ice Path. Following the battle, Avatar *NAME* hosted a summit for the leaders of the Great Nations.',
    pThree: 'Under the watchful eye of Avatar *NAME*, the Fire Nation was demilitarized and the Air Nomads began to gather, restoring balance and peace to the land.Avatar *NAME* oversaw a century of peace and restoration, the Fire Nation channeled their passion into creativity.  The Fire Benders became known for inventions, and they spread their growing technology across the continent.'
}
const neutral = {
    pOne: '*NAME* the Avatar began their journey in the *ELEMENT* Nation under the tutelage of *ELEMENT MASTER*.  Their training was emotionally tolling, and shortly after completing missions in the *OTHER ELEMENTS* Nations the new Avatar was challenged!',
    pTwo: 'The Fire Nation sought to continue their militant spreading and launched an aggressive campaign against several large water tribes.  *NAME* ignored advice from Air Master Heather, and rushed behind enemy lines to attack the Fire Bender Commanders.  In the battle of QuonJi Ice Path, Avatar *NAME* succeeded in taking down a large part of the forces. Unfortunately, *NAME* was wounded and lost their left leg.',
    pThree: 'The Avatar was never fully able to curb the passions of the Fire Nation.  Throughout the next 50 years, the Fire Nation tested Avatar *NAME* by raiding villages until they were able to coerce the Earth Nation to give up large portions of land.'
}

const neutral = {
    pOne: '*NAME* the Avatar began their journey in the *ELEMENT* Nation under the tutelage of *ELEMENT MASTER*.  Their training was extrenuous, and shortly after completing missions in the *OTHER ELEMENTS* Nations the new Avatar was overpowered!',
    pTwo: 'The Fire Nation sought to continue their militant spreading and launched an aggressive split campaign against several large water tribes and the Eastern edge of the Earth Nation.  *NAME* sought an audience with Fire Master Marty in order to reach the Phoenix Lord of Fire.  During their meeting, assassins stormed in and Avatar *NAME* was blinded in the battle.',
    pThree: 'Avatar *NAME* never recovered, they were whisked into hiding under the protection of Water Master Tommy. Throughout the next century, the Fire Nation dominated the continent.  The aggressive Nation scattered the water tribes and forced the Earth Nation to retreat within smaller borders.'
}
