//DEVICE DETECTION
var isMobile = false;
if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
  /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
  isMobile = true;
}

//hex to rgba
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

if (isMobile == false) {
cursor.init();
}

//Color gradient stuff
fetch('https://raw.githubusercontent.com/ghosh/uiGradients/master/gradients.json').then(r => r.json()).then(function (fetched) {
  colorSetTest = fetched;

  var x = Math.round(Math.random() * (colorSetTest.length - 1));
  var y = colorSetTest[x];
  window.c1 = y.colors[0];
  window.c2 = y.colors[1];

function randomBackgroundOnLoad() {
  var x = Math.round(Math.random())
  if (x == 0) {
    document.getElementById("headerbg").setAttribute("style", "background:url(media/background.jpg) no-repeat center center; background-size: cover;")
  } else {
    document.getElementById("headerbg").setAttribute("style", "background:url(media/background2.jpg) no-repeat center center; background-size: cover;")
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

document.onload = randomBackgroundOnLoad(), homeHeaderGradient(), cursorColor(), footer();
  return c1, c2;
});

function mobileCompat() {
  if (isMobile == true) {
    if (this.scrollY < 180) {
      if (($('.navbar-collapse').attr('aria-expanded') === "false") || ($('.navbar-collapse').attr('aria-expanded') === undefined)) {
        console.log("hey bit");
        document.getElementById("nav").setAttribute("style", `background: linear-gradient(200deg, ${hexToRgba(c1, 0.75)} 0%, ${hexToRgba(c2, 0.75)} 100%);`)
        $('.navbar').addClass('nav--sticky');
      } else if ($('.navbar-collapse').attr('aria-expanded') === "true") {
        document.getElementById("nav").setAttribute("style", ``)
        $('.navbar').removeClass('nav--sticky');
      }
    }
  }
}

// <DEBUG>
function debugColors() {
  function rgb2hex(rgb) {
    rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    return (rgb && rgb.length === 4) ? "#" +
      ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
      ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
      ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2) : '';
  }
  let rgb = "rgb"
  let color1 = rgb2hex(rgb.concat(document.getElementById("home").getAttribute("style").slice(40).split('%, ')[0].split(', 0.75) 0')[0].concat(')')))
  let color2 = rgb2hex(rgb.concat(document.getElementById("home").getAttribute("style").slice(36).split('%, ')[1].split(' 100%);')[0].slice(4)).split(', 0.75)')[0].concat(')'))
  console.log(`First Color: ${color1}\nSecond Color: ${color2}`);
}
// </DEBUG>