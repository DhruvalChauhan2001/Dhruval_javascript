
function num_string_range(start, end, step) {
    const result = [];
    let current = start;
  
    while (current <= end) {
      if (typeof start === "string") {
        result.push(String.fromCharCode(current));
      } else {
        result.push(current);
      }
      current += step;
    }
  
    return result;
  }
  num_string_range('a', "z", 2); // ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]
  num_string_range("Z", "A", 2); // ["Z", "X", "V", "T", "R", "P", "N", "L", "J", "H", "F", "D", "B"]
  num_string_range(0, -5, 1); // [0, -1, -2, -3, -4, -5]
  num_string_range(0, 25, 5); // [0, 5, 10, 15, 20, 25]
  num_string_range(20, 5, 5); // [20, 15, 10, 5]