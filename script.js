
ScrollReveal().reveal('body, h1, .underdog_sec article h2, .underdog_sec article h3, .why_sec span, .why_sec p, .web3_sec p, .how_sec p, .products_sec h6, .products_sec p, .products_list li, .products_list img, .blog_section article', {
    duration:1200,
    easing: 'ease',
});

const timelineCtnr = document.querySelector('.timeline_ctnr')

let startWindowsPosition;
let windowPosition;

let scrollTime;

if (window.matchMedia("(orientation:landscape)").matches) {
    ScrollReveal().reveal(timelineCtnr, {
        duration:0,
        easing: 'ease',
        afterReveal: function (el) {
            startWindowsPosition = window.pageYOffset;
    
            scrollTime = true;
            
            document.body.onscroll = function() {
                if(scrollTime == false) {
    
                } else {
                    windowPosition = window.pageYOffset;
                
                    timelineCtnr.scrollLeft = (timelineCtnr.scrollLeft) + (windowPosition - startWindowsPosition)/50;
    
                    setTimeout(() => {
                        scrollTime = false;
                    }, 3000);
                }
            }
        }
    });
}




document.onreadystatechange = function () {
    if (document.readyState == "interactive" || document.readyState == "complete") {
        setTimeout(() => {
            menuBt.style.transform = 'translateY(0) rotate(0deg)'
        }, 200);
    }
  }

const menu = document.querySelector('menu')

const menuAnchors = document.querySelectorAll('menu a')

const menuBt = document.querySelector('.menu_bt')

const bone01 = document.querySelector('.bone01')
const bone02 = document.querySelector('.bone02')

let showingMenu = false;


function hamburguer() {
    if(showingMenu == false) {

        menu.style.visibility = 'visible';

        bone01.style.transform = 'rotate(225deg)';
        bone02.style.transform = 'rotate(135deg)';

        for(i=0;i<menuAnchors.length;i++) {
            menuAnchors[i].classList.add('showingbts')
        }

        setTimeout(() => {
            for(i=0;i<menuAnchors.length;i++) {
                menuAnchors[i].classList.add('no_delay')
            }
        }, 280);

        showingMenu = true;
    } else {
        
        menu.style.visibility = 'hidden';

        bone01.style.transform = 'rotate(0deg)';
        bone02.style.transform = 'rotate(0deg)';

        for(i=0;i<menuAnchors.length;i++) {
            menuAnchors[i].classList.remove('no_delay')
            menuAnchors[i].classList.remove('showingbts')
        }

        showingMenu = false;
    }
}

menuBt.addEventListener('click', hamburguer)

document.body.onscroll = function() {
    if(showingMenu == true) {
        hamburguer()
    }
}






navigator.serviceWorker.getRegistrations().then(function(registrations) {
    for(let registration of registrations) {
      registration.unregister()
      document.location.reload()
} })