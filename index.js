// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
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