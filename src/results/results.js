import userDisplay from '../js-assets/user-display.js';
import playerResult from './player-result.js';
const json = window.localStorage.getItem('player');
const player = JSON.parse(json);
const resultSection = document.getElementById('results');

userDisplay(player);

function tally(score) {
    if(score > 21) {
        return playerResult.good(player);
    } else if(score > 15) {
        return playerResult.neutral(player);
    } else {
        return playerResult.bad(player);
    }
}

resultSection.textContent = tally(player.score);

