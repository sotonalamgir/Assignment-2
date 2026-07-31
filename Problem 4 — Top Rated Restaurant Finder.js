function topRatedRestaurant(restaurants) {
    let res = Array.isArray(restaurants);
     if (res==false || restaurants.length === 0) {
        return "Invalid";
    }
    let topRestaurant = restaurants[0];
    for (let i=1; i<restaurants.length; i++) {
        if (restaurants[i].rating > topRestaurant.rating) {
            topRestaurant = restaurants[i];
        }
    }
    return topRestaurant.name.toUpperCase();
}
