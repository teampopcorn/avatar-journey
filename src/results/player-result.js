// There is some code duplication here - I recommend compressing this all
// into one function, for example playerResult, that takes good/neutral/bad result and
// a player name, and separates instead the resultParts into different
// objects, goodObject, neutralObject, and badObject.
// Duplication of data is less problematic than duplication of logic.

function goodResult(player) {
    const resultParts = {
        pOne: player.name + ', the Avatar began their journey in the ' + player.masteredElements[0] + ' Nation under the tutelage of the Master Bender. Their training was arduous, but shortly after completing missions in the ' + player.masteredElements[1] + ', ' + player.masteredElements[2] + ', and ' + player.masteredElements[3] + ' Nations the new Avatar was put to the test!',
        pTwo: '  The Fire Nation sought to continue their militant spreading and launched an aggressive campaign against several large water tribes.  ' + player.name + ' organized a resistance with a group of Earth Benders and Earth Master Nairobi who turned the tides in the battle of QuonJi Ice Path. Following the battle, Avatar ' + player.name + ' hosted a summit for the leaders of the Great Nations.',
        pThree: '  Under the watchful eye of Avatar ' + player.name + ', the Fire Nation was demilitarized and the Air Nomads began to gather, restoring balance and peace to the land. Avatar ' + player.name + ' oversaw a century of peace and restoration, the Fire Nation channeled their passion into creativity.  The Fire Benders became known for inventions, and they spread their growing technology across the continent.'
    };
    return [resultParts.pOne, resultParts.pTwo, resultParts.pThree];
}

function neutralResult(player) {
    const resultParts = {
        pOne: player.name + ', the Avatar began their journey in the ' + player.masteredElements[0] + ' Nation under the tutelage of the Master Bender. Their training was emotionally tolling, and shortly after completing missions in the ' + player.masteredElements[1] + ', ' + player.masteredElements[2] + ', and ' + player.masteredElements[3] + ' Nations the new Avatar was challenged!',
        pTwo: '  The Fire Nation sought to continue their militant spreading and launched an aggressive campaign against several large water tribes.  ' + player.name + ' ignored advice from Air Master Heather, and rushed behind enemy lines to attack the Fire Bender Commanders.  In the battle of QuonJi Ice Path, Avatar ' + player.name + ' succeeded in taking down a large part of the forces. Unfortunately, ' + player.name + ' was wounded and lost their left leg.',
        pThree: '  The Avatar was never fully able to curb the passions of the Fire Nation.  Throughout the next 50 years, the Fire Nation tested Avatar ' + player.name + 'by raiding villages until they were able to coerce the Earth Nation to give up large portions of land.'
    };
    return [resultParts.pOne, resultParts.pTwo, resultParts.pThree];
}

function badResult(player) {
    const resultParts = {
        pOne: player.name + ', the Avatar began their journey in the ' + player.masteredElements[0] + ' Nation under the tutelage of the Master Bender.Their training was extrenuous, and shortly after completing missions in the ' + player.masteredElements[1] + ', ' + player.masteredElements[2] + ', and ' + player.masteredElements[3] + ' Nations the new Avatar was overpowered!',
        pTwo: '  The Fire Nation sought to continue their militant spreading and launched an aggressive split campaign against several large water tribes and the Eastern edge of the Earth Nation.  ' + player.name + ' sought an audience with Fire Master Marty in order to reach the Phoenix Lord of Fire.  During their meeting, assassins stormed in and Avatar ' + player.name + ' was blinded in the battle.',
        pThree: '  Avatar ' + player.name + ' never recovered, they were whisked into hiding under the protection of Water Master Tommy. Throughout the next century, the Fire Nation dominated the continent.  The aggressive Nation scattered the water tribes and forced the Earth Nation to retreat within smaller borders.'
    };
    return [resultParts.pOne, resultParts.pTwo, resultParts.pThree];
}

export default { good: goodResult, neutral: neutralResult, bad: badResult };