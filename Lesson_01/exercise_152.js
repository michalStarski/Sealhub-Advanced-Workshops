class Figure {
    constructor(name){
        this.name = name;
    }
}

class Quadrangle extends Figure {
    constructor(name, type,a ,b,c, d){
        super(name);
        this.type = type;
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }
}

class Rectangle extends Quadrangle {
    constructor(name,type, a, b,c, d){
        super(name,type,a,b,c,d);
    }
    area(){
        return this.a*this.b;
    }
    length(){
        return this.a + this.b + this.c + this.d
    }
}


let a = new Rectangle('a', 'prostokat', 5,8,5,8);
console.log(a);
console.log(a.area(), a.length());