function userDisplay(player) {
    const userDisplaySection = document.getElementById('user-display');
    // Create element
    const nameP = document.createElement('p');
    nameP.textContent = player.name;
    userDisplaySection.appendChild(nameP);
    
    for(let i = 0; i < player.masteredElements.length; i++) {
        const elementSpan = document.createElement('span');
        elementSpan.textContent = player.masteredElements[i];
        nameP.appendChild(elementSpan);
    }
}
export default userDisplay;