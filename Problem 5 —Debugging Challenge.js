//Problem-01: Match Winner
function matchWinner(teamAGoals, teamBGoals) {
     if ((typeof teamAGoals=="string")||(typeof teamBGoals=="string")){
        return "Invalid";
    }else if((teamAGoals===null)||(teamBGoals===null)){
        return "Invalid";
    }
    else if(teamAGoals>teamBGoals){
    return "Team A Won";
    }
    else if(teamBGoals>teamAGoals){
    return "Team B Won";
    }
    else{
    return "Draw";
    }
}

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

//Problem-03: AI Token Cost Calculator
function calculateAiCost(tokensUsed) {
    const freeToken = 500;
  const tokenPercharge = 100;
  const rate = 5;
  if (typeof tokensUsed == "string" || tokensUsed < 0) {
    return "Invalid";
  }
  if (tokensUsed <= freeToken) {
    return 0;
  }
  const extraTokens = tokensUsed - freeToken;
  const costUnits = Math.floor(extraTokens / tokenPercharge);
  const cost = costUnits * rate;
  return cost;
}

//Problem-04: Top Rated Restaurant Finder
function topRatedRestaurant(restaurants) {
    let res = Array.isArray(restaurants);
    if (res = false || restaurants.length === 0) {
        return "Invalid";
    }
    let topRestaurant = restaurants[0];
    for (let i = 1; i < restaurants.length; i++) {
        if (restaurants[i].rating > topRestaurant.rating) {
            topRestaurant = restaurants[i];
        }
    }
    return topRestaurant.name.toUpperCase();
}

//Problem-05: Debugging Challenge - API Response Time Monitor
/* এই ফাংশনের সব বাগ খুঁজে ঠিক করো — নাম পরিবর্তন করবে না */
function averageResponseTime(times) {
  if (Array.isArray(times) = false) {
        return "Invalid";
   }

   if (times.length = 0) {
        return "Invalid";
    }

 let total = 0;
    for (let i = 1; i <= times.length; i++) {
        total = total + time[i];
    }

  return total / times;
}

