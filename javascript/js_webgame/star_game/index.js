// 별찍기 
 for(var star = 1; star <= 5; star += 1){
    document.write('*'.repeat(star) + '<br>');
 }
 document.write('<br>');
 for(var star2 = 5; star2 >= 1; star2 -= 1){
    document.write('*'.repeat(star2) + '<br>');
 }
 document.write('<br>');
 for(var star3 = 10; star3 >= 2; star3 -= 2){
    document.write('*'.repeat(star3) + '<br>');
 }
 document.write('<br>');
 for(var star4 = 1; star4 <= 16; star4 *= 2){
    document.write('*'.repeat(star4) + '<br>');
 }
 for(var star5 = 5; star5 >= 1; star5 -= 1){
    console.log(' '.repeat(5 - star5) + '*'.repeat(star5));
 }
 for(var star6 = 9; star6 >= 1; star6 -= 2){
    console.log(' '.repeat((9 - star6)/2) + '*'.repeat(star6));
 }