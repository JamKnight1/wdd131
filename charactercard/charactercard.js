// Character object
const character = {
    name: "The King of Charlamagne",
    class: "Warforged Paladin",
    level: 1,
    health: 100,

    attacked() {
        this.health -= 20;

        if (this.health <= 0) {
            this.health = 0;
            document.getElementById("message").textContent =
                `${this.name} has died.`;
        }

        updateCard();
    },

    levelUp() {
        this.level += 1;
        updateCard();
    }
};

// Updates the information displayed on the card
function updateCard() {
    document.querySelector(".characterName").textContent = character.name;
    document.getElementById("characterClass").textContent = character.class;
    document.getElementById("characterLevel").textContent = character.level;
    document.getElementById("characterHealth").textContent = character.health;
}

// Button event listeners
document.getElementById("attackBtn").addEventListener("click", () => {
    character.attacked();
});

document.getElementById("levelUpBtn").addEventListener("click", () => {
    character.levelUp();
});

// Initial display
updateCard();