//const api_url = 'https://corsproxy.io/?' + encodeURIComponent('https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json');
//function fetchJSON(url) {
//    return fetch(api_url)
//        .then(response => response.json());
//}
//
//fetchJSON(api_url)
//    .then(data => {
//        quote.innerHTML = data.quoteText;
//        author.innerHTML = data.quoteAuthor;
//    })
//    .catch(error => console.error(error));
const api_url = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");

async function getquote(url) {
  const response = await fetch(url);
  var data = await response.json();
  console.log(data);
  quote.innerHTML = data.content;
  author.innerHTML = data.author;
}

getquote(api_url);
