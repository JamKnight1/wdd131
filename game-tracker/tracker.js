const games = [{
    title:'Clair Obscur: Expidition 33',
    description:'Leave your home of Lumiere to defeat the Paintress and take back your future.',
    image: './images/Clair-Obscur.jpg',
    releaseDate:'April 24, 2025',
    genre:'RPG',
    rating:'92%'
},
{
    title:'Marvel Rivals',
    description:'Take on the Doctor Dooms of present and future in teams of 6 to save the shattering multiverse.',
    image:'./images/Marvel-Rivals.jpg',
    releaseDate:'December 5, 2024',
    genre:'Hero Shooter',
    rating:'74%'
},
{
    title:'Slay the Spire',
    description:'Climb the everchanging spire with your curated deck of cards',
    image:'./images/Slay_the_spire.jpg',
    releaseDate:'January 23, 2019',
    genre:'Card',
    rating:'89%'
},
{
    title:'Minecraft',
    description:'Minecraft',
    image:'./images/Minecraft.jpg',
    releaseDate:'May 17, 2009',
    genre:'Sandbox',
    rating:'93%'
},
{
    title:'Super Mario Bros',
    description:'Jump and dash through the Mushroom Kingdom to save Princess Peach from the nefarious Bowser',
    image:'./images/Super_Mario_Bros..png',
    releaseDate:'September 13, 1985',
    genre:'Platformer',
    rating:'84%'
},
{
    title:'Halo: Combat Evolved',
    description:'Stop the Covenant threat in the stars as Master Chief and discover the history of the Halo',
    image:'./images/Halo.jpg',
    releaseDate:'November 15, 2001',
    genre:'First Person Shooter',
    rating:'97%'
}]

const searchForm = document.getElementById("search-form");
const siteSearch = document.getElementById("site-search");
const gameCard = document.getElementById("game-card");

// const playingGames =
//     JSON.parse(localStorage.getItem("playingGames")) || [];

// playingGames.forEach(game => {
//     displayGame(game);
// });

// const finishedGames =
//     JSON.parse(localStorage.getItem("finishedGames")) || [];

// finishedGames.forEach(game => {
//     displayGame(game);
// });



// display game
function displayGame(game) {
    gameCard.innerHTML = `
        <article class="game-card">
            <img class="game-img" src="${game.image}" alt="${game.title}">

            <div class= "game-info">
                <h2 class="game-title">${game.title}</h2>
                <p class="release-date">Release Date: ${game.releaseDate}</p>
                <p class="genre">Genre: ${game.genre}</p>
                <div class="rating">${game.rating} on Metacritic</div>
                <p class="description">${game.description}</p>
            </div>
            <div class="game-buttons">
                <button id="playing-btn">Actively Playing</button>
                <button id="finished-btn">Finished</button>
            </div>
        </article>
    `;
    document
    .getElementById("playing-btn")
    .addEventListener("click", () => {
        addToList("playingGames", game);
    });

document
    .getElementById("finished-btn")
    .addEventListener("click", () => {
        addToList("finishedGames", game);
    });
}


// random game
function randomGame() {
    const randomIndex = Math.floor(Math.random() * games.length);
    displayGame(games[randomIndex]);
}

randomGame();


// Search function
searchForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const search = siteSearch.value.toLowerCase();

    const results = games.filter(game => {
        return (
            game.title.toLowerCase().includes(search) ||
            game.description.toLowerCase().includes(search)
        );
    });

    results.sort((a, b) => {
        return a.title.localeCompare(b.title);
    });

    if (results.length > 0) {
        displayGame(results[0]);
    }
    else {
        gameCard.innerHTML =
            "<p>No games found.</p>";
}
});

function addToList(storageKey, game) {

    // Get existing list
    const list = JSON.parse(localStorage.getItem(storageKey)) || [];

    // Prevent duplicates
    const exists = list.some(item => item.title === game.title);

    if (!exists) {
        list.push(game);
    }

    // Save updated list
    localStorage.setItem(storageKey, JSON.stringify(list));

    alert(`${game.title} added!`);
}




