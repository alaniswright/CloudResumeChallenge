const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://ji7s64qzdvvomi5zsq4vwcfmsu0qtqqn.lambda-url.eu-north-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = `${data}`;
}
updateCounter();
