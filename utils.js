function processGrade(grade){
  
 if(grade < 70){
   
    console.log("no grade like that");
   
   
 } 
 
 
//----------------------------------------------------------------------------

else if (grade > 100){
  
  
   console.log("grade over kill");
   
}  


//----------------------------------------------------------------------------
else if (grade == "inc"){
  
  
   console.log("grade is incomplete");
   
}  


//----------------------------------------------------------------------------

else if (grade == "drop"){
  
  
   console.log("drop the subject");
   
}  



  
  
 else if (grade < 75){
    if(grade % 2){  //odd
    console.log("Your new grade is :" + (grade -3));
    }
    else {
      console.log("Your new grade is :" + (grade -2));   
    }
  }
  
  
  else
  
  {

 if(grade % 2){  //odd
    console.log("Your new grade is :" + (grade + 5));
    }
    else {
      console.log("Your new grade is :" + (grade + 3));   
    }


  }







}







module.exports = {
    processTheGrade:processGrade
}