const api_url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?"
const quote = document.getElementById('quote');
const author = document.getElementById('author');

async function getquote(url) {
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    quote.innerHTML = data.quoteText;
    author.innerHTML = data.quoteAuthor;
}

getquote(api_url)
