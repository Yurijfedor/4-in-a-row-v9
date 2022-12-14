if (typeof window !== 'undefined') {

  function onCLickHandler_1() {
    let audio = new Audio();
    audio.src = 'sounds/click.mp3'; 
    audio.autoplay = true; 
    audio.volume = 0.5;
    document.getElementById("wrapper").style.display = "block";
    setTimeout(() => { window.location.href = "play_screen/play_screen.html"; }, 1500);
  }
  
  function soundClick() {
    let audio = new Audio();
    audio.src = 'sounds/click.mp3'; 
    audio.autoplay = true; 
    audio.volume = 0.5;
  }

  function onCLickHandler_3() {
    let audio = new Audio();
    window.close();
    audio.src = 'sounds/click.mp3'; 
    audio.autoplay = true; 
    audio.volume = 0.5;
  }

  document.getElementById('btn_1').onclick = onCLickHandler_1;
  document.getElementById('btn_2').onclick = soundClick;
  document.getElementById('btn_3').onclick = onCLickHandler_3;
  
  // CIRCLES ANIMATION  
  
var width, height, target, canvas, ctx, circles;
particleInit();
particleAddListeners();

function particleAddListeners() {
  window.addEventListener('resize', particleResize);
}

function particleInit() {
  width = window.innerWidth;
  height = window.innerHeight;
  target = {
    x: 0,
    y: height
  };
  canvas = document.getElementById('particle');
  canvas.width = width;
  canvas.height = height;
  ctx = canvas.getContext('2d');

  circles = [];
  for( var x = 0; x < width*0.25; x++ ) {
    var c = new particleCircle();
    circles.push(c);
  }
  particleAnimate();
}

function particleResize() {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
}

function particleAnimate() {
  ctx.clearRect(0, 0, width, height);
  for( var i in circles ) {
    circles[i].draw();
  }
  requestAnimationFrame(particleAnimate);
}

function particleCircle() {
  var _this = this;

  (function() {
    _this.pos = {};
    init();
  })();

  function init() {
    _this.pos.x = Math.random() * width;
    _this.pos.y = height + Math.random() * 1000;
    _this.alpha = 0.2 + Math.random() * 0.4;
    _this.scale = 0.4 + Math.random();
    _this.velocity = Math.random() * 1.6;
  }

  _this.draw = function() {
    if ( _this.alpha <= 0 ) {
      init();
    }
    _this.pos.y -= _this.velocity;
    _this.alpha -= 0.0005;
    ctx.beginPath();
    ctx.arc(_this.pos.x, _this.pos.y, _this.scale * 10, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'rgba(251,75,2,1' +  _this.alpha + ')';
    ctx.fill();
  };
}

// END OF CIRCLES ANIMATION  

}