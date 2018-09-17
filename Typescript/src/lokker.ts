var a = 2
var b = "roote"
function lokker (a, b){
    console.log(`Value1: ${a} , Value2: ${b}`)
}

lokker(a,b);



function lokkerV2 (a:string,b:number){
    console.log(`Value1: ${a} , Value2: ${b}`)
    }

lokkerV2(b,a);

interface IPerson {name:string};
interface IAddress {street:string};

function lokkerV3 (a:IPerson,b:IAddress){
    console.log(`Value1: ${a} , Value2: ${b}`)
    }
lokkerV3({name: "root"},{street: "flashback"})

class Person implements IPerson{
    constructor(name: string){
        this.name = name;
    }
    name: string;
}
class Address implements IAddress{
    constructor(street: string){
        this.street = street;
    }
    street: string;
}
var pers = new Person("Friend");
var addr = new Address("Home");

lokkerV3(pers,addr);

function lokkerV4<T, U> (a:T,b:U){
    console.log(`Value1: ${a} , Value2: ${b}`)
    }
lokkerV4(a,b);

class genericLokker<T,U>{
    log = (a:T, b:U) =>console.log(`Value1: ${a} , Value2: ${b}`)

}

var lok = new genericLokker<IPerson,IAddress>();

lok.log(pers,addr);