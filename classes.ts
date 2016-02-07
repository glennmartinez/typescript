

class Stark {
    name: string = "Brandon";
    //static props allow them to be access from the class object
    static castle: string = "Winterfell";
    age: number;
    saying: string;
    
    
    constructor() {
        this.saying = Stark.castle;
    }
    
    hello(person:string){
        console.log("Hello, " + person);
    }
}


var ned = new Stark;

ned.saying = "Winter is coming";

console.log(Stark.castle);

ned.saying

ned.hello("robbie boy");
        