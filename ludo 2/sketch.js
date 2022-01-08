var dice, dice_running,edges;
var dice2, dice_running,edges;
var dice3, dice_running,edges;
var dice4, dice_running,edges;

var groundImage;
var ground;

var redplayer1,redplayer2,redplayer3,redplayer4;
var yellowplayer1,yellowplayer2,yellowplayer3,yellowplayer4;

var redplayer1Image,redplayer2Image,redplayer3Image,redplayer4Image;
var yellowplayer1Image,yellowplayer2Image,yellowplayer3Image,yellowplayer4Image;

var blueplayer1,blueplayer2,blueplayer3,blueplayer4;
var blueplayer1Image,blueplayer2Image,blueplayer3Image,blueplayer4Image;

var greenplayer1,greenplayer2,greenplayer3,greenplayer4;
var greenplayer1Image,greenplayer2Image,greenplayer3Image,greenplayer4Image;

var black;
var black2;
var black3;
var black4;

var aa,ab,ac,ad,ae,af;
var sa,sb,sc,sd,se,sf;
var ja,jb,jc,jd,je,jf;
var na,nb,nc,nd,ne,nf;

function preload(){
  dice_running = loadAnimation("dice.png");//,"1.png","2.png","3.png","4.png","5.png","6.png"
 // dice_running2 = loadAnimation("9.jpg");//,"1.png","2.png","3.png","4.png","5.png","6.png"
  
  groundImage = loadImage("board.png");
 
   aa = loadImage("1.png");
   ab = loadImage("2.png");
   ac = loadImage("3.png");
   ad = loadImage("4.png");
   ae = loadImage("5.png");
   af = loadImage("6.png");

   sa = loadImage("1.png");
   sb = loadImage("2.png");
   sc = loadImage("3.png");
   sd = loadImage("4.png");
   se = loadImage("5.png");
   sf = loadImage("6.png");

   ja = loadImage("1.png");
   jb = loadImage("2.png");
   jc = loadImage("3.png");
   jd = loadImage("4.png");
   je = loadImage("5.png");
   jf = loadImage("6.png");

   na = loadImage("1.png");
   nb = loadImage("2.png");
   nc = loadImage("3.png");
   nd = loadImage("4.png");
   ne = loadImage("5.png");
   nf = loadImage("6.png");

  redplayer1Image = loadImage("red goti.png");
  redplayer2Image = loadImage("red goti.png");
  redplayer3Image = loadImage("red goti.png");
  redplayer4Image = loadImage("red goti.png");

  yellowplayer1Image = loadImage("yellow goti.png");
  yellowplayer2Image = loadImage("yellow goti.png");
  yellowplayer3Image = loadImage("yellow goti.png");
  yellowplayer4Image = loadImage("yellow goti.png");

  blueplayer1Image = loadImage("blue goti.png");
  blueplayer2Image = loadImage("blue goti.png");
  blueplayer3Image = loadImage("blue goti.png");
  blueplayer4Image = loadImage("blue goti.png");

  greenplayer1Image = loadImage("green goti.png");
  greenplayer2Image = loadImage("green goti.png");
  greenplayer3Image = loadImage("green goti.png");
  greenplayer4Image = loadImage("green goti.png");
}

