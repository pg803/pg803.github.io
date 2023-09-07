const api_url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";
const quote = document.getElementById('quote');
const author = document.getElementById('author');

// Function to fetch JSONP data
function fetchJSONP(url) {
    return fetch('https://cors-anywhere.herokuapp.com/' + url)
        .then(response => response.json());
}

fetchJSONP(api_url)
    .then(data => {
        quote.innerHTML = data.quoteText;
        author.innerHTML = data.quoteAuthor;
    })
    .catch(error => console.error(error));
