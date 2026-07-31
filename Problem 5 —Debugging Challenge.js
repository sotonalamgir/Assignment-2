function averageResponseTime(times) {
    if (Array.isArray(times) === false) {
        return "Invalid";
    }
    let checkEveryItems = times.every(item => typeof item === "number");
    if (times.length === 0 || checkEveryItems===false ){
        return "Invalid";
    }
    let total = 0;
    for (let i = 0; i < times.length; i++) {
        total = total + times[i];
    }

    return total / times.length;
}

