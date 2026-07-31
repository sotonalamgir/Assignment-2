function matchWinner(teamAGoals, teamBGoals) {
    if ((typeof teamAGoals==="string")||(typeof teamBGoals==="string")){
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
