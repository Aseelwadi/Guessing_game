'use strict';
 let score = 0 ;

{
let userName = prompt('Enter your name please    🌸 ');
while(userName === ''){
   userName = prompt('Enter your name please    🌸 ');
}
alert('Welcome    '+userName +'    Are you ready to start game ⁉️ 🙂 ');
console.log ('Ask the user about his/her name ');
}



let seasonGiss = prompt('Do you think Summer is my favorite season ❓  answer Y-N / Yes-No').toLowerCase();
console.log ('Ask the user about my favorit season --- the answer is NO/N ');
const qs1Function = function  (seasons)
{  seasonGiss =seasons.toLowerCase ()
while(!(seasonGiss === 'yes' ||seasonGiss === 'no' || seasonGiss === 'y'||seasonGiss === 'n'))
{
alert(" ⚠️ Invalid answer .. make sure you entered y-n or yes-no");
 seasonGiss = prompt('Do you think Summer is my favorite season ❓ answer Y-N / Yes-No');
}

switch (seasonGiss){
 case 'yes':
 case 'y'  :
    
    alert ('❌ No :(     ,,, My favorite season is Spring ^^ ');

    break;
     
 case 'no':
 case 'n'  :
    alert ('✔️ Thats right : )    ,,, My favorite season is Spring ^^ ');
          score++ ;
          break;

}
}

qs1Function (seasonGiss);





let foodGuisse = prompt('Do you think I like Manssaf  ❓  answer Y-N /Yes-No').toLowerCase();
console.log ('Ask the user about if i like Manssaf --- the answer is NO/N ');
const qs2Function = function  (food){
   foodGuisse =food.toLowerCase ()

while(!(foodGuisse === 'yes' ||foodGuisse === 'no' || foodGuisse === 'y'||foodGuisse === 'n'))
{
alert("⚠️ Invalid answer .. make sure you entered y-n or yes-no");
 foodGuisse = prompt('Do you think I like Manssaf  ❓  answer Y-N /Yes-No');
}

switch (foodGuisse){
 case 'yes':
 case 'y'  :
     
      
     alert (' ❌ No :(     ,,, i dont like it , I like Shawrmah  hhhhh ^_^ ');
    break;
     
 case 'no':
 case 'n'  :
    alert (' ✔️ Thats right : )    ,,, i dont like it , you  guisse that   ^^ ');
         score++
          break;

}
}
qs2Function (foodGuisse);





let subjectGuisse = prompt('Do you think Maths is my favorite subject  ❓  answer Y-N /Yes-No').toLowerCase();
console.log ('Ask the user about Maths --- the answer is Yes/Y');
const q3Function = function (subject){
   subjectGuisse =subject.toLowerCase();
while(!(subjectGuisse === 'yes' ||subjectGuisse === 'no' || subjectGuisse === 'y'||subjectGuisse === 'n'))
{
alert("⚠️ Invalid answer .. make sure you entered y-n or yes-no");
 subjectGuisse = prompt('Do you think Maths is my favorite subject  ❓  answer Y-N /Yes-No');
}

switch (subjectGuisse){
 case 'yes':
 case 'y'  :
     
     score++
    alert ('✔️ Thats right : )      ,,,  i love maths so much  ^_^ ');
    break;
     
 case 'no':
 case 'n'  :
    alert ('❌ No you did not guisse that  : (   ,,, i love it    ^^ ');
      
          break;

}
}
q3Function (subjectGuisse);


let personGuisse = prompt('Do you think My Mom is my favorit person   ❓  answer Y-N /Yes-No').toLowerCase();
console.log ('Ask the user about My favorit person --- the answer is Yes/Y');
const q4Function =function (person){
   personGuisse =person.toLowerCase();
while(!(personGuisse ==='yes' ||personGuisse==='no' || personGuisse ==='y'||personGuisse ==='n'))
{
alert("⚠️ Invalid answer .. make sure you entered y-n or yes-no");
 personGuisse = prompt('Do you think My Mom is my favorit person   ❓  answer Y-N /Yes-No');
}

switch (personGuisse){
 case 'yes':
 case 'y'  :
 
    score++
     alert (' ✔️ Thats right : )      ,,,  May God keep all mothers  ^_^ ');
    break;
     
 case 'no':
 case 'n'  :
    alert (' ❌  Thats wrong   ,,, if it was not her , who do you think it would be ??   ^^ ');
          break;

}
}

q4Function(personGuisse);



let petGuisse = prompt('Do you think Cats is my favorit pet  ❓  answer Y-N /Yes-No').toLowerCase();
console.log ('Ask the user about my favorit pet --- the answer is Yes/Y');
const q5Function = function (pet){
   petGuisse = pet.toLowerCase();
while(!(petGuisse === 'yes' ||petGuisse === 'no' || petGuisse === 'y'||petGuisse === 'n'))
{
alert("⚠️ Invalid answer .. make sure you entered y-n or yes-no");
 petGuisse = prompt('Do you think My Mom is my favorit person   ❓  answer Y-N /Yes-No');
}

switch (petGuisse){
 case 'yes':
 case 'y'  :

      score++
     alert ('✔️ Thats right : )      ,,,  I love cats sooo much  ^_^ ');
    break;
     
 case 'no':
 case 'n'  :
    alert (' ❌ Thats Wrong :(     ,,,  i love cats    ^^ ');
          break;

}
}
q5Function(petGuisse);




let numberGuess = prompt ('Now you Should Guess a number that i have written .. and you have just  4 attempts ');
console.log ('Ask the user to Guess My number -- it should be 20'); 
for(var i=0 ; i<3 ;i++){
       
                   if (numberGuess == 20)
                   {  score++
                     alert(' ✔️ Wow .. Perfect you  Guessed it :) ') ;
                 
                       break; }

                   else if (numberGuess > 20) {
                numberGuess = prompt (' your number is too high  ... Try a gain'  );
                   }

                   else {
                       numberGuess =prompt (' your number is too Low  ... Try a gain'  );
                  }
            alert ("you'v finished the attempts  for this question :(  The answer was 20 " ); 
       }
       




    
       let color =['white' , 'black' , 'green' , 'pink' ];
       console.log ('Ask the color --- the answer white/black/green/pink');
              let correct = false;
              for(var i=0 ; i<6 ; i++)
              { 
                let colorGuess = prompt('Guess My favourit color : )').toLowerCase();
                  for( let j=0 ;j<color.length ;j++)
                {  
                   
                    let arr=color[j] ;
       
                    if(colorGuess === arr)
                    {
                        alert('  ✔️ Perfect  🎆 you Gissed One  ');
                       
                        correct = true;
                       break;
                    }
       
                }
                   
                if(correct === true){
                    score++
                   break;
                } else {
                    alert(' unfortunately wrong answer ❌ ');
                }
                  
                }
       
                alert(' My Favourit colors are :   white , black , green , pink ');
       
       
                if(score>3){
                alert('  well done  your score is '+ score+' /7');
              }
             
              else {
                alert(' You did not pass  your score is '+ score+' /7');
              }

