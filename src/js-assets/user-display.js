function userDisplay(player) {
    const userDisplaySection = document.getElementById('user-display');
    // Create element
    const nameP = document.createElement('p');
    nameP.textContent = player.name;
    userDisplaySection.appendChild(nameP);
    
    for(let i = 0; i < player.masteredElements.length; i++) {
        const elementIcon = document.createElement('img');
        elementIcon.src = './assets/' + player.masteredElements[i] + '-icon.png';
        nameP.appendChild(elementIcon);
    }
}
export default userDisplay;