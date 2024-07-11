//1.0-1.3
//step 1
const mainEl = document.querySelector('main');
console.log(mainEl);
//step 2
mainEl.style.backgroundColor = 'var(--main-bg)'
//let backGroundColor = 'var(--main-bg)'
//step 3 
mainEl.innerHTML = '<h1>DOM Manipulation</h1>'
//step 4 
mainEl.classList = 'flex-ctr';
// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
];

// Creating a menu bar 
//step 1
const topmenuEl = document.getElementById('top-menu')
console.log(topmenuEl);
// step 2
topmenuEl.style.height = ('100%')
// step 3
topmenuEl.style.backgroundColor = 'var(--top-menu-bg)'
//step 4 
topmenuEl.classList = 'flex-around';
//Adding Menu Buttons
//step 1 
menuLinks.forEach(function(link) {
    //step 2
    let linkEl = document.createElement('a')
    //step 3
    linkEl.setAttribute('href', link.href)
    //step 4 
    linkEl.textContent = link.text
    //step 5 
    topmenuEl.appendChild(linkEl)
})