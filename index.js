var catalystDate = new Date("March 28, 2020 09:00:00 GMT-0400");
var days = document.getElementById("days");
var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");

function updateTime() {
  var now = new Date().getTime();

  var delta = catalystDate - now;

  if (delta >= 0) {
    // Time calculations for days, hours, minutes and seconds
    days.innerHTML = Math.floor(delta / (1000 * 60 * 60 * 24));
    hours.innerHTML = Math.floor(
        (delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    minutes.innerHTML = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60));
    seconds.innerHTML = Math.floor((delta % (1000 * 60)) / 1000);
  } else {
      days.innerHTML = 0;
      hours.innerHTML = 0;
      minutes.innerHTML = 0;
      seconds.innerHTML = 0;
  }
  
}

var gradient = 0;
var nav = document.getElementsByTagName("nav")[0];
var navLinks = nav.getElementsByTagName("a");

function gradientTime(linkk) {
    switch(gradient % 6) {
        case 0:
            linkk.style.color = "rgb(249, 247, 122)";
            break;
        case 1:
            linkk.style.color = "rgb(254, 198, 104)";
            break;
        case 2:
            linkk.style.color = "rgb(253, 150, 117)";
            break;
        case 3:
            linkk.style.color = "rgb(253, 113, 146)";
            break;
        case 4:
            linkk.style.color = "rgb(212, 96, 176)";
            break;
        case 5:
            linkk.style.color = "rgb(132, 97, 192)";
            break;
    }
    gradient++;
}

function removeColor(linkk) {
    linkk.style.color = "rgb(153, 153, 153)";
}

updateTime();
setInterval(updateTime, 1000);





var states = [];

for (var i = 0; i < navLinks.length; i++) {
  states.push(navLinks[i].getAttribute("href"));
}

function highlightLink(linkIndex) {
  for (let j = 0; j < navLinks.length; j++) {
    if (j == linkIndex) {
      navLinks[j].classList.add("active");
    } else {
      navLinks[j].classList.remove("active");
    }
  }
}

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].onclick = function() {
    highlightLink(i);
    uncheck();
  };
}

function handleScroll() {
  for (var i = navLinks.length - 1; i >= 0; i--) {
    var relevantId = navLinks[i].getAttribute("href").slice(1);
    if (document.getElementById(relevantId).getBoundingClientRect().y <= 20) {
      highlightLink(i);
      return;
    }
  }
}

window.onload = handleScroll;
document.getElementById("content").onscroll = handleScroll;

var checkbox = document.getElementById("hamburger-input");
function uncheck() {
  checkbox.checked = false;
}
