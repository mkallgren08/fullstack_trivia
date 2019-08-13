// import questions from './myquestions'
let fs = require('fs');
let questions = require(process.argv[2]);
let obj = require(process.argv[3]);
// console.log(questions);
// console.log(obj.results);

questions.forEach((ele)=>{
  // console.log(ele)
  let newEntry = {
    category: "Science & Nature",
    type: "multiple",
    difficulty: ele.difficulty,
    question: ele.question,
    correct_answer: ele.correct,
    incorrect_answers: [],
    details: ele.answerTxt
  }
  if (ele.ans1){newEntry.incorrect_answers.push(ele.ans1)};
  if (ele.ans2){newEntry.incorrect_answers.push(ele.ans2)};
  if (ele.ans3){newEntry.incorrect_answers.push(ele.ans3)};
  if (ele.ans4){newEntry.incorrect_answers.push(ele.ans4)};
  // if (ele.ans1){console.log(1)};
  // if (ele.ans2){console.log(2)};
  // if (ele.ans3){console.log(3)};
  // if (ele.ans4){console.log(4)};
  obj.results.unshift(newEntry);
});

// console.log(obj.results)

let newName  = process.argv[3]; newName = newName.replace('./','').split('.');
newName = `${newName[0]}${process.argv[4]}.json`


obj = JSON.stringify(obj, null, 2);

console.log(newName);
// console.log(obj);
obj ? (fs.writeFile(newName, obj ,'utf8', (err) => {
  err ? console.log( `The following error occured: ${err}`): console.log('File has been edited and saved!')
})) : console.log('Error!'); 