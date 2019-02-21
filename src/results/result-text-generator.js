
function goodResult(player) {
    const resultParts = {
        pOne: player.name + 'the Avatar began their journey in the ' + player.masteredElements[0] + ' Nation under the tutelage of the Master Bender. Their training was arduous, but shortly after completing missions in the ' + player.masteredElements[1] + ', ' + player.masteredElements[2] + ', and ' + player.masteredElements[3] + ' Nations the new Avatar was put to the test!',
        pTwo: '  The Fire Nation sought to continue their militant spreading and launched an aggressive campaign against several large water tribes.  ' + player.name + ' organized a resistance with a group of Earth Benders and Earth Master Nairobi who turned the tides in the battle of QuonJi Ice Path. Following the battle, Avatar ' + player.name + ' hosted a summit for the leaders of the Great Nations.',
        pThree: '  Under the watchful eye of Avatar ' + player.name + ', the Fire Nation was demilitarized and the Air Nomads began to gather, restoring balance and peace to the land. Avatar ' + player.name + ' oversaw a century of peace and restoration, the Fire Nation channeled their passion into creativity.  The Fire Benders became known for inventions, and they spread their growing technology across the continent.'
    };
    return resultParts.pOne + resultParts.pTwo + resultParts.pThree;
}

export default goodResult;