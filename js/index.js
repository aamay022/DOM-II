// Your code goes here
const links = document.querySelectorAll('a')
console.log(links)

const pictures = document.querySelectorAll('img')
console.log(pictures)

const headings = document.querySelectorAll('h2')
console.log(headings)

const info = document.querySelectorAll('p')
console.log(info)

const title = document.querySelector('h1')
console.log(title)

const fakeButtons = document.querySelectorAll('.btn')
console.log(fakeButtons)

//all images are deleted when any of the links are clicked
links.forEach(link => link.addEventListener('click', (event) => pictures.forEach(pic => pic.style.display = 'none')))

//shorten image when mouseover
pictures.forEach(pic => pic.addEventListener('mouseover', (event) => pic.style.width = "25%" && event.stopPropagation()))

//enlarge a little when mouse leaves
pictures.forEach(pic => pic.addEventListener('mouseleave', (event) => pic.style.width = "50%"))


//creating a modal with a heading to show up at the bottom of the page when sign up buttons are clicked
const modal = document.createElement('div')
modal.classList.add('modal')

modal.style.display = 'none'

document.body.appendChild(modal)

const grabbedModal = document.querySelector('.modal')
console.log(grabbedModal)

const headingModal = document.createElement('h4')
headingModal.textContent = 'Fill out information Here'

grabbedModal.appendChild(headingModal)

fakeButtons.forEach(button => button.addEventListener('click', (event)=> grabbedModal.style.display = 'block'))

//if user uses arrow down key then pop up the modal
document.addEventListener('keydown', (event) => {if(event.key === 'ArrowDown'){
    grabbedModal.style.display = 'block'
}})

//when user uses a wheel the headings minimize
document.addEventListener('wheel',(event)=> headings.forEach(head => head.style.fontSize = '50%'))

//change colors when user scrolls
document.addEventListener('scroll', (event)=> document.body.style.backgroundColor = 'lightgreen')

//when window fully loads change background
window.addEventListener('load', (event) => document.body.style.backgroundColor = 'pink')

//when you resize by expandiong or minimizing it will display a new div
const newDiv = document.createElement('div')
newDiv.style.width = '200px'
newDiv.style.height = '200px'
newDiv.style.backgroundColor = 'turquoise'
newDiv.style.display = 'none'
window.addEventListener('resize', event => newDiv.style.display='block')

//when a user is focusing in on an input
const input = document.createElement('input')
input.type="text"
input.placeholder="Name"
document.body.appendChild(input)
input.addEventListener('focus', event => input.placeholder = 'Lets Go')

//blur is what happens when you take focus off. leave the box blue(weird i know)
input.addEventListener('blur', event => input.style.backgroundColor= 'blue')

//STOPPED PROPORGATION between the header and header image
const intro = document.querySelector('.intro')
const introImg = document.querySelector('.intro img')
console.log(intro)
console.log(introImg)

intro.addEventListener('click', (event) => {
    console.log(event.currentTarget.nodeName)
    console.log('touching the intro')
})

introImg.addEventListener('click', (event) => {
    console.log(event.currentTarget.nodeName)
    console.log('No more propagartion')
    event.stopPropagation();
})

//PREVENTS LINKS FROM GOING ANYWHERE
Array.from(document.links).forEach(link => {
    link.addEventListener('click', function(event){
        event.preventDefault()
    })
})
console.log(document.links)
intro.appendChild(newDiv)