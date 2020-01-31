var nav = document.getElementsByTagName('nav')[0]
var navLinks = nav.getElementsByTagName('a')
var states = []
for (var i = 0; i < navLinks.length; i++) {
    states.push(navLinks[i].getAttribute('href'))
}

function highlightLink(linkIndex) {
    for (let j = 0; j < navLinks.length; j++) {
        if (j == linkIndex) {
            navLinks[j].classList.add('active')
        } else {
            navLinks[j].classList.remove('active')
        }
    }
}


for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].onclick = function() {
        highlightLink(i)
        uncheck()
    }
}


function handleScroll() {
    for (var i = navLinks.length - 1; i >= 0; i--) {
        var relevantId = navLinks[i].getAttribute('href').slice(1)
        if (document.getElementById(relevantId).getBoundingClientRect().y <= 20) {
            highlightLink(i)
            return
        }
    }
}

window.onload = handleScroll
document.getElementById('content').onscroll = handleScroll

var checkbox = document.getElementById('hamburger-input')
function uncheck() {
    checkbox.checked = false
}