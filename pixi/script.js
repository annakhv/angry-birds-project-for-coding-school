
var box2d = {
 b2Vec2 : Box2D.Common.Math.b2Vec2,
 b2BodyDef : Box2D.Dynamics.b2BodyDef,
 b2Body :Box2D.Dynamics.b2Body,
 b2FixtureDef : Box2D.Dynamics.b2FixtureDef,
 b2Fixture : Box2D.Dynamics.b2Fixture,
 b2World : Box2D.Dynamics.b2World,
 b2MassData : Box2D.Collision.Shapes.b2MassData,
 b2PolygonShape : Box2D.Collision.Shapes.b2PolygonShape,
 b2CircleShape : Box2D.Collision.Shapes.b2CircleShape,
 b2DebugDraw : Box2D.Dynamics.b2DebugDraw
}

var SCALE=30;
var stage, world;

function init() {
var canvas=document.getElementById("game-canvas");
document.getElementById("game-canvas").style.background = "url('./resources/colored_land.png')"; //set up background image
stage=new createjs.Stage(canvas);
setupPhyisics();
setupObjects();
createjs.Ticker.addEventListener("tick", tick);


}


function setupPhyisics() {
    world=new box2d.b2World(new box2d.b2Vec2(0,30), true);
    var fix=new box2d.b2FixtureDef();
    fix.density=40;
    fix.friction=0.5;
    var ground=new box2d.b2BodyDef(); // setting up ground
    ground.type=box2d.b2Body.b2_staticBody;
    ground.position.x=2200/SCALE;
    ground.position.y=630/SCALE;
    fix.shape=new box2d.b2PolygonShape();
    fix.shape.SetAsBox(2200/SCALE, 10/SCALE);
    world.CreateBody(ground).CreateFixture(fix);

    var debugDraw=new box2d.b2DebugDraw();
    debugDraw.SetSprite(stage.canvas.getContext('2d'))
    debugDraw.SetDrawScale(SCALE);
    debugDraw.SetFlags(box2d.b2DebugDraw.e_shapeBit | box2d.b2DebugDraw.e_jointBit);
    world.SetDebugDraw(debugDraw)

}


function setupObjects() {
    setupBirds()
    setupWeapon()
    setupConstruction()
    setupAliens()
   
}

function setupBirds() {
 for(let i=200; i>50; i-=50){ 
       var birdObj=new bird(i/SCALE, 400/SCALE)
        stage.addChild(birdObj.view);
       }

}

function setupWeapon() {
   var weapon=new constructionElement(240/SCALE, 400/SCALE, 35, 70, 35, 70, "resources/weapon.png");
    stage.addChild(weapon.view);
}
function setupConstruction() {
       for(let i=2100; i>1520; i-=145){ //we have to leave space for aliens 
       var construction=new constructionElement(i/SCALE, 400/SCALE, 35, 110, 35, 110, "resources/elementWood019.png");
        stage.addChild(construction.view);
       }
      for(let i=2030; i>1600; i-=290){
       var construction=new constructionElement(i/SCALE, 120/SCALE, 110, 35, 110, 35, "resources/elementWood012.png");
        stage.addChild(construction.view);
      } 
       for(let i=2030; i>1600; i-=290){
       var construction=new constructionElement(i/SCALE, 60/SCALE, 110, 70, 110, 70, "resources/elementWood034.png");
        stage.addChild(construction.view);
      } 

}



function setupAliens() {
     
       for(let i=2030; i>1600; i-=321){ // this will be changed when i elaborate on general logic
        var alienObj=new alien(i/SCALE, 300/SCALE);
        stage.addChild(alienObj.view);
       }

}



function tick() {
stage.update();
//world.DrawDebugData();
world.Step(1/60, 10, 10);
world.ClearForces();

}