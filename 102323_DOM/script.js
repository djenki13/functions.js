// // DOM queries
// // const titleEl = document.getElementById|('title')
// const titleEl = document.getElementsByClassName('main-title')
// console.log(titleEl)

// const pEl = document.querySelector(.pe1)
// pEl.innerHTML = '<strong>Today</strong>'
// console.log(pEl)

const h2 = document.querySelector('#title')
// h2.innerHTML = '<div>Dylan rocks!</div>'
// console.log(h2.innerText) // only shows what's on the screen in the browser
// console.log(h2.textContent) // shows all the text within the element
// console.log(h2)
// console.log(h2.outerHTML)
// h2.outerHTML = '<div>hello</div>'
const body = document.querySelector('body')
body.style.backgroundColor = 'lightpink'
body.style.textAlign = 'center'

// ATTRIBUTES
console.log(h2.getAttribute('id'))
console.log(h2.getAttribute('class'))
console.log(h2.getAttribute('style'))
console.log(h2.hasAttribute('id'))
console.log(h2.hasAttribute('class'))
console.log(h2.hasAttribute('style'))

h2.setAttribute('id', 'sky')

const a = document.querySelector("a");
a.setAttribute("href","https://google.com")

const h3 = document.querySelector('h3')
const h4 = document.querySelector('h4')

// ADDING CLASSLISTS
// h3.classList.add('increase-Font-Size')
// h3.classList.remove('purple','increase-Font-Size')
// toggle
h3.classList.toggle('hidden')