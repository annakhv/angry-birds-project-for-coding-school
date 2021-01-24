(function(window){
function bird(position_x, position_y) {
 this.view=new createjs.Bitmap("resources/bird.png");
 this.view.regX=this.view.regY=36;
  var fix=new box2d.b2FixtureDef();
    fix.density=5;
    fix.friction=0.5;
    fix.restitution=0.5;
    var obj=new box2d.b2BodyDef(); 
    obj.type=box2d.b2Body.b2_dynamicBody;
    obj.position.x=position_x;
    obj.position.y=position_y;
    fix.shape=new box2d.b2PolygonShape();
    fix.shape.SetAsBox(36/SCALE,36/SCALE);
    this.view.body =world.CreateBody(obj);
    this.view.body.CreateFixture(fix);
    this.view.on("tick", tick, this.view);
   
 
}

function alien(position_x, position_y){
    alien= alienIcon()
    string=`resources/${alien}`
    console.log(string)
    this.view=new createjs.Bitmap(`resources/${alien}`);
    this.view.regX=this.view.regY=35;
    var fix=new box2d.b2FixtureDef();
    fix.density=5;
    fix.friction=0.5;
    fix.restitution=0.5;
    var obj=new box2d.b2BodyDef(); 
    obj.type=box2d.b2Body.b2_dynamicBody;
    obj.position.x=position_x;
    obj.position.y=position_y;
    fix.shape=new box2d.b2PolygonShape();
    fix.shape.SetAsBox(35/SCALE,35/SCALE);
    this.view.body =world.CreateBody(obj);
    this.view.body.CreateFixture(fix);
    this.view.on("tick", tick, this.view);
}

function constructionElement(position_x,position_y, size_x, size_y, center_x, center_y, string) { //need to have exact coordinates where to place building blocks and also in the form of string the exact png picture that we want to use
    this.view=new createjs.Bitmap(string);
    this.view.regX=center_x;
    this.view.regY=center_y;
    var fix=new box2d.b2FixtureDef();
    fix.density=10;
    fix.friction=0.3;
    fix.restitution=0.1;
    var obj=new box2d.b2BodyDef(); 
    obj.type=box2d.b2Body.b2_dynamicBody;
    obj.position.x=position_x;
    obj.position.y=position_y;
    fix.shape=new box2d.b2PolygonShape();
    fix.shape.SetAsBox(size_x/SCALE,size_y/SCALE);
    this.view.body =world.CreateBody(obj);
    this.view.body.CreateFixture(fix);
    this.view.on("tick", tick, this.view);
  
}
function tick(e) {
  
    this.x=this.body.GetPosition().x * SCALE;
    this.y=this.body.GetPosition().y * SCALE;
    this.rotation=this.body.GetAngle()*(180/Math.PI)
}


window.alien=alien;
window.bird=bird;
window.constructionElement=constructionElement;

})(window);




function alienIcon() {
listColor=["Beige", "Blue", "Green", "Pink", "Yellow"];
listShape=["round", "square","suit"];
numColor=Math.floor((Math.random()*listColor.length));
numShape=Math.floor((Math.random()*listShape.length));
color=listColor[numColor];
shape=listShape[numShape];
string="alien"+color+"_"+shape+"."+"png";
return string;
}