


function init() {
    console.log("init() successfully called.");
   stage= new PIXI.Container();
   renderer = PIXI.autoDetectRenderer(
    1000,
    600,
   
    {view:document.getElementById("game-canvas")},
    
  );


   var width = document.getElementById("game-canvas").width;
   var height= document.getElementById("game-canvas").height;
   var bg = new PIXI.Sprite(PIXI.Texture.fromImage("resources/background.png")); //sets background
    bg.width = width;
    bg.height = height;
    stage.addChild(bg)
   var birdTexture=PIXI.Texture.fromImage("resources/bird.png"); // sets angry bird
   bird = new PIXI.Sprite(birdTexture);
   bird.position.x=width/2;
   bird.position.y=height/2;
    bird.interactive = true;
    bird.buttonMode = true;
   stage.addChild(bird);
   renderer.render(stage);
}