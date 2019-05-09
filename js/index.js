function fader() {
  var r = $('.blurred'),
    wh = $(window).height(),
    dt = $(document).scrollTop(),
    elView, opacity;

  // Loop elements with class "blurred"
  r.each(function() {
    elView = wh - ($(this).offset().top - dt + 200);
    if (elView > 0) { // Top of DIV above bottom of window.
      opacity = 1 / (wh + $(this).height()) * elView * 2
      if (opacity < 1) // Bottom of DIV below top of window.
        $(this).css('opacity', opacity);
    }
  });
}

$(document).bind('scroll', fader);

$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
      }, 900);
	});
});

jQuery(document).ready(function($){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 50) {
            $('#to-top').fadeIn('slow');
        } else {
            $('#to-top').fadeOut('slow');
        }
    });
});

var flkty = new Flickity( '.main-gallery', {
  cellAlign: 'left',
  wrapAround: true,
  prevNextButtons: true,
  autoPlay: 5000
});

$(document).ready(function(){
  
	var currentTime = new Date()
	var year = currentTime.getFullYear();
	$("#currentYear").html(year);
});

//cursor stuff
var cursor = {
  delay: 8,
  _x: 0,
  _y: 0,
  endX: (window.innerWidth / 2),
  endY: (window.innerHeight / 2),
  cursorVisible: true,
  cursorEnlarged: false,
  $dot: document.querySelector('.cursor-dot'),
  $outline: document.querySelector('.cursor-dot-outline'),

  init: function () {
    // Set up element sizes
    this.dotSize = this.$dot.offsetWidth;
    this.outlineSize = this.$outline.offsetWidth;

    this.setupEventListeners();
    this.animateDotOutline();
  },

  setupEventListeners: function () {
    var self = this;

    // Anchor hovering
    document.querySelectorAll('a').forEach(function (el) {
      el.addEventListener('mouseover', function () {
        self.cursorEnlarged = true;
        self.toggleCursorSize();
      });
      el.addEventListener('mouseout', function () {
        self.cursorEnlarged = false;
        self.toggleCursorSize();
      });
    });

    // Click events
    document.addEventListener('mousedown', function () {
      self.cursorEnlarged = true;
      self.toggleCursorSize();
    });
    document.addEventListener('mouseup', function () {
      self.cursorEnlarged = false;
      self.toggleCursorSize();
    });

    document.addEventListener('mousemove', function (e) {
      // Show the cursor
      self.cursorVisible = true;
      self.toggleCursorVisibility();

      // Position the dot
      self.endX = e.pageX;
      self.endY = e.pageY;
      self.$dot.style.top = self.endY + 'px';
      self.$dot.style.left = self.endX + 'px';
    });

    // Hide/show cursor
    document.addEventListener('mouseenter', function (e) {
      self.cursorVisible = true;
      self.toggleCursorVisibility();
      self.$dot.style.opacity = 1;
      self.$outline.style.opacity = 1;
    });

    document.addEventListener('mouseleave', function (e) {
      self.cursorVisible = true;
      self.toggleCursorVisibility();
      self.$dot.style.opacity = 0;
      self.$outline.style.opacity = 0;
    });
  },

  animateDotOutline: function () {
    var self = this;

    self._x += (self.endX - self._x) / self.delay;
    self._y += (self.endY - self._y) / self.delay;
    self.$outline.style.top = self._y + 'px';
    self.$outline.style.left = self._x + 'px';

    requestAnimationFrame(this.animateDotOutline.bind(self));
  },

  toggleCursorSize: function () {
    var self = this;

    if (self.cursorEnlarged) {
      self.$dot.style.transform = 'translate(-50%, -50%) scale(0.75)';
      self.$outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
    } else {
      self.$dot.style.transform = 'translate(-50%, -50%) scale(1)';
      self.$outline.style.transform = 'translate(-50%, -50%) scale(1)';
    }
  },

  toggleCursorVisibility: function () {
    var self = this;

    if (self.cursorVisible) {
      self.$dot.style.opacity = 1;
      self.$outline.style.opacity = 1;
    } else {
      self.$dot.style.opacity = 0;
      self.$outline.style.opacity = 0;
    }
  }
}

cursor.init();

//Color gradient stuff
fetch('https://raw.githubusercontent.com/ghosh/uiGradients/master/gradients.json').then(r => r.json()).then(function (fetched) {
  colorSetTest = fetched;

  var x = Math.round(Math.random() * (colorSetTest.length - 1));
  var y = colorSetTest[x];
  var c1 = y.colors[0];
  var c2 = y.colors[1];

function randomBackgroundOnLoad() {
  var x = Math.round(Math.random())
  if (x == 0) {
    document.getElementById("parallax").setAttribute("style", "background:url(media/background.jpg) no-repeat center center; background-size: cover;")
  } else {
    document.getElementById("parallax").setAttribute("style", "background:url(media/background2.jpg) no-repeat center center; background-size: cover;")
  }
}

function hexToRgba(hex, alpha) {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
}

function homeHeaderGradient() {
  document.getElementById("home").setAttribute("style", `background: linear-gradient(200deg, ${hexToRgba(c1, 0.75)} 0%, ${hexToRgba(c2, 0.75)} 100%);`)
}

function addNavHeaderGradient() {
  document.getElementById("nav").setAttribute("style", `background: linear-gradient(200deg, ${hexToRgba(c1, 0.75)} 0%, ${hexToRgba(c2, 0.75)} 100%);`)
}

function remNavHeaderGradient() {
  document.getElementById("nav").setAttribute("style", ``)
}

function cursorColor() {
  document.getElementById("cursor-dot-outline").setAttribute("style", `background-color: ${c2};`)
  document.getElementById("cursor-dot").setAttribute("style", `background-color: ${hexToRgba(c1, 1.0)};`)
}

function flickityButtonColor() {
  document.getElementsByClassName("flickity-prev-next-button").setAttribute("style", `background-color: ${c2};`)
}

function footer() {
  document.getElementById("footer").setAttribute("style", `background-color: ${c1};`)
}

(function () {
  $(window).scroll(function () {

    if ($(this).scrollTop() > 180) {
      $('.navbar').addClass('nav--sticky');
      addNavHeaderGradient();
    } else {
      $('.navbar').removeClass('nav--sticky');
      remNavHeaderGradient();
    }
  });
})();

document.onload = randomBackgroundOnLoad(), homeHeaderGradient(), cursorColor(), footer(), flickityButtonColor();
});
