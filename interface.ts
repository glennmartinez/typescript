interface Stark {
    
    name: string;
    age?: any;
}


function printName(stark : Stark){
    
    console.log(stark.name);
    console.log(stark.age);
}


printName({name: "Eddard", age: 23});
printName({name:"joe", age: true});