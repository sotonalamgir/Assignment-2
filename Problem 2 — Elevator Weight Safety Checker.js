//Problem-02: Elevator Weight Safety Checker
function isElevatorSafe(weights) {
  let sum =0;
  let arryCheck = Array.isArray(weights);
  if(arryCheck===false){
    return "Invalid";
  }
  for(let weight of weights){
    sum = sum+weight;
  }
  if(sum<=400){
    return true;
  }else{
    return false;
  }
}



