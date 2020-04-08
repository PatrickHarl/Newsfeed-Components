/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  */

function createMenuComp(menuArr){


  const menuContainer = document.createElement('div');
  const listContainer = document.createElement('ul')

  menuContainer.classList.add('menu')

  menuContainer.appendChild(listContainer)

 /*

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

*/

  const listItems = menuArr.map((listItem) => {

    const list = document.createElement('li')
    list.textContent = listItem

    return list

  })

  listItems.forEach((li) => {


    listContainer.appendChild(li)


  })
/*
  Step 5: return the menu component.
*/

  return menuContainer
}

/*
  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.
*/

let menuButton = document.querySelector('.menu-button')
let menuComponent = createMenuComp(menuItems)

/*
  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).
*/

menuButton.addEventListener('click', (event) => {

  menuComponent.classList.toggle('menu--open')

})


let menuParent = document.querySelector('.header')

/*
  Step 6: add the menu component to the DOM.
  
*/

menuParent.appendChild(menuComponent)
