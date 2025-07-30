// the purpose of these helpers is to change how your data looks
module.exports = {
  // the helper method 'format_time' will take in a timestamp and return a string with only the time
  format_time: (date) => {
    // We use the 'toLocaleTimeString()' method to format the time as H:MM:SS AM/PM
    return date.toLocaleTimeString();
  },

  add_turtle_to_everything: (data) => {
    return "turtle " + data + " turtle";
  }
};
