'use strict';
let score = 0 ;


 let userName = prompt('Enter your name please    :) ');
alert('Welcome    '+userName +'    Are you ready to start game ?');

let seasonGiss = prompt('Do you think Summer is my favorite season ?  answer Y-N / Yes-No')
 if(seasonGiss.toLowerCase() === 'yes' || seasonGiss.toUpperCase() === 'Y'){
     //console.log('No :( ,,, My favorite season is Spring ^^ ')
      
     alert ('No :(     ,,, My favorite season is Spring ^^ ');
     
}
 else{
     alert ('Thats right : )    ,,, My favorite season is Spring ^^ ');
     score++
 }



 let foodGuisse = prompt('Do you think I like Manssaf  ?  answer Y-N /Yes-No')
 if(foodGuisse.toLowerCase() === 'yes' || foodGuisse.toUpperCase() === 'Y'){
     //console.log('No :( ,,,i dont like it  ^^ ')
      
     alert ('No :(     ,,, i dont like it , I like Shawrmah  hhhhh ^_^ ');
     
     
 }
 else{
     alert ('Thats right : )    ,,, i dont like it , you  guisse that   ^^ ');
     score++
 }


 let subjectGuisse = prompt('Do you think Maths is my favorite subject  ?  answer Y-N /Yes-No')
 if(subjectGuisse.toLowerCase() === 'yes' || subjectGuisse.toUpperCase() === 'Y'){
    //console.log('No :( ,,, thats right   ^^ ')
    score++
   alert ('Thats right : )      ,,,  i love maths so much  ^_^ ');
   
}
 else{
     alert ('No you did not guisse that  : (   ,,, i love it    ^^ ');
 }


 let personGuisse = prompt('Do you think My Mom is my favorit person   ?  answer Y-N /Yes-No')
 if(personGuisse.toLowerCase() === 'yes' || personGuisse.toUpperCase() === 'Y'){
    //console.log('No :( ,,, thats right   ^^ ')
    score++
     alert ('Thats right : )      ,,,  May God keep all mothers  ^_^ ');
    
 }
 else{
     alert (' :(   Thats wrong   ,,, if it was not her , who do you think it would be ??   ^^ ');
 }

 let petGuisse = prompt('Do you think Cats is my favorit pet  ?  answer Y-N /Yes-No')
 if(petGuisse.toLowerCase() === 'yes' || petGuisse.toUpperCase() === 'Y'){
     //console.log('No :( ,,, thats right   ^^ ')
     score++
     alert ('Thats right : )      ,,,  I love cats sooo much  ^_^ ');
     
 }
 else{
     alert ('  Thats Wrong :(     ,,,  i love cats    ^^ ');
 }

    let numberGuess = prompt ('Now you Should Guess a number that i have written .. and you have just  4 attempts ')
      for(var i=0 ; i<3 ;i++){
       
                  if (numberGuess == 20)
                  {  score++
                    alert('Wow .. Perfect you  Guessed it :) ') ;
                 
                      break; }

                  else if (numberGuess > 20) {
               numberGuess = prompt (' your number is too high  ... Try a gain'  );
                  }

                  else {
                      numberGuess =prompt (' your number is too Low  ... Try a gain'  );
                  }
             
      }


      let food =['manssaf' , 'shawrmah' , 'msakhan' , 'maftool' ];
      let correct = false;
      for(var i=0 ; i<6 ; i++)
      { 
        let foodGuess = prompt('Guess My favourit food : )').toLowerCase();
          for( let j=0 ;j<food.length ;j++)
        {  
            
            let arr=food[j] ;

            if(foodGuess === arr)
            {
                alert(' Perfect  🎆 you Gissed One  ');
                
                correct = true;
               break;
            }

        }
            
        if(correct === true){
            score++
            break;
        } else {
            alert(' unfortunately wrong answer ⭕ ');
        }
           
        }

        alert(' My Favourit food are :   Manssaf , Shawrmah , Msakhan , Maftool');


        if(score>3){
        alert('   your score is '+ score+' /7');
      }
      
      else {
        alert(' You did not pass  your score is '+ score+' /7');
      }

  






     

    
