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


//thi  is only for the for loops

let Arr=['tolu','shola','Aisha','bala','diva','ozohu','Fatimah','Zahara', 'mustapha']
let obij ={
  name:'mohammed',
  Surname:'mojeed',
  Age:'27',
  occupation:'software engineer',
  wife:'Fatimah'
}

for(let i=0;i<Arr.length; i++){  console.log(Arr[i])
}



//for.....in :-this loop is only used with objects, we use it to iterate around the properties of an 
for(ab in obij){
  //this means each of the properties of the object is now an ab..ie we no have a created array of the propertied of the obj

console.log(obij[ab])//thisreturns thevalues ofthe property
console.log(ab)//this returns the properties

//for... in tooo can beused for arrays except that the  order of the outcome will be altered

}

//forEach()thisis used to run or execute a function for every element of an array

//used only with array as. .....Array.forEach(obb)


let ii;
Arr.forEach(funct)

function funct(item){
console.log(item.toUpperCase())
}


//for ..of ...are used with only arrays...i mean with only arrays
for(ac of Arr){
  console.log(ac)
//
 }