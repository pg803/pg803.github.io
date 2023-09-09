const api_url = 'https://corsproxy.io/?' + encodeURIComponent('https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json');
const quote = document.getElementById('quote');
const author = document.getElementById('author');

function fetchJSON(url) {
    return fetch(api_url)
        .then(response => response.json());
}

fetchJSON(api_url)
    .then(data => {
        quote.innerHTML = data.quoteText;
        author.innerHTML = data.quoteAuthor;
    })
    .catch(error => console.error(error));
