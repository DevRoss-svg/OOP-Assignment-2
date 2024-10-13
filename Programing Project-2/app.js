const fs = require('fs'); // For file system operations (Node.js)

class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  // Save user data to a file
  saveToFile() {
    try {
      const userData = `ID: ${this.id}, Name: ${this.name}, Email: ${this.email}\n`;
      fs.appendFileSync('users.txt', userData);  // Appends data to a file
      console.log("User data saved to file successfully.");
    } catch (error) {
      console.log("An error occurred while saving the user data: " + error.message);
    }
  }

  // Read user data from a file
  static readFromFile() {
    try {
      const data = fs.readFileSync('users.txt', 'utf8');
      console.log("User data read from file:\n", data);
    } catch (error) {
      console.log("An error occurred while reading the user data: " + error.message);
    }
  }

  // String manipulation: find users with three 'a's in their surname
  static findUsersWithThreeAs(users) {
    try {
      return users.filter(user => {
        const surname = user.name.split(' ').pop(); // Assume last name is the surname
        const countA = (surname.match(/a/gi) || []).length;
        return countA >= 3;
      });
    } catch (error) {
      console.log("An error occurred during string manipulation: " + error.message);
    }
  }
}

// Main class for testing

// Create some user instances
let users = [
  new User(1, "Amanda Barnes", "amanda@example.com"),
  new User(2, "Sara Hathaway", "sara@example.com"),
  new User(3, "Joaquim Amarantha", "joaquim@example.com"),
  new User(4, "Anna Alvarez", "anna@example.com")
];

// Test file saving and reading functionality
users.forEach(user => user.saveToFile());
User.readFromFile();

// Test string manipulation functionality
const usersWithThreeAs = User.findUsersWithThreeAs(users);
console.log("Users with three 'a's in their surname:", usersWithThreeAs.map(user => user.name));
