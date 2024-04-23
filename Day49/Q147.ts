// Defining a function that fetchs a data with a callback pattern and error handling

function fetchData(callback) {
    // making an error condition
    const error = new Error("Failed to fetch data!");
    const data = "Here is the data.";
  
    // using random method with condition to make error sometime
    if (Math.random() > 0.5) {
      // No error, data is fetched successfully
      callback(null, data);
    } else {
      // Passes error to the callback
      callback(error);
    }
}
  
  // Call the fetchData function with error handling in the callback
fetchData((error, data) => {
    if (error) {
      // Handles the error by logging its message
      console.error(error.message);
    } else {
      // Processes the data by logging it, if not an error
    console.log(data);
    }
});
  