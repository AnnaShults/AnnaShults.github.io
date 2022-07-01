//API ENDPOINT
const endpoint='https://quotes.stormconsultancy.co.uk/random.json'

console.log(endpoint);

const quoteButton=document.querySelector('#js-new-quote');
quoteButton.addEventListener('click',getQuote);

 quoteButton.innerHTML = '<i class = "fa fa-spinner fa-spin"></i> Hold on one second...';

 setTimeout(function(){
   console.log("nice");
   quoteButton.innerHTML = 'Generate New Quote!';

   }, 3000);


async function getQuote(){
  console.log('hi');
  try{
    const response = await fetch(endpoint); //acess endpoint
    if(!response.ok){
      throw Error(response.statusText);
    }
    const json = await response.json();
    console.log(json.quote);
    // console.log(response); //throw error to console
    displayQuote(json.quote);
  }
  catch(err){
    console.log(err);
    alert('failed');
  }
}

function displayQuote(quote){
  const quoteText= document.querySelector('#js-quote-text')
  quoteText.textContent=quote;
}
