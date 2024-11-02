let obj ={
    name:'mohammed mojeed ramadan',
    course:'masters in artificial intelligence',

}

obj.age =  33;
console.log(obj)

myObj = {//this is calld using object literal
    name:"John",
    age:30,
    myCars: {
      car1:"Ford",
      car2:"BMW",
      car3:"Fiat"
    }
  }

  console.log(myObj.myCars)


  //using object methods


  let comp = new Object();
  comp.name="mohammed";
  comp.age ="27";

  console.log(comp)

  //usinfg the Object constructor function




  function Person(firstname, secondname, lastname, age , eye){

    this.firstName= firstname;
    this.secondName =secondname;
    this.lastName= lastname;
    this.age=age;
    this.eye=eye;
  }

  let mojeed= new Person('mohammed','mojeed','kashimawo','26')

  console.log(mojeed.firstName)



  //    LOOPS USING JAVASCRIPT


///lets work on lwitches with  this

let abc= new Date()
let obs= abc.getDay()
console.log(obs)

switch(obs){
  case 0:
    console.log('sunday');
  case 1:
  console.log('monday');
  case 2:
    console.log('teusday');
  case 3:
    console.log('wednesday');
  case 4:
    console.log('thrsday');
  case 5:
    console.log('friday');
  case 6:
    console.log('saturday');
  
    default:
      console.log('your code not found')


}
