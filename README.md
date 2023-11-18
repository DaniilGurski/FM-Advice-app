# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon


### Links

- Solution URL: (https://www.frontendmentor.io/solutions/working-solution-using-flexbox-for-the-most-part-CeSvt4NXBH)
- Live Site URL: (https://daniilgurski.github.io/FM-Advice-app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- BEM

### What I learned
As for the biggest, I got the basics of working with APIs and discovered the setTimeOut function in JS.

```js
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
```

### Continued development

I failed to make the application responsive. This is something I need to dive deeper into. Maybe I will do a responsiveness update for this project in the future.

## Author

- Frontend Mentor - [@DaniilGurski](https://www.frontendmentor.io/profile/DaniilGurski)