function setup(){
  createCanvas(1050,560);
  
  // creating trex
  dice = createSprite(100,460,400,500);
  dice.addAnimation("moveing", dice_running);
  dice2 = createSprite(100,460,500,600);
  dice2.addAnimation("moveing", dice_running);
  dice3 = createSprite(100,460,600,700);
  dice3.addAnimation("moveing", dice_running);
  dice4 = createSprite(100,460,700,800);
  dice4.addAnimation("moveing", dice_running);


  edges = createEdgeSprites();
  ground=createSprite(500,300,700,600);
  ground.addImage(groundImage);

  redplayer1= createSprite(96,460,400,500);
  redplayer1.addImage(redplayer1Image);
  redplayer2 = createSprite(166,460,400,500);
  redplayer2.addImage(redplayer2Image);
  redplayer3 = createSprite(131,425,400,500);
  redplayer3.addImage(redplayer3Image);
  redplayer4 = createSprite(131,495,400,500);
  redplayer4.addImage(redplayer4Image);
///////255,510
  yellowplayer1 = createSprite(484,140,400,500);
  yellowplayer1.addImage(yellowplayer1Image);
  yellowplayer2 = createSprite(414,140,400,500);
  yellowplayer2.addImage(yellowplayer2Image);
  yellowplayer3 = createSprite(449,180,400,500); 
  yellowplayer3.addImage(yellowplayer3Image);
  yellowplayer4 = createSprite(449,105,400,500);
  yellowplayer4.addImage(yellowplayer4Image);

  blueplayer1= createSprite(484,460,400,500);
  blueplayer1.addImage(blueplayer1Image);
  blueplayer2 = createSprite(414,460,400,500);
  blueplayer2.addImage(blueplayer2Image);
  blueplayer3 = createSprite(449,425,400,500);
  blueplayer3.addImage(blueplayer3Image);
  blueplayer4 = createSprite(449,495,400,500);
  blueplayer4.addImage(blueplayer4Image);

  greenplayer1= createSprite(96,143,400,500);
  greenplayer1.addImage(greenplayer1Image);
  greenplayer2 = createSprite(166,143,400,500);
  greenplayer2.addImage(greenplayer2Image);
  greenplayer3 = createSprite(131,108,400,500);
  greenplayer3.addImage(greenplayer3Image);
  greenplayer4 = createSprite(131,178,400,500);
  greenplayer4.addImage(greenplayer4Image);

  black = createSprite(100,500,225,250);
  black2 = createSprite(200,500,425,350);
  black3 = createSprite(300,500,625,450);
  black4 = createSprite(400,500,825,550);
  //adding scale and position to trex
  dice.scale = 0.5;
  dice.x = 630;
  black.scale = 0.5;
  black.x = 630;

  dice2.scale = 0.5;
  dice2.x = 750;
  black2.scale = 0.5;
  black2.x = 750;

  dice3.scale = 0.5;
  dice3.x = 870;
  black3.scale = 0.5;
  black3.x = 870;

  dice4.scale = 0.5;
  dice4.x = 990;
  black4.scale = 0.5;
  black4.x = 990;

  ground.scale = 2.5;
  ground.x = 290;

  redplayer1.scale = 0.5
  redplayer1.X = 50;
  redplayer2.scale = 0.5
  redplayer2.X = 50;
  redplayer3.scale = 0.5
  redplayer3.X = 50;
  redplayer4.scale = 0.5
  redplayer4.X = 50;

  yellowplayer1.scale = 0.5
  yellowplayer1.X = 50;
  yellowplayer2.scale = 0.5
  yellowplayer2.X = 50;
  yellowplayer3.scale = 0.5
  yellowplayer3.X = 50;
  yellowplayer4.scale = 0.5
  yellowplayer4.X = 50;

  blueplayer1.scale = 0.5
  blueplayer1.X = 50;
  blueplayer2.scale = 0.5
  blueplayer2.X = 50;
  blueplayer3.scale = 0.5
  blueplayer3.X = 50;
  blueplayer4.scale = 0.5
  blueplayer4.X = 50;

  greenplayer1.scale = 0.5
  greenplayer1.X = 50;
  greenplayer2.scale = 0.5
  greenplayer2.X = 50;
  greenplayer3.scale = 0.5
  greenplayer3.X = 50;
  greenplayer4.scale = 0.5
  greenplayer4.X = 50;


}

function draw(){
  //set background color 
  background("blue");
  
  //logging the y position of the trex
  console.log(dice.y);
  console.log(dice2.y);
  console.log(dice3.y);
  console.log(dice4.y);
  console.log(ground.y);
  
  //jump when space key is pressed
  if(keyDown("c")){
   dice.velocityY = -30;
 }

 dice.velocityY = dice.velocityY + 0.5;

 if(keyDown("o")){
  dice2.velocityY = -30;
}

dice2.velocityY = dice2.velocityY + 0.5;

if(keyDown("d")){
  dice3.velocityY = -30;
}

dice3.velocityY = dice3.velocityY + 0.5;

if(keyDown("e")){
  dice4.velocityY = -30;
}

dice4.velocityY = dice4.velocityY + 0.5;


  //stop trex from falling down
  dice.collide(edges[3]);
  dice2.collide(edges[3])
  dice3.collide(edges[3]);
  dice4.collide(edges[3])

  if(dice.isTouching(black)) {

    result()
  }
  
 if(dice2.isTouching(black2)) {

    result2()
  }
  
  if(dice3.isTouching(black3)) {

    result3()
  }
  
  if(dice4.isTouching(black4)) {

    result4()
  }

  drawSprites();



}

function result() {
  var a = Math.round(random(1,6))
  switch(a) {
    case 1: black.addImage(aa)
    break;
    case 2: black.addImage(ab)
    break;
    case 3: black.addImage(ac)
    break;
    case 4: black.addImage(ad)
    break;
    case 5: black.addImage(ae)
    break;
    case 6: black.addImage(af)
    break;
   // default:break
  }
}

  function result2() {
    var b = Math.round(random(1,6))
    switch(b) {
      case 1: black2.addImage(sa)
      break;
      case 2: black2.addImage(sb)
      break;
      case 3: black2.addImage(sc)
      break;
      case 4: black2.addImage(sd)
      break;
      case 5: black2.addImage(se)
      break;
      case 6: black2.addImage(sf)
      break;
     // default:break
    }
  }
    function result3() {
      var c = Math.round(random(1,6))
      switch(c) {
        case 1: black3.addImage(ja)
        break;
        case 2: black3.addImage(jb)
        break;
        case 3: black3.addImage(jc)
        break;
        case 4: black3.addImage(jd)
        break;
        case 5: black3.addImage(je)
        break;
        case 6: black3.addImage(jf)
        break;
       // default:break
      }
    }
    function result4() {
      var d = Math.round(random(1,6))
      switch(d) {
        case 1: black4.addImage(na)
        break;
        case 2: black4.addImage(nb)
        break;
        case 3: black4.addImage(nc)
        break;
        case 4: black4.addImage(nd)
        break;
        case 5: black4.addImage(ne)
        break;
        case 6: black4.addImage(nf)
        break;
       // default:break
      }
    
}