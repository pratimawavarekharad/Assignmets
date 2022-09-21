//Geometrical shapes volumes

class Cylinder{

    constructor(radius,height){
        this.radius=radius;
        this.height=height;
    }

    getVolume(){
        return ((22/7)*(this.radius*this.radius)*this.height).toFixed(4);
    }
}


class Sphere{

    constructor(radius){
        this.radius=radius;
    }

    getVolume(){
        return ((4/3)*(22/7)*(this.radius*this.radius*this.radius)).toFixed(4);
    }
}class Cone{

    constructor(radius,height){
        this.radius=radius;
        this.height=height;
    }

    getVolume(){
        return ((22/7)*(this.radius*this.radius)*(this.height/3)).toFixed(4);
    }
}


//Radius of cylinder
let cylinderObj=new Cylinder(5,6);
let radiusOfCylinder= cylinderObj.getVolume();
//Output for radius of cylinder
console.log("Radius of cylinder: "+radiusOfCylinder);

//Radius of sphere
let sphereObj=new Sphere(5);
let radiusOfSphere= sphereObj.getVolume();
//Output for radius of sphere
console.log("Radius of sphere: "+radiusOfSphere);


//Radius of cone
let coneObj=new Cone(5,6);
let radiusOfCone= coneObj.getVolume();
//Output for radius of cone
console.log("Radius of cone: "+radiusOfCone);