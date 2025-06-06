const gifts = [
    { id: 1, name: "Золотой дракон", image: "https://via.placeholder.com/150", link: "https://gift-app.com/gift1", rarity: "epic" },
    { id: 2, name: "Серебряный кот", image: "https://via.placeholder.com/150", link: "https://gift-app.com/gift2", rarity: "rare" },
];

const giftList = document.getElementById('gift-list');
const searchInput = document.getElementById('search');
const rarityFilter = document.getElementById('rarity');

function renderGifts(filteredGifts) {
    giftList.innerHTML = '';
    filteredGifts.forEach(gift => {
        const card = document.createElement('div');
        card.className = 'gift-card';
        card.innerHTML = `
            <img src="${gift.image}" alt="${gift.name}">
            <p>${gift.name}</p>
            <a href="${gift.link}" target="_blank">Перейти</a>
            <div class="trail-container">
                <div class="trail"></div>
            </div>
        `;
        giftList.appendChild(card);
    });
}

function filterGifts() {
    const search = searchInput.value.toLowerCase();
    const rarity = rarityFilter.value;
    const filteredGifts = gifts.filter(gift => 
        gift.name.toLowerCase().includes(search) &&
        (rarity === '' || gift.rarity === rarity)
    );
    renderGifts(filteredGifts);
}

searchInput.addEventListener('input', filterGifts);
rarityFilter.addEventListener('change', filterGifts);

window.Telegram.WebApp.ready();
renderGifts(gifts);
