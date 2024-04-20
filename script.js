// Sample data
const players = [
    { name: "Martin Odegaard", image: "martin.jpeg", club: "Arsenal" },
    { name: "Xavi Simmons", image: "xavi.png", club: "RB Leipzig" },
    { name: "Florian Wirtz", image: "wirtz.png", club: "Bayer 04 Leverkusen" },
    { name: "Jeremie Frimpong", image: "frimpong.png", club: "Bayer 04 Leverkusen" },
    { name: "Pedri", image: "pedri.png", club: "Barcelona" },
    { name: "Kevin De Bruyne", image: "kevin.jpg", club: "Manchester City" },
    { name: "Erling Haaland", image: "haaland.png", club: "Manchester City" },
    { name: "Cristiano Ronaldo", image: "ronaldo.png", club: "Al Nassr" },
    { name: "Lionel Messi", image: "messi.png", club: "Inter Miami" },
    { name: "Ousmane Dembele", image: "dembele.png", club: "Paris Saint-Germain" },
    { name: "William Saliba", image: "saliba.png", club: "Arsenal" },
    { name: "Bukayo Saka", image: "saka.png", club: "Arsenal" },
    { name: "Phil Foden", image: "foden.png", club: "Manchester City" },
    { name: "Marcus Rashford", image: "rashford.png", club: "Manchester United" },
    { name: "Sunil Chettri", image: "sunil.png", club: "Bengaluru FC" },
    { name: "Kylian Mbappe", image: "mbappe.png", club: "Paris Saint-Germain" },
    { name: "Vigil Van Dijk", image: "dijk.png", club: "Liverpool" },
    { name: "Trent Alexander Arnold", image: "taa.png", club: "Liverpool" },
];

// Function to display
function displayPlayers(playerList) {
    const playerDisplay = document.getElementById("playerDisplay");
    playerDisplay.innerHTML = "";

    playerList.forEach(player => {
        const playerCard = document.createElement("div");
        playerCard.classList.add("player-card");
        
        const playerImage = document.createElement("img");
        playerImage.src = "images/" + player.image;
        playerImage.alt = player.name;
        
        const playerName = document.createElement("h3");
        playerName.textContent = player.name;

        const playerClub = document.createElement("p");
        playerClub.textContent = "Club: " + player.club;

        playerCard.appendChild(playerImage);
        playerCard.appendChild(playerName);
        playerCard.appendChild(playerClub);

        playerDisplay.appendChild(playerCard);
    });
}

// Function to search
function search() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const filteredPlayers = players.filter(player => player.name.toLowerCase().includes(searchTerm));
    displayPlayers(filteredPlayers);
}

// Initial display
displayPlayers(players);
