document.querySelector("#getButton").addEventListener("click", apiRequest);

async function apiRequest() {
  const alienName = document.querySelector("input").value;
  try {
    const response = await fetch(
      `https://star-trek-first-gen-aliens.herokuapp.com/api/${alienName}`
    );
    const data = await response.json();
    console.log(data);

    document.getElementById("alienName").innerText = data.speciesName;
    document.getElementById("alienWorld").innerText = data.homeworld;
    document.getElementById("alienFeatures").innerText = data.features;
    document.getElementById("alienFacts").innerText = data.interestingFact;
    document.getElementById("alienExamples").innerText = data.notableExamples;

    document.getElementById("alienImage").src = data.image;
    document.getElementById("alienCaption").innerText = data.speciesName;
  } catch (error) {
    console.log(error);
  }
}

// On Load function
window.onload = function () {
  const url = `https://star-trek-first-gen-aliens.herokuapp.com/api/vulcans`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      document.getElementById("alienName").innerText = data.speciesName;
      document.getElementById("alienWorld").innerText = data.homeworld;
      document.getElementById("alienFeatures").innerText = data.features;
      document.getElementById("alienFacts").innerText = data.interestingFact;
      document.getElementById("alienExamples").innerText = data.notableExamples;

      document.getElementById("alienImage").src = data.image;
      document.getElementById("alienCaption").innerText = data.speciesName;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
};
