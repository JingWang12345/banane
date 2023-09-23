let page = 1;
function loadBanane(page) {
    BananaService.getBanane(page).then(banane => renderPage(banane))
}
loadBanane(page);

function renderPage(data) {
    const banane = data.results
    const bananaContainer = document.getElementById('banana-container');
    for (let i = 0; i < banane.length; i++) {
        const banana = banane[i];
        console.log(banana.title);
        const container = document.createElement('div');
        container.style.backgroundImage = 'url(' + banana.formats["image/jpeg"] + ')'
        container.classList.add('b-card');
        const titleContainer = document.createElement('h3');
        const authorsContainer = document.createElement('span');
        const languagesContainer = document.createElement('span');
        const imageContainer = document.createElement('img');
        //imageContainer.src = banana.formats["image/jpeg"];
        //imageContainer.classList.add('book-img');


        const titleNode = document.createTextNode(banana.title);
        titleContainer.appendChild(titleNode);
        if (banana.authors[0]) {
            const authorsNode = document.createTextNode(banana.authors[0].name)
            authorsContainer.appendChild(authorsNode);
        }
        const languagesNode = document.createTextNode(banana.languages[0]);
        languagesContainer.appendChild(languagesNode);

        bananaContainer.appendChild(container);
        //container.appendChild(imageContainer);
        container.appendChild(titleContainer);
        container.appendChild(authorsContainer);
        container.appendChild(languagesContainer);
    }
    console.log('ecco')
    const nextBtn = document.createElement('button');
    nextBtn.classList.add('next-btn');
    nextBtn.addEventListener('click', ()=>{
        page++
        loadBanane(page);
    })
    const btnText = document.createTextNode('ᐅ');
    nextBtn.appendChild(btnText);
    bananaContainer.appendChild(nextBtn);
    console.log(bananaContainer)
}

function search() {
    const input=document.getElementById("text-search");
    const searchText=input.value;
    document.getElementById('banana-container').innerHTML = '';
    BananaService.searchBanane(searchText).then(banane => {
        renderPage(banane)
    })
}

function clearSearch() {
    console.log('clear')
    const input=document.getElementById("text-search");
    input.value = '';
    page = 1;
    document.getElementById('banana-container').innerHTML = '';
    loadBanane(page);
}