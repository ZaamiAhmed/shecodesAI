function poemGenerator(event) {
    event.preventDefault();

   new Typewriter("#poem", {
    strings: "Feminine words are followed",
    autoStart: true,
    cursor: null,
  });
}

    

let formelement=document.querySelector('#poem-generator');
formelement.addEventListener("submit",poemGenerator);
