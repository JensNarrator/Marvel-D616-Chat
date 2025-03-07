function rollAbility() {
    return Math.floor(Math.random() * 6) + 1;  // Rolls 1d6
}

function createCharacter() {
    let name = document.getElementById("heroName").value;
    let type = document.getElementById("heroType").value;

    if (name.trim() === "") {
        alert("Please enter a hero name!");
        return;
    }

    let abilities = {
        Might: rollAbility(),
        Agility: rollAbility(),
        Resilience: rollAbility(),
        Vigilance: rollAbility(),
        Ego: rollAbility(),
        Logic: rollAbility()
    };

    document.getElementById("characterOutput").innerHTML = `
        <h2>Your Hero: ${name}</h2>
        <p>Type: ${type}</p>
        <h3>Ability Scores:</h3>
        <ul>
            <li>Might: ${abilities.Might}</li>
            <li>Agility: ${abilities.Agility}</li>
            <li>Resilience: ${abilities.Resilience}</li>
            <li>Vigilance: ${abilities.Vigilance}</li>
            <li>Ego: ${abilities.Ego}</li>
            <li>Logic: ${abilities.Logic}</li>
        </ul>
    `;
}
