'use strict';

const adviceSlipURL = "https://api.adviceslip.com/advice";
const adviceIdElement = document.querySelector(".advice-indicator__id")
const adviceParagraphElement = document.querySelector(".advice-text");

const getAdviceButton = document.getElementById("get-advice-button");


function resetButtonAnimation() {
    adviceParagraphElement.classList.remove("play-fade-in");
}


function setUpAdvice(data) {
    const adviceInfo = data.slip;
    adviceIdElement.textContent = adviceInfo.id;
    adviceParagraphElement.textContent = '"' + adviceInfo.advice + '"';
    adviceParagraphElement.classList.add("play-fade-in");
}


/* Prevents the api from returning same piece of advice */
function disableButton() {
    getAdviceButton.disabled = true;
    setTimeout(() => getAdviceButton.disabled = false, 2000)
}
  

getAdviceButton.addEventListener("click", () => {
    // This function does not work inside setUpAdvice function for some reason.
    disableButton()
    resetButtonAnimation()

    fetch(adviceSlipURL)
        .then(res => {
            if (res.ok) {
                return res.json()
            }
            throw new Error("Response was not recived !")
        })

        .then(data => setUpAdvice(data))

        .catch(error => {
            console.error(error)
        })
})


// A new advice is automaticly generated when you start the page 
getAdviceButton.click()