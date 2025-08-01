// console.log('good morning');
//to create new file "cmd+n" then save it "control+s"
let programmer={
    name:"ritajose",
    preferredLanguage:"javascript",
    writeCode: function(){
        console.log(`${this.name} writes ${this.preferredLanguage} code.`);
    },
    drinkCoffee(){
        console.log(`${this.name} drinks coffee`);
    }

};
programmer.writeCode();
programmer.drinkCoffee();
// object literal in javascript is a data structure created with key pair ans methods 
//https://youtu.be/876aSEUA_8c?list=PLlvFEn0NKwXLocxdtQBBQscIwKqTLhQIT&t=1737