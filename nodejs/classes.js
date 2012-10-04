function someObj ()
{
    this.publicVar = 'public';
    
    var privateVar = 'private';
    
    this.someMethod = function () {
        console.log('boo');
        
        someOtherMethod();
    };
    
    var someOtherMethod = function () {
        console.log('indirect reference');
    };
}

o_obj = new someObj();
//o_obj.someOtherMethod(); // will throw an undefined function error
o_obj.someMethod(); // prints "boo" followed by "indirect reference"
