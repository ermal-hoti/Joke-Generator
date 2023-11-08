
const btnEl = document.getElementById("btn");

const apikey = "o+0GVkKn9TlhfuT26xX6LQ==vclG1D4VrCCXi7Oa";

const jokeEl = document.getElementById("joke");

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apikey,
    },
};

const apiurl = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getJoke() {

    try {
        jokeEl.innerText = "Updating..";
        btnEl.disabled = true;
        btnEl.innerText = "Loading";
        const response = await fetch(apiurl, options)
        const data = await response.json();

        btnEl.disabled = false;
        btnEl.innerText = "Tell me another joke";

        jokeEl.innerText = data[0].joke;
    } catch (error) {
        jokeEl.innerText = "Something went wrong. Try again later.";
        console.log(error);


    }

    // jokeEl.innerText = "Updating..";
    // btnEl.disabled = true;
    // btnEl.innerText = "Loading";
    // const response = await fetch(apiurl, options)
    // const data = await response.json();

    // btnEl.disabled = false;
    // btnEl.innerText = "Tell me another joke";

    // jokeEl.innerText = data[0].joke;
}


btnEl.addEventListener("click", getJoke)