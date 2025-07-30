const grades = [56, 78, 99, 85];

// TODO: Complete the 'findAverage' function below.
function findAverage(accumulator, currentValue, index, array) {
  let sum = accumulator + currentValue;
  console.log(sum);
  // array.length - 1 is the last index
  // only want to calculate the average once we get to the end
  if(index === array.length - 1){
    return sum / array.length;
  }
  return sum;
}

// TODO: Pass the 'findAverage' into the reduce method.
let gradeAverage = grades.reduce(findAverage, 0);

console.log(gradeAverage);
