// Exercise 1: Timer

let container = document.getElementById('container')
// Part I

// 1. In your Javascript file, using setTimeout, call a function after 2 seconds.
setTimeout(() => {
    // 2. The function will alert “Hello World”.
    alert("Hello World");
}, 2000)

// Part II

// 1. In your Javascript file, using setTimeout, call a function after 2 seconds. 
setTimeout(() => {
    // 2. The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
    let p = document.createElement("p")
    p.innerHTML = "Hello World"
    container.appendChild(p)
}, 2000);

// Part III

// 1. In your Javascript file, using setInterval, call a function every 2 seconds. 
let paragraphInterval = setInterval(() => {
    // 2. The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
    let p = document.createElement("p")
    p.innerHTML = "Hello World"
    container.appendChild(p)
    // 3. The interval will be cleared (ie. clearInterval), when the user will click on the button.
    document.getElementById('clear').addEventListener("click", () => clearInterval(paragraphInterval))
    // 4. Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.
    let paragraphsCount = container.querySelectorAll('p').length
    if (paragraphsCount == 5)
        clearInterval(paragraphInterval)
}, 2000);