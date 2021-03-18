'use strict';

// Q1. make a string out of an array - 하나의 문자열로 나타내라
{
    const fruits = ['apple', 'banana', 'orange'];
    console.log(fruits.join());
}

// Q2. make an array out of a string - 각각 배열로 담아라
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const array = new Array(fruits);
    console.log(array);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    console.log(array.sort((a, b) => b - a));
}

// Q4. make new array without the first two elements - [3,4,5]의 새로운 배열 만들기
{
    const array = [1, 2, 3, 4, 5];
    const hyelim = array.splice(0,1); 
    console.log(hyelim);
    console.log(array); //- splice는 기본 배열도 변경됨....
    const hyelim2 = array.slice(3);
    console.log(hyelim2);


}



class Student {
constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
}
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
    console.log(students);
    console.log(students[1]);

    students.forEach((students) => console.log(students));
    for(let i = 0; i < students.length; i++) {
        if(students[i].score === 90) {
            console.log(students[i]);
        }
    }
}

// Q6. make an array of enrolled students
{   
    const quiz6 = new Array();
    quiz6.push((students.filter((a) => a.enrolled === true)));
    console.log(quiz6);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    const quiz7 = new Array();

    for(let i = 0; i < students.length; i++) {
        quiz7.push(students[i].score);
    }
    console.log(quiz7);
}

// Q8. check if there is a student with the score lower than 50
{
    const quize8 = (value) => value.score < 50;
    console.log(students.some(quize8)); // false
}

// Q9. compute students' average score
{
    const quiz9 = new Array();

    for(let i = 0; i < students.length; i++) {
        quiz9.push(students[i].score);
    }
     const quize9Func = (a,b) => a+b / quiz9.length;
    console.log(quiz9.reduce(quize9Func));
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const quiz10 = new Array();

    for(let i = 0; i < students.length; i++) {
        quiz10.push(students[i].score);
    }
    console.log(quiz10);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const quiz10b = new Array();

    for(let i = 0; i < students.length; i++) {
        quiz10b.push(students[i].score);
    }
    console.log(quiz10b.sort((a, b) => a - b));
}