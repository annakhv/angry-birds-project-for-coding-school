
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
stage=new createjs.Stage(document.getElementById("game-canvas"));
setupPhyisics();

setupObjects();

createjs.Ticker.addEventListener("tick", tick);


}


function setupPhyisics() {
    world=new box2d.b2World(new box2d.b2Vec2(0,30), true);
    var fix=new box2d.b2FixtureDef();
    fix.density=10;
    fix.friction=0.5;
    var ground=new box2d.b2BodyDef(); // setting up ground
    ground.type=box2d.b2Body.b2_staticBody;
    ground.position.x=1200/SCALE;
    ground.position.y=600/SCALE;
    fix.shape=new box2d.b2PolygonShape();
    fix.shape.SetAsBox(1200/SCALE, 10/SCALE);
    world.CreateBody(ground).CreateFixture(fix);

    var debugDraw=new box2d.b2DebugDraw();
    debugDraw.SetSprite(stage.canvas.getContext('2d'))
    debugDraw.SetDrawScale(SCALE);
    debugDraw.SetFlags(box2d.b2DebugDraw.e_shapeBit | box2d.b2DebugDraw.e_jointBit);
    world.SetDebugDraw(debugDraw)

}


function setupObjects() {
    i =30;
    while (i > 0){
        i--;
       var angryBird=new bird();
        stage.addChild(angryBird.view); 
        var Alien=new alien();
        stage.addChild(Alien.view); 
    }
    

  
}

function tick() {
stage.update();
//world.DrawDebugData();
world.Step(1/60, 10, 10);
world.ClearForces();

}