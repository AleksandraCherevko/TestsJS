// //===================================================
// const message = document.querySelector("#message");
// console.log(message.value); // Default textarea message

// //===================================================
// const activeLink = document.querySelector(".btn.active");
// console.log(activeLink.href); // https://s.codepen.io/about

// // //===================================================
// const image = document.querySelector(".image");
// console.log(image.src); // https://placeimg.com/640/480/animals
// image.src = "https://placeimg.com/640/480/tech";



// const text = document.querySelector(".article-text");
// console.log(text.textContent); // text inside p.article-text

// const title = document.querySelector(".article-title");
// title.textContent = "Welcome to Bahamas!";


const image = document.querySelector(".image");

console.log(image.attributes); // NamedNodeMap {0: class, 1: src, 2: alt, length: 3}

console.log(image.hasAttribute("src")); // true

console.log(image.getAttribute("alt")); // "Lake and clouds"

image.setAttribute("alt", "Amazing nature");

console.log(image.getAttribute("alt")); // Amazing nature