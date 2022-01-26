// carousel 1
jQuery("#carousel").owlCarousel({
  autoplay: true,
  lazyLoad: true,
  loop: true,
  margin: 50,
   /*
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  */
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: false,
  responsive: {
    0: {
      items: 1
    },

    768: {
      items: 2
    }
  }
});
// carousel partner
jQuery("#carousel2").owlCarousel({
  autoplay: false,
  lazyLoad: true,
  loop: true,
  // center: true,
   /*
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  */
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 2
    },

    768: {
      items: 3
    },

    992: {
      items: 4
    },

    1200: {
      items: 6
    }
  }
});
// Click show mobile search icon
var circleSearch = document.querySelector(".nav__menu-circle");
circleSearch.addEventListener("click", function(){
	var searchMobile = document.querySelector(".nav__searchmobile");
	searchMobile.classList.toggle("show-search");
})

// Click search
var boxsearch = {
    run:function(){
        this.show();
        this.hide();
    },
    show:function(){
      var searchIcon = document.querySelector(".header .items__search");
      var body = document.querySelector("body");
      var searchBox = document.querySelector(".search");
    	searchIcon.addEventListener("click", function(){
        body.classList.add("search-popup");
        searchBox.classList.add("search-open");
        });

      searchIcon.addEventListener("click", function(){
        body.classList.add("search-popup");
        searchBox.classList.add("search-open");
        });

      var searchIconMedium = document.querySelector(".nav__menu-searchmobile i");
      searchIconMedium.addEventListener("click", function(){
        body.classList.add("search-popup");
        searchBox.classList.add("search-open");
        });  

      var searchIconMobile = document.querySelector(".nav__searchmobile i");
      searchIconMobile.addEventListener("click", function(){
        body.classList.add("search-popup");
        searchBox.classList.add("search-open");
        var searchCircle = document.querySelector(".nav__searchmobile");
        searchCircle.classList.remove("show-search");
        });
    },
    hide:function(){
      var searchBar = document.querySelector(".search .search__icon-bar");
      var body = document.querySelector("body");
      var searchBox = document.querySelector(".search");
    	searchBar.addEventListener("click", function(){
        body.classList.remove("search-popup");
        searchBox.classList.remove("search-open");
        });
    }
}
boxsearch.run();

// Menu Mobile
var menumobile = {
    run:function(){
        this.show();
        this.hide();
    },
    show:function(){
      var menuBar = document.querySelector(".header__bottom-nav .bar");
      var body = document.querySelector("body");
      var wrapper = document.querySelector(".wrapper");
      var mobile__menu = document.querySelector(".mobile__menu");
      var mobile = document.querySelector(".mobile");
    	menuBar.addEventListener("click", function(){
	        body.classList.add("menu-open");
	        wrapper.classList.add("wrapper-tranform");
	        mobile__menu.classList.add("menumobile-open");
	        mobile.classList.add("mobile-open");
    	})
    },
    hide:function(){
		  var body = document.querySelector("body");
		  var wrapper = document.querySelector(".wrapper");
		  var mobile__menu = document.querySelector(".mobile__menu");
		  var mobile = document.querySelector(".mobile");
		  var elementsArray = document.querySelectorAll(".mobile__backdrop, .top__close");
		elementsArray.forEach(function(elem) {
			elem.addEventListener("click", function() {
				body.classList.remove("menu-open");
				wrapper.classList.remove("wrapper-tranform");
				mobile__menu.classList.remove("menumobile-open");
				mobile.classList.remove("mobile-open");
			});
		});     
    }
}
menumobile.run();

//Menu dropdown mobile menu
var expand = document.querySelectorAll('.expand');
for(var i = 0; i < expand.length; i++) {
	expand[i].addEventListener('click', openCurrAccordion);
}
function openCurrAccordion(e) {
	for(var i = 0; i < expand.length; i++) {
		var parent = expand[i].parentElement;
		var menu__sub = expand[i].nextElementSibling;

		if (this === expand[i] && !parent.classList.contains('open')) {
			parent.classList.add('open');
			menu__sub.style.maxHeight = menu__sub.scrollHeight + 'px';
		}
		else {
			parent.classList.remove('open');
			menu__sub.style.maxHeight = '0px';
		}
	}

	var expandSub = document.querySelectorAll('.expand-sub');
	for(var j = 0; j < expandSub.length; j++) {
			var parentSub = expandSub[j].parentElement;
			var menuItemSub = expandSub[j].nextElementSibling;
			var itemActive = expandSub[j].previousElementSibling;
			if (parentSub.classList.contains('open')){
			parentSub.classList.remove('open');
			itemActive.classList.remove('active');
			menuItemSub.style.maxHeight = '0px';
		}
	}
}

var expandSub = document.querySelectorAll('.expand-sub');
for(var i = 0; i < expandSub.length; i++) {
	expandSub[i].addEventListener('click', openCurrAccordionSub);
}
function openCurrAccordionSub(e) {
	for(var i = 0; i < expandSub.length; i++) {
		var parent = expandSub[i].parentElement;
		var menu__sub = expandSub[i].nextElementSibling;
		var itemActive = expandSub[i].previousElementSibling;

		if (this === expandSub[i] && !parent.classList.contains('open')) {
			parent.classList.add('open');
			itemActive.classList.add('active');
			menu__sub.style.maxHeight = menu__sub.scrollHeight + 'px';
			var parentItemActive = parent.parentElement;
			parentItemActive.style.maxHeight = parentItemActive.scrollHeight + menu__sub.scrollHeight +'px';
		}
		else {
			parent.classList.remove('open');
			itemActive.classList.remove('active');
			menu__sub.style.maxHeight = '0px';
		}
	}
}

//Company Faq click arrow
var expandFaq = document.querySelectorAll('.expand-faq');
for(var i = 0; i < expandFaq.length; i++) {
	expandFaq[i].addEventListener('click', openFaq);
}
function openFaq(e) {
	for(var i = 0; i < expandFaq.length; i++) {
		var parent = expandFaq[i].parentElement;
		var answer = expandFaq[i].nextElementSibling;

		if (this === expandFaq[i] && !parent.classList.contains('open')) {
      parent.classList.add('open');
      answer.style.display = 'block';
      answer.style.maxHeight = answer.scrollHeight + 'px';
		}
		else {
			parent.classList.remove('open');
      answer.style.maxHeight = '0px';
      answer.style.display = 'none';
		}
  }
}
//Company Faq click questions
var howFaq = document.querySelectorAll('.item__question-how');
for(var i = 0; i < expandFaq.length; i++) {
	howFaq[i].addEventListener('click', openHow);
}
function openHow(e) {
  this.nextSibling.nextSibling.click();
}

document.addEventListener("DOMContentLoaded", function(event) { 
  document.querySelector('.expand-faq').click();
});

//Back to top
var backTop = document.querySelector(".backtop .arrow");
backTop.addEventListener('click', topFunction);
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backTop.classList.add('active');
  } else {
    backTop.classList.remove('active');
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}