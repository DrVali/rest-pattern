const scores=[98,58,91,78,87,96,72];

function findscore([top1,top2,top3,...sortArray]){
console.log(top1,top2,top3);
console.log(...sortArray);
}
let sortArray=scores.sort().reverse();
findscore(sortArray);
