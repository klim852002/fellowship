console.log("Linked.")

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor']
var body = document.querySelector('body')

// Part 1

function makeMiddleEarth () {
  // create a section tag with an id of middle-earth
var middleEarth = document.createElement('section')
middleEarth.id = 'middle-earth'
// add each land as an article tag
for (var i=0; i<lands.length; i++) {
var land = document.createElement('article')
  // inside each article tag include an h1 with the name of the land
land.innerHTML= '<h1>' + lands[i] + '</h1>';
middleEarth.appendChild(land)
}
// var articleTheShire = document.createElement('article')
// var theShire = document.createElement('h1')
// articleTheShire.appendChild(theShire)
//
// var articleRivendell = document.createElement('article')
// var rivendell = document.createElement('h1')
// articleRivendell.appendChild(rivendell)
//
// var articleMordor = document.createElement('article')
// var mordor = document.createElement('h1')
// articleMordor.appendChild(mordor)

  // theShire.textContent = 'The Shire';
  // rivendell.textContent = 'Rivendell';
  // mordor.textContent = 'Mordor';

  // append middle-earth to your document body
document.body.appendChild(middleEarth)
  // middleEarth.appendChild(articleTheShire)
  // middleEarth.appendChild(articleRivendell)
  // middleEarth.appendChild(articleMordor)
}
makeMiddleEarth()


var hobbitList = document.createElement('ul')
var theShire = document.querySelectorAll('article')[0]
// Part 2
function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit
for (var i = 0; i < hobbits.length; i++) {
  var hobbit = document.createElement('li')
  hobbit.className = 'hobbit'
  hobbit.textContent = hobbits[i]
  hobbitList.appendChild(hobbit)
}
theShire.appendChild(hobbitList)

// var frodo = document.createElement('li')
// frodo.textContent = "Frodo Baggins"
// hobbitList.appendChild(frodo)
//
// var samwise = document.createElement('li')
// samwise.textContent = 'Samwise \'Sam\' Gamgee';
// hobbitList.appendChild(samwise)
//
// var meriadoc = document.createElement('li')
// meriadoc.textContent = 'Meriadoc \'Merry\' Brandybuck';
// hobbitList.appendChild(meriadoc)
//
// var peregrin = document.createElement('li')
// peregrin.textContent = 'Peregrin \'Pippin\' Took';
// hobbitList.appendChild(peregrin)

// frodo.classList.add("hobbit")
// samwise.classList.add("hobbit")
// meriadoc.classList.add("hobbit")
// peregrin.classList.add("hobbit")

}
makeHobbits()

// Part 3
var theRing = document.createElement('div')
function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'

theRing.id = 'the-ring';
  // give the div a class of 'magic-imbued-jewelry'
theRing.setAttribute('class','magic-imbued-jewelry')
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
theRing.addEventListener('click', nazgulScreech)
  // add the ring as a child of Frodo
var frodo= document.querySelectorAll('li')[0]
frodo.appendChild(theRing)
}

keepItSecretKeepItSafe()

// Part 4

var rivendell = document.querySelectorAll('article')[1]
function makeBuddies() {
  // create an aside tag
var budAside = document.createElement('aside')
  // attach an unordered list of the 'buddies' in the aside
var buddiesList = document.createElement('ul')
for (var i = 0; i < buddies.length; i++) {
  var buddy = document.createElement('li')
  buddy.textContent = buddies[i]
  buddiesList.appendChild(buddy)
}
  budAside.appendChild(buddiesList)
  // insert your aside as a child element of rivendell
  rivendell.appendChild(budAside)

// var gandalf = document.createElement('li')
// gandalf.textContent = 'Gandalf the Grey';
//
// var legolas = document.createElement('li')
// legolas.textContent = 'Legolas';
//
// var gimli = document.createElement('li')
// gimli.textContent = 'Gimli';
//
// var strider = document.createElement('li')
// strider.textContent = 'Strider';
//
// var boromir = document.createElement('li')
// boromir.textContent = 'Boromir';
//
// buddiesList.appendChild(gandalf)
// buddiesList.appendChild(legolas)
// buddiesList.appendChild(gimli)
// buddiesList.appendChild(strider)
// buddiesList.appendChild(boromir)
//
// buddies.appendChild(buddiesList)
// buddies.appendChild(rivendell)
}
makeBuddies()

