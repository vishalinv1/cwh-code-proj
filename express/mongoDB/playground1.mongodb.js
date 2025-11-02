
use('sigma');

// Insert a few documents into the sales collection.
db.getCollection('courses').insertMany([
  { "name": "Java", "price": 20000, "Instructor": "Vishal" },
  { "name": "Python", "price": 18000, "Instructor": "Anjali" },
  { "name": "C++", "price": 15000, "Instructor": "Rahul" },
  { "name": "JavaScript", "price": 17000, "Instructor": "Neha" },
  { "name": "Data Science", "price": 25000, "Instructor": "Amit" },
  { "name": "Machine Learning", "price": 30000, "Instructor": "Rohit" },
  { "name": "Web Development", "price": 22000, "Instructor": "Priya" },
  { "name": "ReactJS", "price": 20000, "Instructor": "Karan" },
  { "name": "Cyber Security", "price": 28000, "Instructor": "Sonal" },
  { "name": "Cloud Computing", "price": 32000, "Instructor": "Deepak" }
]);

// Print a message to the output window.
console.log(`Done inserting datas`);
