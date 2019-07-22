
console.log('*********');

document.getElementById('eight-ball').addEventListener('click', getMagicMeme);
const apiKey = 'fv5vbq9WmW1sTJ7Ufdwha6tN1M0zdZFA';
const quotes = ['no fucking way', 'you are awesome', 'i love cats'];

function getMagicMeme(event) {
  event.preventDefault();
  console.log('magic ball clicked!');
  
  const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
  // random selects number between 0 and 1, 0 inclusive and 1 exclusive
  // so it will be between 0 and 0.999...
  // after multiplication it will be between 0 and 2.999...
  // after flooring the result will be either 0, 1 or 2 

  const randomQuote = quotes[randomQuoteIndex];
  console.log('randomQuoteIndex:', randomQuoteIndex, 'randomQuote:', randomQuote);
  
  getRandomMeme(randomQuote);
} 

function getRandomMeme(searchTerm="cat") {
  fetch(`http://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=${encodeURIComponent(searchTerm)}`)
    .then(function (res) {
      return res.json();
    })
    .then(function (jsonRes){
      let result = `<img src="${jsonRes.data.images.original.url}" alt="${jsonRes.data.title}" /> `;
      document.getElementById('result').innerHTML = result;
    })
}


