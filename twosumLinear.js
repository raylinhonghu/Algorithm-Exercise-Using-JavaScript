function findSum(arr,target){
  var head = 0;
  var tail = arr.length-1;

  var index = [];
  while((arr[head]+arr[tail]!=target) && (head!=target)){
    if(arr[head]+arr[tail] > target){
      tail--;
      console.log("--");
    }else if(arr[head]+arr[tail] < target){
      head++;
      console.log("++");
    }
  }

  index.push(head);
  index.push(tail);
  return index;
}
console.log(findSum([1,2,4,4],8))
