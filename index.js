function displayAnswer(response) {
    // console.log(response);
    alert(response.data.answer);

    
}
let apikey= "3b95otea77f9a4894d538e9bd2a44800";
let context="please be precise and to the point";
let prompt= "Who is the current president of Somalia?"
let apiurl=`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apikey}`;

console.log("processing");
axios.get(apiurl).then(displayAnswer);
