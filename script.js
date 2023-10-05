const api_url = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");

async function GetQuote(url) {
  const resp = await fetch(url);
  var data = await resp.json();
  quote.innerHTML = data.content;
  author.innerHTML = data.author;
}

GetQuote(api_url);
