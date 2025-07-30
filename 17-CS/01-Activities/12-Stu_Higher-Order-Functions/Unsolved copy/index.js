const grades = [56, 78, 99, 85];

// TODO: Complete the 'findAverage' function below.

//to start, accumulater is 0 because we haven't done anything, currentValue is 56 because that's first, index is 0, array is grades
function findAverage(accumulator, currentValue, index, array) { 
    if (index === array.length-1) {
        //this works like (56) + 78, retun ; (56+78) + 99, return ; (56+78+99) + 85, return ; until the array is done
        return (accumulator + currentValue)/array.length;
    }
    return accumulator + currentValue
}

// TODO: Pass the 'findAverage' into the reduce method.
let gradeAverage = grades.reduce();

console.log(gradeAverage);
