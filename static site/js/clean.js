 /* Opens Index bar by...
            1)Making width wider while
            2) Making parent div's margin aside
    */ 
    function NavIndexOpen() {
       document.getElementById("NavIndex").style.width = "300px";
        document.getElementById("wrap").style.marginLeft = "400px";
    }
    
    function NavIndexClose () {
        
        document.getElementById("NavIndex").style.width = "0";
        
        document.getElementById("wrap").style.marginLeft = "0";
    }

function DesktopPopup () {
    document.getElementById("DesktopPopup").style.visibility = "hidden";
}
/*///END index open/close js. ///*/



/* Tab Panels and Tabcontent */

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
/* END TAB PANEL AND CONTENTS */



/* RANDOMIZER ON HOMEPAGE, NEED TO INPUT RANDOM LINKS MANUALLY. PERHAPS FIX ? */
var random = new Array();
random[0] = "ntb-svs.html";
random[1] = "ntb-horrorlist.html";
random[2] = "ntb-carnagereport.html";
random[3] = "ntb-caskofamontillado.html";
random[4] = "ntb-caskofamontillado.html";


function randomlink() {
    window.location = random[Math.floor(Math.random()*random.length)];
}

/* ////END MANUAL RANDOMIZER //// */



/*For text appearing and redisappearing */

// Detect request animation frame
var scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

function loop() {

    Array.prototype.forEach.call(elementsToShow, function(element){
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');
      } else {
        element.classList.remove('is-visible');
      }
    });

    scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}

/* END REAPPEARING TEXT */



/* This one specifically is for element ID popup1 to show the booklet on Stories via Sound CD */
function ToggleVisible() {
    var x = document.getElementById ("booklet");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}




