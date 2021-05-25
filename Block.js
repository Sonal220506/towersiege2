class Block{
  constructor(x, y, width, height) {
      var options = {
        restitution : 0.7,
        friction : 0.6,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image = loadImage("block.png");
      this.visibility = 255;
      
    }
    display(){
      var angle = this.body.angle;
      var pos = this.body.position;
      if(this.body.speed < 3){
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image ,0,0,this.width, this.height);
        pop();
      }
       else{
        World.remove(world,this.body);
        push()
        this.visibility = this.visibility-5;
        tint(255, this.visibility);
        image(this.image, pos.x, pos.y, 50, 50);
        pop()
       }
    }
}