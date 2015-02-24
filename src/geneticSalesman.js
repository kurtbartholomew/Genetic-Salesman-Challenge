
/**
 * governing code for how the 
 * @param  {[type]} genes              [description]
 * @param  {[type]} assessFitness      [description]
 * @param  {[type]} initiateBloodline  [description]
 * @param  {[type]} mutate             [description]
 * @param  {[type]} availableResources [description]
 * @return {[type]}                    [description]
 */
var geneticSalesman = function(genes, assessFitness, initiateBloodline, mutate, availableResources){
  var options = {
    numberOfBloodlines: 10,
    offspringPerSurvivor: 50,
  };

  var optimalRoute;
  var initialRoutes = []; 

  for (var i = 0; i < numberOfBloodlines; i++) {
    var newRoute = createRoute(cities);
    newRoute.distance = calculateDistance(newRoute);
    initialRoutes.push(newRoute);
  }
  // for (var y = 0; )

  var currentGen = initialRoutes.slice();

  // genes - cities
  // assessFitness - calculate distance
  // initiateBloodline - createroute
  // mutate - alter route
  // availableResources - number of generations

  // populate current gen and alter the initial routes
  // calculate distance and sort
  // spawn new gen based off of best
  // continue that for number of bloodlines
  // choose best of last generation

  for (var j = 0; j < availableResources; j++) {
    
    currentGen.forEach(function(route) {
      route.distance = calculateDistance(route);
    });

    currentGen.sort(function(a, b) {
      return a.distance - b.distance;
    });

    var sortedGen = currentGen.slice();

    currentGen.forEach(function(route) {
      route = alterRoute(sortedGen[0]);
    });
  }
  
  currentGen.sort(function(a, b) {
    return a.distance - b.distance;
  });


  return currentGen[0];
}

var createRoute = function(cities){
  var route = cities.slice();
  for(var i = 0; i < route.length; i++){
    var randomIndex = Math.floor(Math.random() * i);
    route[i] = route[randomIndex];
    route[randomIndex] = cities[i];
  }
  return route;
}
/**
 * Swap two locations in your route
 * @param  {[type]} route [description]
 * @return {[type]}       [description]
 */
var alterRoute = function(route){

  var routeCopy = route.slice();

  var randomIndex = Math.floor(Math.random() * routeCopy.length);
  var randomIndex2 = Math.floor(Math.random() * routeCopy.length);

  var temp = routeCopy[randomIndex];
  routeCopy[randomIndex] = routeCopy[randomIndex2];
  routeCopy[randomIndex2] = temp;

  return routeCopy;
}

var calculateDistance = function(route){
  var distances = route.map(function(city, index, route){
    var nextCity = route[index + 1] || route[0];
    var distance = distanceCalculator(city, nextCity);
    return distance;
  });

  return distances.reduce(function(distance1, distance2){
    return distance1 + distance2;
  });
}

