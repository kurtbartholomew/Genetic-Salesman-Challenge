/* Objective: A salesman must travel to 50 different state capitals.
   Given a random route through the US,the salesman must travel to
   each capital from index 0 to the last index on his route and then
   from the last index to the first (round trip). Use a genetic method:
   (find the best specimen, spawn new ones based on that
   speciment with a single random change to each, and repeat the
   process for many generations, selecting the best one each time)
   Use the method to find the optimal route over many generations. */

/**
 * Main method/ Takes an initial group of genes(cities), creates a condition on which to judge them
 * with initiateBloodline(createRoute), finds the strongest by using assessFitness (calculateDistance),
 * create a new generation based on the strongest by making copies and mutate them (alterRoute).
 * Repeat this process as many times as specified (availableResources) and return the best of the last generation.
 * @param  {[Array]} genes                 [The base data, in this case cities from lib/cities.js]
 * @param  {[Function]} assessFitness      [Calculate an attribute of a data member, in this case calculateDistance()]
 * @param  {[Function]} initiateBloodline  [Create a new collection of routes based on the best one from last generation]
 * @param  {[Function]} mutate             [Alter a route slightly (swap the position/index in the itinerary of two locations)]
 * @param  {[Number]} availableResources   [The number of generations the code will go through]
 * @return {[Array]}                       [The optimal route based on many generations of swapping routes]
 */
var geneticSalesman = function(genes, assessFitness, initiateBloodline, mutate, availableResources){
  var options = {
    numberOfBloodlines: 10,   // Used to repeat the process of 100 generation mutation multiple times
                              // This will be utilized by the final step explained below
    offspringPerSurvivor: 50, // # of new routes spawned each gen off the previous best route
  };

  

  /* Populate current generation creating as many new routes
     via createRoutes as specified by offspringPerSurvivor
     into currentGen */



  // Iterated through as many generations as availableResources
  


      /* Calculate the total distance covered of every route
      and store it along with that route */



      /* Either sort the current generation by distance
      or find the route with the lowest distance covered
      and store it. */



      /* Spawn a new generation based off of the best route of the 
      current generation by making mutated/altered copies of
      the best route. Make sure that the best route is also
      stored in the new generation! */



      /* Repeat the process for each generation! Make your current
      generation equal to the newly spawned generation and start over! */  
  
  return bestRoute;


}

// =====================================================================
// FINAL STEP ONCE YOU HAVE THE GENETIC SALESMAN FUNCTION WORKING:
// 
// Repeat the process of finding the best in 100 generations
// for as many times as is set by options.numberOfBloodlines

// Compare the distance of the best route in the current generation
// with the current best overall route. Assign accordingly.

// Return the best route after all of your bloodlines!
//======================================================================


/**
 * Uses the existing cities array to create a random itinerary
 * to visit them (The route would be if you traveled index 0 to the end)
 * @param  {[Array]} cities [Array containing objects representing US cities]
 * @return {[Array]}        [Cities array with cities at random indices]
 */
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
 * Takes the route passed (an array of objects representing cities)
 * and swaps the positions in the array of those city objects
 * @param  {[Array]} route     [Represents the current itinerary of a salesman]
 * @return {[Array]} routeCopy [New itinerary with the order of two cities swapped]
 */
var alterRoute = function(route){

  var routeCopy = route.slice();
  var randomIndex = 0;
  var randomIndex2 = 0;
  
  while(randomIndex === randomIndex2) {
    randomIndex = Math.floor(Math.random() * routeCopy.length);
    randomIndex2 = Math.floor(Math.random() * routeCopy.length);
  }

  var temp = routeCopy[randomIndex];
  routeCopy[randomIndex] = routeCopy[randomIndex2];
  routeCopy[randomIndex2] = temp;

  return routeCopy;
}
/**
 * Calculates the distance between a city and the next one
 * on the route, then calculates the total distances that would
 * be traveled.
 * @param  {[Array]} route  [A potential route the salesman could take]
 * @return {[Number]}       [The total distance needed to travel that route]
 */
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