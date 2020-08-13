class Box {

    constructor(x,y,width,height) {

        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x, y, width, height, options);

        this.width = width;
        this.height = height;

        World.add(world, this.body);

    }

    display() {

        push();

        var p = this.body.position;

        //translate(p.x, p.y);

        fill("white");
        rectMode(CENTER)
        rect(p.x, p.y, this.width, this.height);

        pop();

    }

}