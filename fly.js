function minimumPlanesNeeded(fuelUnits) {
    const N = fuelUnits.length;
    let planes = 0; // Number of planes hired
    let maxReachableIndex = 0; // Maximum reachable index
  
    for (let i = 0; i <= maxReachableIndex; i++) {
      // Check if the current airport can be reached
      if (i > maxReachableIndex)
        return -1; // Unable to reach the last airport
  
      // Update the maximum reachable index if necessary
      maxReachableIndex = Math.max(maxReachableIndex, i + fuelUnits[i]);
  
      // Check if the last airport is reachable
      if (maxReachableIndex >= N - 1)
        return planes;
      
      // Hire a plane to proceed to the next airport
      planes++;
    }
  
    return -1; // Unable to reach the last airport
  }
  
  // Example usage
  const fuelUnits = [2, 1, 2, 3, 1];
  const planesNeeded = minimumPlanesNeeded(fuelUnits);
  console.log(planesNeeded); // Output: 2
  