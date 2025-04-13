
function displayAnswer(response) {
//  response.data.answer
 new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
  });
  console.log(response.data.answer);
    
}
function poemGenerator(event) {
    event.preventDefault();

  let inputElement=document.querySelector("#input-text");

  let apikey="3b95otea77f9a4894d538e9bd2a44800";
  let context="You are a collector of Somali poems. You generate beautiful, short 4-line Somali poems. Use simple HTML and separate each line with <br/>. Do NOT include <html>, <body>, or any headings. Only the poem lines and stop adding commas"
  let prompt=`write somali poem about ${inputElement}.`
  let apiurl=`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apikey}`;
  axios.get(apiurl).then(displayAnswer);
}

    

let formelement=document.querySelector('#poem-generator');
formelement.addEventListener("submit",poemGenerator);
