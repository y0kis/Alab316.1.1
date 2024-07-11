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