
const loadingChars = ['|', '/', '-', '\\', '']; // List of characters to use for loading graphic
const repititions = 5;  // How many times should we repeat looping through the characters
const interval = 500;  // The interval to add to the delay between each animation "frame"
let delay = 500;  // The delay between displaying each character
let numberOfRuns = 0;  // The amount of times we've looped through the list of characters

// Iterate through the list of characters until the end and the number of times looped equals the amount of times to repeat
for (let index = 0; index < loadingChars.length && numberOfRuns < repititions; index++) {
  // Add writing the next character to the async queue with the specified delay
  setTimeout(() => process.stdout.write(`\r${loadingChars[index]}      `), delay);
  // Before reaching the end of the array, increment number of times looped, and reset index to 0
  if (index === loadingChars.length - 1) {
    numberOfRuns += 1;
    index = 0;
  }
  // Increment the delay for the next character by the set interval
  delay += interval;
}