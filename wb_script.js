// Query selectors
const navBar = document.querySelector('.bar-container')
const navLinks = document.querySelector('.nav-links')
const magnifying_glass = document.querySelector('.glass-style')


// ID's
const searchContainer = document.getElementById('content-search-area')


// Normal / cross bar result
isBarClicked = false

function navList() {
    // Nav animation up to down
    navLinks.classList.toggle('remove-margin')
}

// This function increase with of input
function widthIncrease() {
    searchContainer.style.transition = 'all 0.3s ease-in-out'
    searchContainer.classList.add('remove-padding')
}

// Main function
function storeFunc() {
    isBarClicked = true
    navBar.classList.toggle('cross-container')
    navList()
}

// Add event listeners
navBar.addEventListener('click', storeFunc)
document.onclick = function (e) {
    if (e.target.id !== 'content-search-area') {
        if (e.target.offsetParent && e.target.offsetParent.id !== 'content-search-area') {
            searchContainer.classList.remove('remove-padding')
        }
    }
}