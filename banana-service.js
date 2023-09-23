class BananaService{
    static getBanane(page=1){
        return fetch('https://gutendex.com/books/?page='+ page)
        .then(res=>res.json())
    }

    static searchBanane(searchText){
        return fetch('https://gutendex.com/books/?search='+ searchText)
        .then(res=>res.json())
    }
}