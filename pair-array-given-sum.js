/* 
arr=[1, 4, 45, 6, 10, 8]

sum=22

find array[a,b,c]  where a+b+c = sum

eg: From above array 4+10+8 =22
so Answers is [4,10,8]

Bidyashish Kumar
*/

function givenTriplets(arr, sum) {
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] == sum) {
          return [arr[i], arr[j], arr[k]];
        }
      }
    }
  }
  return false;
}

console.log(givenTriplets([1, 4, 45, 6, 10, 8], 22));
