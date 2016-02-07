var Stark = (function () {
    function Stark() {
        this.name = "Brandon";
        this.saying = Stark.castle;
    }
    Stark.prototype.hello = function (person) {
        console.log("Hello, " + person);
    };
    //static props allow them to be access from the class object
    Stark.castle = "Winterfell";
    return Stark;
})();
var ned = new Stark;
ned.saying = "Winter is coming";
console.log(Stark.castle);
ned.saying;
ned.hello("robbie boy");
