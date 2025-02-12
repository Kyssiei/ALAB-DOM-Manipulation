
// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];

//**================= PART 1 ========================== */

const mainEL = document.querySelector("main")

mainEL.style.backgroundColor = "var(--main-bg)"

mainEL.innerHTML = "<h1>DOM Manipulation</h1>"

mainEL.classList.add("flex-ctr")


//**================ PART 2 =========================== */

const topMenuEl = document.querySelector("#top-menu")

topMenuEl.style.height = "100%"

topMenuEl.style.backgroundColor = "var(--top-menu-bg)"

topMenuEl.classList.add("flex-around")


//**================== PART 3 ========================= */


menuLinks.forEach(link => {
    const newLink = document.createElement("a");

    newLink.setAttribute("href", link.href);

    newLink.textContent = link.text;

    topMenuEl.appendChild(newLink);
});


//!================== PART 2 ===============================

//**================= PART 3 =============================== */

const subMenuEl = document.querySelector("#sub-menu")

subMenuEl.style.height = "100%"

subMenuEl.style.backgroundColor = "var(--sub-menu-bg)"

subMenuEl.classList.add("flex-around")

subMenuEl.style.position = "absolute"

subMenuEl.style.top = "0"

console.log(subMenuEl);


//**===================== PART 4 ========================== */

// //Todo: update the menu links 
//select all <a> elements inside topModelEl
const topMenuLinks = topMenuEl.querySelectorAll("a");

// track the activivty of menu item
let activeMenuItem = null;

// Add event listener for click
topMenuEl.addEventListener("click", function(event){
    event.preventDefault(); // prevent defult behavior

    if (event.target.tagName !== "A") return; //Ignore non <a> clicks

    const clickedText = event.target.textContent.toLowerCase(); // log the text content
    console.log(clickedText); //Log the clicked menu item 

    
    //Remove "active" from all <a> elements
    topMenuLinks.forEach(link => link.classList.remove("active"));

    //Toggle "active" on clicked link 
    event.target.classList.add("active");
})

subMenuEl.addEventListener("click", function(event){
    console.log("Submenu clicked:", event.target.textContent);
});