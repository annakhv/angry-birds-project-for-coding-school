(function(window){
function bird() {
 this.view=new createjs.Bitmap("resources/bird.png");
 this.view.regX=this.view.regY=12;
  var fix=new box2d.b2FixtureDef();
    fix.density=3;
    fix.friction=0.5;
    fix.restitution=0.5;
    var obj=new box2d.b2BodyDef(); 
    obj.type=box2d.b2Body.b2_dynamicBody;
    obj.position.x=Math.random()*1000/SCALE;
    obj.position.y=Math.random()*10/SCALE;;
    fix.shape=new box2d.b2PolygonShape();
    fix.shape.SetAsBox(24/SCALE,24/SCALE);
    this.view.body =world.CreateBody(obj);
    this.view.body.CreateFixture(fix);
    this.view.on("tick", tick, this.view);
   
 
}


function alien(){
    this.view=new createjs.Bitmap("resources/pig.png");
    this.view.regX=this.view.regY=12;
    var fix=new box2d.b2FixtureDef();
    fix.density=5;
    fix.friction=0.5;
    fix.restitution=0.8;
    var obj=new box2d.b2BodyDef(); 
    obj.type=box2d.b2Body.b2_dynamicBody;
    obj.position.x=Math.random()*1000/SCALE;
    obj.position.y=Math.random()*10/SCALE;;
    fix.shape=new box2d.b2PolygonShape();
    fix.shape.SetAsBox(24/SCALE,24/SCALE);
    this.view.body =world.CreateBody(obj);
    this.view.body.CreateFixture(fix);
    this.view.on("tick", tick, this.view);
}

function tick(e) {
  
    this.x=this.body.GetPosition().x * SCALE;
    this.y=this.body.GetPosition().y * SCALE;
  
    //this.rotation=this.body.GetAngle()*(180/Math.PI)
}


window.alien=alien;
window.bird=bird;



})(window);