// Part 5
function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  var strider = rivendell.querySelectorAll('li')[3]
  strider.textContent = 'Aragon'
}
beautifulStranger()
// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
theShire.removeChild(hobbitList)
rivendell.appendChild(hobbitList)
}
leaveTheShire ()

// Part 7

  var fellowshipMembers = rivendell.querySelectorAll('li')
function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  var fellowship = document.createElement('div')
  fellowship.setAttribute('id','the-fellowship')
  // add each hobbit and buddy one at a time to 'the-fellowship'
    // after each character is added make an alert that they have joined your party
  for (var i = 0; i < fellowshipMembers.length; i++) {
    fellowship.appendChild(fellowshipMembers[i])
    // alert(fellowshipMembers[i].textContent + ' has joined the party!')
  }
  // console.log(fellowshipMembers[i])
  // append the new div fellowship to rivendell
  rivendell.appendChild(fellowship)
// theFellowship.appendChild.frodo;
// alert('Frodo has joined the party')
// theFellowship.appendChild.samwise;
// alert('Samwise has joined the party')
// theFellowship.appendChild.meriadoc;
// alert('Meriadoc has joined the party')
// theFellowship.appendChild.peregrin;
// alert('Peregrin has joined the party')
// theFellowship.appendChild.gandalf;
// alert('Gandalf has joined the party')
// theFellowship.appendChild.legolas;
// alert('Legolas has joined the party')
// theFellowship.appendChild.gimli;
// alert('Gimli has joined the party')
// theFellowship.appendChild.strider;
// alert('Strider has joined the party')
// theFellowship.appendChild.boromir;
// alert('Boromir has joined the party')
// for (i=0, i< hobbits.length, i++) }
// theFellowship.appendChild.[i]??;
// alert('[i] has joined the party')

}

forgeTheFellowShip()

// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
var gandalf = fellowshipMembers[0]
gandalf.textContent = 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
gandalf.style.backgroundColor = 'white'
gandalf.style.border = 'thick solid grey'
}
theBalrog()
// http://www.w3schools.com/jsref/prop_style_border.asp
// http://www.w3schools.com/jsref/dom_obj_style.asp

// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
alert ('horn of gondor has been blown!')
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
var boromir = fellowshipMembers[4]
boromir.style.textDecoration = 'line-through'
// http://www.w3schools.com/jsref/prop_style_textdecoration.asp
  // Remove Boromir from the Fellowship
var fellowshipDiv = document.getElementById('the-fellowship')
fellowshipDiv.removeChild(boromir)
}

hornOfGondor()
// Part 10
var mordor = body.querySelectorAll('article')[2]
var mountDoom = document.createElement('div')
function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  var frodo = fellowshipMembers[5]
  var sam = fellowshipMembers[6]
  mordor.appendChild(frodo)
  mordor.appendChild(sam)
  // add a div with an id of 'mount-doom' to Mordor

  mountDoom.setAttribute('id', 'mount-doom')
  mordor.appendChild(mountDoom)

}
itsDangerousToGoAlone()

// Part 11
var gollum = document.createElement('div')
function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor

  gollum.setAttribute('id', 'gollum')
  mordor.appendChild(gollum)
  // Remove the ring from Frodo and give it to Gollum
  gollum.appendChild(theRing)
  // Move Gollum into Mount Doom
  mountDoom.appendChild(gollum)
}
weWantsIt()

// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  mountDoom.removeChild(gollum)
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
  var hobbitList2 = document.createElement('ul')
  var allHobbits = document.querySelectorAll('.hobbit')
  for (var i = 0 ; i < allHobbits.length; i++) {
      hobbitList2.appendChild(allHobbits[i])
  }
  theShire.appendChild(hobbitList2)
}
thereAndBackAgain()
