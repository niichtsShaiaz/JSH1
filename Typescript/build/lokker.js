"use strict";
var a = 2;
var b = "roote";
function lokker(a, b) {
    console.log("Value1: " + a + " , Value2: " + b);
}
lokker(a, b);
function lokkerV2(a, b) {
    console.log("Value1: " + a + " , Value2: " + b);
}
lokkerV2(b, a);
;
;
function lokkerV3(a, b) {
    console.log("Value1: " + a + " , Value2: " + b);
}
lokkerV3({ name: "root" }, { street: "flashback" });
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Address = /** @class */ (function () {
    function Address(street) {
        this.street = street;
    }
    return Address;
}());
var pers = new Person("Friend");
var addr = new Address("Home");
lokkerV3(pers, addr);
//# sourceMappingURL=../src/src/lokker.js.map