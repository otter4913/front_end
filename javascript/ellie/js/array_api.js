'use strict';

// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    //console.log(fruits.join());
    const result = fruits.join(); // .join('|')등 구분자 넣을 수 있음
    console.log(result);
}

// Q2. make an array out of a string
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    //const array = new Array(fruits);
    //console.log(array);
    const reuslt = fruits.split(',');
    console.log(reuslt);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    //console.log(array.sort((a, b) => b - a));
    const reuslt = array.reverse();
    console.log(reuslt);
    console.log(array); // 배열 값도 변환 시킴
}

// Q4. make new array without the first two elements
{   
    //splices는 배열 자체에서 수정 / slice는 원하는 부분만 가져와서 새로 만듬

    console.clear();
    const array = [1, 2, 3, 4, 5];

    // const reuslt = array.splice(0,2);
    // console.log(reuslt);
    // console.log(array);- splice는 기존 배열에서 삭제시킴 > 새로운 배열X
    const reuslt = array.slice(2, 5);
    console.log(reuslt);
    console.log(array); 
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
    // console.log(students);
    // console.log(students[1]);

    // students.forEach((students) => console.log(students));
    // for(let i = 0; i < students.length; i++) {
    //     if(students[i].score === 90) {
    //         console.log(students[i]);
    //     }
    // }

    const result = students.find((student) => student.score === 90);
    console.log(result);
}

// Q6. make an array of enrolled students
{   
    // const quiz6 = students.filter((student) => student.enrolled === true);
    // console.log(quiz6);

    const result = students.filter((student) => student.enrolled === true);
    console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    // const quiz7 = new Array();

    // for(let i = 0; i < students.length; i++) {
    //     quiz7.push(students[i].score);
    // }
    // console.log(quiz7);

    const result = students.map((student) => student.score);
    console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
    // const quiz8 = students.some((student) => student.score < 50); 
    // console.log(quiz8);
    
    const result1 = students.some((student) => student.score < 50); 
    console.log(result1);

    const result2 = !students.every((student) => student.score >= 50); 
    console.log(result2);
}

// Q9. compute students' average score
{
    // const quiz9Array = students.map((student) => student.score);
    // const quize9Func = (a,b) => a+b / quiz9Array.length;
    // const quiz9 = quiz9Array.reduce(quize9Func);
    // console.log(quiz9);

    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    // const quiz10Array = students.map((student) => student.score);
    // const quiz10 = quiz10Array.join();
    // console.log(quiz10);

    const result = students
        .map((student) => student.score)
        // .filter((score) => score >= 50) 50점 이상인 사람만
        .join();
    console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    // const quiz10Array = students.map((student) => student.score);
    // const quiz10B = quiz10Array.sort((a, b) => a - b);
    // console.log(quiz10B);

    const result = students
        .map((student) => student.score)
        .sort((a, b) => a - b)
        .join();
    console.log(result);
}