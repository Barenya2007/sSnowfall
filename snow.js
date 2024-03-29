class Snow{
  constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'density':20,
          'friction': 1.0,
          'isStatic': false
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.snowimage1 = loadImage("snow5.webp");
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.snowimage1, 0, 0, this.width, this.height);
      pop();
    }
}