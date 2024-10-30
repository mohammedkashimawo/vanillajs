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