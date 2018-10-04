var col1 = 0;
var col2 = 0;
var col3 = 0;
var col4 = 0;
var col5 = 0;
var colSpeed1 = 1;
var colSpeed2 = 20;
var colSpeed3 = 0.5;
var colSpeed4 = 10;
var colSpeed5 = 0.1;
var wid = window.innerWidth;
var hei = window.innerHeight;
var isCol = false;
var c = [0,0,0,255];


var chorus = new Tone.Chorus({
  'frequency': 1,
  'delayTime' : 3,
  'spread' : 180
  // 'frequency' : '4000'
}).toMaster();

var osc = new Tone.FMOscillator({
  'type' :'sine',
  'modulationIndex' : 4,
  'modulationType': 'square'

  // 'modulationType' : 'sine'
}).connect(chorus).start();


function setup() {
  createCanvas(wid, hei);
  // col1 = random(255);
  col2 = random(255);
  col3 = random(255);
  col4 = random(255);
  // col5 = random(255);


}

function draw() {
  noStroke();
  background(220);
  fill(col1);
  ellipse(wid/2,hei/2,400);
  fill(col2);
  ellipse(wid/8,hei/8,150);
  fill(col3);
  ellipse(wid-wid/8,hei/8,150);
  fill(col4);
  ellipse(wid-wid/8,hei-hei/8,150);
  fill(col5);
  ellipse(wid/8,hei-hei/8,150);
  // console.log(c);
  // c = get(200,200);


  //Middle - frequency

  if (col1<0 || col1>255){
  colSpeed1 = -colSpeed1;
  }
  col1 += colSpeed1;
  let mcol1 = map(col1,0,255,0,440);


  //TopLeft - Detune
  if (col2<0 || col2>255){
  colSpeed2 = -colSpeed2;
  }
  col2 += colSpeed2;
  let mcol2 = map(col2,0,255,0,100);


  //Top Right - harmonicity

  if (col3<0 || col3>255){
  colSpeed3 = -colSpeed3;
  }
  col3 += colSpeed3;
  let mcol3 = map(col3,0,255,0,3);

  //botoom Right - phaser

  if (col4>255){
  col4 = 0;
  }
  col4 += colSpeed4;
  let mcol4 = map(col4,0,255,0,90);

  //botoom Left - modulationIndex

  if (col5<0 || col5>255){
  colSpeed5 = -colSpeed5;
  }
  col5 += colSpeed5;
  let mcol5 = map(col5,0,255,0,2);

// console.log(mcol5);
  // osc.partials = [1,0.2,2];
  osc.frequency.value = mcol1;
  osc.detune.value = mcol2;
  osc.harmonicity.value = mcol3;
  osc.phase.value = mcol4;
  chorus.depth = mcol5;

// console.log(mcol5);
//
  // console.log('filtfreq', filter.frequency);

  // setInterval(playSynth,2000);
}
  // if (col>150){
  //   synth.triggerAttack('C4');
  // } else {
  //   synth.triggerAttack('A4');
  //
  // }



// synth.detune(col)
