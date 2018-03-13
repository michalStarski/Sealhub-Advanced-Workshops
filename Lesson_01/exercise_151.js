function Figure (name){
    this.name = name;
}

function Quadrangle (name,type, a, b, c, d){
    Figure.call(this, name);
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.type = type;
}

Quadrangle.prototype = Object.create(Figure.prototype);
Quadrangle.prototype.constructor = Quadrangle;

function Rectangle (name,type,a,b,c,d){
    Quadrangle.call(this,name,type,a,b,c,d);
}

Rectangle.prototype = Object.create(Quadrangle.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function(){
    return this.a*this.b;
};

Rectangle.prototype.length = function(){
  return this.a+this.b+this.c+this.d;
};


let x = new Rectangle('figura', 'prostokat', 5,8,5,8);

console.log(x);
console.log(x.area());
console.log(x.length());