function ClassA (sColor)
{
    this.color = sColor;
    
    this.sayColor = function () {
        console.log(this.color);
    };
}

function ClassB (sColor, sName)
{
    this.newMethod = ClassA;
    
    this.newMethod(sColor);
    
    delete this.newMethod;
    
    this.name = sName;
    
    this.sayName = function () {
        console.log(this.name);
    };
}

var objA = new ClassA("red");
var objB = new ClassB("blue", "Nicholas");
objA.sayColor(); // outputs "red"
objB.sayColor(); // outputs "blue"
objB.sayName(); // outputs "Nicholas"
console.log(objB instanceof ClassA); // false
console.log(objB instanceof ClassB); // true
