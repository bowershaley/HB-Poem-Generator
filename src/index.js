function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "b0o1e2aa04dbdcb3fatb5f7f5243c844";
  let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;
  let context =
    "you are a cyncial poem expert and like to write short poems like you are disgusted. Your mission is to generate a 4 line poem and seperate each line with a <br />. Do not use a title. Do not use italics font. Sign the poem with `- SheCodes AI 💙` inside a <strong> elemet at the bottom on the poem on a spereate line. Make sure to follow the user instructions.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div id="blinking-text">Generating a poem for you about ${instructionsInput.value}...</div>`;

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
