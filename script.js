"use strict";
// const counter=200;
var counter=200;

const initialObject={
  pro_1:20,
  pro_2:"Property_2",

  //A, Function Declaration
  //The this keyword points to the object that calls the method
  pro_3:function(){
    var variableOfPro_3=400;  
    console.log(`Pro_3 returns object properties as ${this.pro_1} and ${this.pro_2}`) ;
    console.log(this);

    //1 Function Expression
    //The this keyword is undefined in Strict mode
    var FirstChildOfpro_3=function(){
      console.log(`Child of pro_3 returns ${this.pro_1}`);
    }
    // FirstChilOfpro_3();
    
   
    //2 Arrow function 
    //They dont have their own this keyword, meaning it could have , which is initialObject in this case.
  
    const SecondChildOfpro_3=()=>{
      console.log(`Second Child of pro_3 returns ${this.pro_1} and ${this.variableOfPro_3}`);
      console.log(this);
    }

    //3 Function declaration 
    function normalFunction(){
    //undefined
      // console.log(`Normal Function inside of pro_3 returns and ${this.variableOfPro_3}`);
    }
    // normalFunction();

    SecondChildOfpro_3();
  },

  //B, Arrow Function
  //Arrow function do not get their own this (if it did it would be initialObject). keyword so they borrow this keyword from its parents, or lexical scope which is global in this case
  pro_4:()=>{
    console.log(this);
    console.log(`Cannot return the value of pro_1 ${this.pro_1}`);

    //This is because const is block scoped, and global object or window is a global scope itself not a block scope, so counter is global scoped but not a property of global
    //object
    console.log(`If counter set const value is not accessed, if var value is accessed: ${this.counter}`);
  },
}

initialObject.pro_3();
initialObject.pro_4();

