import express from 'express';
import cors from 'cors';
import { createConnection } from 'mysql2'; // meant to be mysql

const app = express();
const port = 3000;

// MySQL connection
const connection = createConnection({
  host: 'localhost',
  database: 'study_data',
  user: 'nodeuser',
  password: 'adminKofi22admin'
});

connection.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

app.use(cors());
app.use(express.json());

const modules = [
  { id: 1, name: 'Introduction to Lua', description: 'Learn the basics of Lua programming.', link: 'quiz.html?id=1', questions: [] },
  { id: 2, name: 'Advanced Lua', description: 'Dive deeper into Lua programming.', link: 'quiz.html?id=2', questions: [] },
  { id: 3, name: 'Expert Lua', description: 'Learn the basics of Lua programming.', link: 'quiz.html?id=3', questions: [] },
  { id: 4, name: 'Lua Scripting in Game Development', description: 'Learn the role of Lua in game development and scripting within game engines like Unity and Unreal Engine.', link: 'quiz.html?id=4', questions: [] },
  { id: 5, name: 'Lua applications and Integration', description: 'Learn the real-world applications of Lua in various domains such as game development, web scripting, and embedded systems', link: 'quiz.html?id=5', questions: [] },
  { id: 6, name: 'Lua and Embedded Systems Programming', description: 'Learn the suitability of Lua for embedded systems programming and IoT (Internet of Things) applications.', link: 'quiz.html?id=6', questions: [] },
  { id: 7, name: 'Lua Extensions and Libraries', description: "Explores popular Lua extensions, libraries, and frameworks for extending Lua's functionality and integrating with other technologies.", link: 'quiz.html?id=7', questions: [] },
  { id: 8, name: 'Advanced Lua 2', description: 'This module delves even further into the advanced concepts and features of Lua programming, offering a deeper understanding of its functionalities and capabilities.', link: 'quiz.html?id=8', questions: [] },
  { id: 9, name: 'Expert Lua 2', description: 'For those seeking an expert-level grasp of Lua programming, this module provides advanced topics, intricate techniques, and specialized applications to elevate your Lua proficiency to the next level.', link: 'quiz.html?id=9', questions: [] },
  { id: 10, name: 'Bonus Intermediate Lua', description: 'This bonus module offers additional intermediate-level challenges and insights into Lua programming, providing extra practice and learning opportunities for those looking to solidify their understanding.', link: 'quiz.html?id=10', questions: [] },
  { id: 11, name: 'Bonus Advanced Lua', description: 'Dive deeper into Lua programming with this bonus module, which explores advanced concepts, techniques, and best practices to sharpen your skills and expand your Lua programming repertoire.', link: 'quiz.html?id=11', questions: [] },
  { id: 12, name: 'Bonus Expert Lua', description: 'Take your Lua expertise to the next level with this bonus module, designed for seasoned programmers seeking to master complex Lua topics, tackle advanced challenges, and unlock the full potential of Lua programming.', link: 'quiz.html?id=12', questions: [] },
];

// Mock quiz questions data for each module
modules.forEach(module => {
  if (module.id === 1) {
    module.questions.push(
      { type: 'mcq', question: 'What is the syntax for a comment in Lua?', options: ['//', '--', '/*', '#'], correctAnswer: '--' },
      { type: 'mcq', question: 'Which Lua keyword is used to define a function?', options: ['def', 'function', 'fun', 'define'], correctAnswer: 'function' },
      { type: 'mcq', question: 'Which Lua keyword is used to define a function?', options: ['def', 'function', 'fun', 'define'], correctAnswer: 'function' },
      { type: 'mcq', question: 'What is the primary data structure in Lua used to store key-value pairs?', options: ['Array', 'List', 'Dictionary', 'Table'], correctAnswer: 'Table' },
      { type: 'mcq', question: 'Which symbol is used for string concatenation in Lua?', options: ['+', '-', '..', '*'], correctAnswer: '..' },
      { type: 'mcq', question: 'What function is used to iterate over key-value pairs in a Lua table?', options: ['pairs()', 'ipairs()', 'iterate()', 'traverse()'], correctAnswer: 'pairs()' },
      { type: 'mcq', question: 'In Lua, what is the default behavior when comparing two tables for equality?', options: ['Compare by reference', 'Compare by value', 'Tables cannot be compared', 'Compare by length'], correctAnswer: 'Compare by reference' },
      { type: 'mcq', question: 'Which Lua standard library function is used to open a file?', options: ['openfile()', 'readfile()', 'fopen()', 'io.open()'], correctAnswer: 'io.open()' },
      { type: 'mcq', question: 'What is the Lua operator used for exponentiation?', options: ['^', '**', '^^', 'pow()'], correctAnswer: '^' },
      { type: 'mcq', question: 'In Lua, what keyword is used to exit a loop prematurely?', options: ['halt', 'exit', 'break', 'stop'], correctAnswer: 'break' },
      { type: 'mcq', question: 'Which Lua library function is used to obtain the current time?', options: ['gettime()', 'currenttime()', 'os.time()', 'time()'], correctAnswer: 'os.time()' },
      { type: 'fill-in-the-blank', question: 'To declare a variable in Lua, use the keyword _______.', correctAnswer: 'local' }
      // Add more questions for module 1
    );
  } else if (module.id === 2) {
    module.questions.push(
      { type: 'mcq', question: 'What does the Lua function ipairs() do?', options: ['Returns an iterator function for arrays', 'Returns an iterator function for key-value pairs', 'Iterates over values in an array', 'Iterates over key-value pairs in a table'], correctAnswer: 'Iterates over key-value pairs in a table' },
      { type: 'mcq', question: 'Which of the following is NOT a valid Lua type?', options: ['String', 'Table', 'Float', 'Function'], correctAnswer: 'Float' },
      { type: 'mcq', question: 'In Lua, to define a function, you use the keyword _____', options: ['def', 'func', 'function', 'define'], correctAnswer: 'function' },
      { type: 'mcq', question: 'In the provided Lua code, the missing blank should be replaced with _____ to complete the line `alt = ("author: ", person)`', options: ['var', 'person', 'alt', 'print'], correctAnswer: 'person' },
      { type: 'mcq', question: 'The Lua function _____ is used for converting a string to a number.', options: ['tostring()', 'tonumber()', 'string.format()', 'string.match()'], correctAnswer: 'tonumber()' },
      { type: 'mcq', question: 'In Lua, the operator _____ is used for concatenating strings.', options: ['+', '.', ':', ','], correctAnswer: '..' }
    );
  } else if (module.id === 3) {
    module.questions.push(
      { type: 'fill-in-the-blank', question: 'In Lua, the operator ____ is used for string concatenation.', correctAnswer: '..' },
      { type: 'fill-in-the-blank', question: 'The function used to define a metamethod for indexing operations is _______.', correctAnswer: '__index' },
      { type: 'fill-in-the-blank', question: 'Lua provides a built-in library for working with ______ data structures.', correctAnswer: 'tables' },
      { type: 'fill-in-the-blank', question: 'In Lua, the logical operator ___ represents the logical "and" operation.', correctAnswer: 'and' },
      { type: 'fill-in-the-blank', question: 'To remove an element from a table in Lua, you can use the function ____________.', correctAnswer: 'table.remove' },
      { type: 'fill-in-the-blank', question: 'In Lua, a coroutine can be created using the function.', correctAnswer: 'coroutine.create' },
      { type: 'fill-in-the-blank', question: 'The Lua function used to format strings according to a given format is _____________.', correctAnswer: 'string.format' }
    );
  } else if (module.id === 4) {
    module.questions.push(
      { type: 'mcq', question: 'Which Lua library is commonly used for handling complex mathematical operations?', options: ['math', 'cmath', 'numeric', 'calc'], correctAnswer: 'math' },
      { type: 'fill-in-the-blank', question: 'Lua allows for ____ assignment of variables.', correctAnswer: 'dynamic' },
      { type: 'mcq', question: 'In Lua, what is the purpose of the "metatable" feature?', options: ['To allow custom behavior for tables', 'To define metamethods for arithmetic operations', 'To control garbage collection', 'To implement object-oriented programming'], correctAnswer: 'To allow custom behavior for tables' },
      { type: 'fill-in-the-blank', question: 'The Lua function used to execute a file as a Lua script is ____.', correctAnswer: 'dofile()' },
      { type: 'fill-in-the-blank', question: 'The Lua function used to perform pattern matching on strings is ____.', correctAnswer: 'string.match()' },
      { type: 'mcq', question: 'What does the Lua function "io.popen()" do?', options: ['Opens a file in read mode', 'Opens a file in write mode', 'Executes a shell command and returns a file handle', 'Closes an open file'], correctAnswer: 'Executes a shell command and returns a file handle' }
    );
  } else if (module.id === 5) {
    module.questions.push(
      { type: 'mcq', question: 'Which Lua library is commonly used for handling network communication?', options: ['socket', 'net', 'networking', 'io'], correctAnswer: 'socket' },
      { type: 'mcq', question: 'What is LuaJIT?', options: ['A Just-In-Time compiler for Lua', 'A Lua package manager', 'A Lua testing framework', 'A Lua web framework'], correctAnswer: 'A Just-In-Time compiler for Lua' },
      { type: 'mcq', question: 'Which Lua library is used for parsing and manipulating JSON data?', options: ['cjson', 'jsonlib', 'jsonparser', 'jsonify'], correctAnswer: 'cjson' },
      { type: 'mcq', question: 'In Lua, which module is commonly used for handling HTTP requests and responses?', options: ['luasocket', 'luahttp', 'http', 'httputil'], correctAnswer: 'http' },
      { type: 'mcq', question: 'What does the Lua library "ffi" stand for?', options: ['Foreign Function Interface', 'Fast File Input', 'Formatted Input/Output', 'Filesystem Interface'], correctAnswer: 'Foreign Function Interface' },
      { type: 'fill-in-the-blank', question: 'The Lua library ____ is used for interfacing with C code.', correctAnswer: 'ffi' },
      { type: 'fill-in-the-blank', question: 'LuaRocks is a ____ for managing Lua modules and dependencies.', correctAnswer: 'package manager' },
      { type: 'fill-in-the-blank', question: 'The Lua library ____ provides functionality for working with XML.', correctAnswer: 'lxml' },
      { type: 'fill-in-the-blank', question: '____ is a Lua library commonly used for implementing RESTful APIs.', correctAnswer: 'OpenResty' },
      { type: 'fill-in-the-blank', question: '____ is a Lua web framework for building lightweight and efficient web applications.', correctAnswer: 'Lapis' }
    );
  } else if (module.id === 6) {
    module.questions.push(
      { type: 'fill-in-the-blank', question: 'Lua-RTOS is an open-source ____ for real-time operating systems development in Lua.', correctAnswer: 'RTOS' },
      { type: 'fill-in-the-blank', question: '____ is a Lua-based firmware for the ESP8266 WiFi module.', correctAnswer: 'NodeMCU' },
      { type: 'mcq', question: 'Which Lua library is commonly used for embedded systems programming?', options: ['lua-rtos', 'lua-embedded', 'lua-embedded-systems', 'lua-iot'], correctAnswer: 'lua-rtos' },
      { type: 'mcq', question: 'What is the purpose of the Lua firmware provided by NodeMCU?', options: ['For IoT applications', 'For web development', 'For desktop applications', 'For game development'], correctAnswer: 'For IoT applications' },
      { type: 'mcq', question: 'What does the Lua library "ffi" stand for?', options: ['Foreign Function Interface', 'Fast File Input', 'Formatted Input/Output', 'Filesystem Interface'], correctAnswer: 'Foreign Function Interface' },
      { type: 'fill-in-the-blank', question: 'In Lua, the ____ module is commonly used for controlling General Purpose Input/Output pins on microcontrollers.', correctAnswer: 'gpio' },
      { type: 'fill-in-the-blank', question: 'The Lua ____ module provides functionality for working with analog sensors and inputs on microcontrollers.', correctAnswer: 'adc' },
      { type: 'fill-in-the-blank', question: 'The Lua library ____ provides functionality for working with XML.', correctAnswer: 'lxml' },
      { type: 'fill-in-the-blank', question: '____ is a Lua library commonly used for implementing RESTful APIs.', correctAnswer: 'OpenResty' },
      { type: 'fill-in-the-blank', question: '____ is a Lua web framework for building lightweight and efficient web applications.', correctAnswer: 'Lapis' },
      { type: 'mcq', question: 'Which Lua module is often used for interfacing with hardware peripherals on microcontrollers?', options: ['gpio', 'http', 'json', 'socket'], correctAnswer: 'gpio' },
      { type: 'mcq', question: 'In Lua, what does the "adc" module typically handle?', options: ['Analog-to-digital conversion', 'Digital-to-analog conversion', 'Serial communication', 'Networking'], correctAnswer: 'Analog-to-digital conversion' },
      { type: 'mcq', question: 'Which Lua interpreter is specifically designed for embedded systems like ESP8266 and ESP32?', options: ['Espressif Lua', 'EmbeddedLua', 'MicroLua', 'TinyLua'], correctAnswer: 'MicroLua' },
      { type: 'fill-in-the-blank', question: 'MicroLua is optimized for ____ and is suitable for resource-constrained embedded devices.', correctAnswer: 'performance' }
    );
  } else if (module.id === 7) {
    module.questions.push(
      { type: 'mcq', question: 'Which Lua library provides support for handling JSON data?', options: ['lua-json', 'lua-cjson', 'lua-xml', 'lua-yaml'], correctAnswer: 'lua-cjson' },
      { type: 'mcq', question: 'Which Lua extension is commonly used for implementing Lua modules in C or C++?', options: ['LuaBridge', 'LuaJIT', 'LuaRocks', 'LuaBind'], correctAnswer: 'LuaBind' },
      { type: 'mcq', question: 'What is the purpose of the LuaSocket library?', options: ['Handling file I/O operations', 'Implementing networking protocols', 'Working with XML data', 'Creating graphical user interfaces'], correctAnswer: 'Implementing networking protocols' },
      { type: 'mcq', question: 'Which Lua library is often used for working with databases?', options: ['lua-sqlite3', 'lua-cassandra', 'lua-mysql', 'lua-mongodb'], correctAnswer: 'lua-sqlite3' },
      { type: 'mcq', question: 'What does the "LuaFileSystem" library provide?', options: ['Utilities for manipulating file paths and directories', 'Functions for reading and writing files', 'Support for multithreading in Lua', 'Integration with the LuaJIT compiler'], correctAnswer: 'Utilities for manipulating file paths and directories' }
    );
  } else if (module.id === 8) {
    module.questions.push(
      { type: 'fill-in-the-blank', question: 'In Lua, the function "math.randomseed()" is used to initialize the random number generator with a given ____.', correctAnswer: 'seed' },
      { type: 'fill-in-the-blank', question: 'The Lua function "string.gsub()" stands for "string ____ by ____."', correctAnswer: 'gsub, pattern, replacement' },
      { type: 'fill-in-the-blank', question: 'Lua provides a special table called the ____ environment, which contains all global variables and functions.', correctAnswer: '_G' },
      { type: 'fill-in-the-blank', question: 'The Lua function "io.lines()" returns an iterator function that reads lines from a file, closing the file automatically when the ____ is exhausted.', correctAnswer: 'iterator' },
      { type: 'fill-in-the-blank', question: 'The Lua operator "!=" is used to denote ____ inequality.', correctAnswer: 'not equal' }
    );
  } else if (module.id === 9) {
    module.questions.push(
      { type: 'mcq', question: 'Which Lua operator is used for bitwise exclusive OR?', options: ['&', '|', '~', '⊕'], correctAnswer: '⊕' },
      { type: 'mcq', question: 'In Lua, which function is used to create a shallow copy of a table?', options: ['table.clone()', 'table.copy()', 'table.deepcopy()', 'table.copytable()'], correctAnswer: 'table.clone()' },
      { type: 'mcq', question: 'What does the Lua function "os.clock()" return?', options: ['The current time in seconds', 'The current time in milliseconds', 'The CPU time used by the program', 'The current system uptime'], correctAnswer: 'The CPU time used by the program' },
      { type: 'mcq', question: 'Which Lua standard library function is used to find the maximum value in a table?', options: ['math.max()', 'table.max()', 'table.maxn()', 'math.maximum()'], correctAnswer: 'math.max()' },
      { type: 'mcq', question: 'In Lua, what does the function "coroutine.yield()" do?', options: ['Resumes a coroutine', 'Creates a new coroutine', 'Suspends the execution of a coroutine', 'Terminates a coroutine'], correctAnswer: 'Suspends the execution of a coroutine' }
    );
  } else if (module.id === 10) {
    module.questions.push(
      { type: 'fill-in-the-blank', question: 'The Lua library "lpeg" is commonly used for implementing ____.', correctAnswer: 'parsing expressions grammars' },
      { type: 'fill-in-the-blank', question: '____ is a Lua library that provides bindings for the Simple DirectMedia Layer (SDL) library.', correctAnswer: 'lua-sdl' },
      { type: 'fill-in-the-blank', question: 'The LuaRocks project is a package manager for Lua modules, enabling easy installation of ____.', correctAnswer: 'third-party libraries and applications' },
      { type: 'fill-in-the-blank', question: '____ is a Lua library that provides support for asynchronous I/O operations.', correctAnswer: 'lua-lanes' },
      { type: 'fill-in-the-blank', question: 'The Lua library "lua-curl" allows Lua scripts to perform ____.', correctAnswer: 'HTTP requests and handle responses' }
    );
  } else if (module.id === 11) {
    module.questions.push(
      { type: 'mcq', question: 'What does the Lua function "pairs()" return when iterating over a table?', options: ['Keys of the table', 'Values of the table', 'Both keys and values of the table', 'Length of the table'], correctAnswer: 'Both keys and values of the table' },
      { type: 'mcq', question: 'Which Lua operator is used for performing exponentiation?', options: ['^', '**', '*', '^^'], correctAnswer: '^' },
      { type: 'mcq', question: 'In Lua, how are boolean values represented?', options: ['True and False', '1 and 0', 'Yes and No', 'On and Off'], correctAnswer: 'True and False' },
      { type: 'mcq', question: 'What does the Lua function "require()" do?', options: ['Loads a module', 'Imports a file', 'Declares a variable', 'Defines a function'], correctAnswer: 'Loads a module' },
      { type: 'mcq', question: 'Which Lua construct is used for defining a block of code that should be executed repeatedly?', options: ['if-else', 'for loop', 'while loop', 'switch-case'], correctAnswer: 'for loop' }
    );
  } else if (module.id === 12) {
    module.questions.push(
      { type: 'fill-in-the-blank', question: 'In Lua, the "local" keyword is used to declare ____ variables.', correctAnswer: 'local' },
      { type: 'fill-in-the-blank', question: 'The Lua function "tostring()" is used for converting a value to its ____ representation.', correctAnswer: 'string' },
      { type: 'fill-in-the-blank', question: 'The Lua function "math.random()" generates a random ____ number.', correctAnswer: 'floating-point' },
      { type: 'fill-in-the-blank', question: 'Lua supports ____ assignment of variables.', correctAnswer: 'multiple' },
      { type: 'fill-in-the-blank', question: 'The Lua operator "==" is used for testing ____ equality.', correctAnswer: 'value' }
    );
  }
  
  // might add more module types
});


// Endpoint to get modules
app.get('/modules', (req, res) => {
  res.json(modules);
});

// Endpoint to get quiz questions
app.get('/quiz-questions/:moduleId', (req, res) => {
  const { moduleId } = req.params;
  const module = modules.find(m => m.id.toString() === moduleId);
  if (!module) {
    return res.status(404).json({ error: 'Module not found' });
  }
  res.json(module.questions);
});


// User registration endpoint
app.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  const query = `INSERT INTO users (username, email, password, points) VALUES (?, ?, ?, 0)`;
  connection.query(query, [username, email, password], (err, result) => {
    if (err) {
      console.error('Error inserting user:', err);
      res.status(500).json({ error: 'An error occurred while registering user' });
    } else {
      console.log('User registered successfully');
      res.status(200).json({ message: 'User registered successfully' });
    }
  });
});

// User login endpoint
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const query = `SELECT * FROM users WHERE email = ? AND password = ?`;
  connection.query(query, [email, password], (err, result) => {
    if (err) {
      console.error('Error authenticating user:', err);
      res.status(500).json({ error: 'An error occurred while authenticating user' });
    } else {
      if (result.length > 0) {
        console.log('User authenticated successfully');
        res.status(200).json({ message: 'User authenticated successfully' });
      } else {
        console.log('Invalid email or password');
        res.status(401).json({ error: 'Invalid email or password' });
      }
    }
  });
});

//causing error?
function handleAchievements(email, pointsEarned, callback) {
  const query = `SELECT points, achievements FROM users WHERE email = ?`;
  connection.query(query, [email], (err, results) => {
    if (err) return callback(err);
    
    const user = results[0];
    const currentPoints = user.points;
    const newPoints = currentPoints + pointsEarned;
    let achievements = user.achievements ? JSON.parse(user.achievements) : [];

    // Existing "First 50 points" achievement
    if (newPoints >= 50 && !achievements.includes("First 50 points!")) {
      achievements.push("First 50 points!");
    }

    // Point milestones achievements
    const milestones = [100, 200, 500, 1000];
    milestones.forEach(milestone => {
      if (newPoints >= milestone && !achievements.includes(`${milestone} points!`)) {
        achievements.push(`${milestone} points!`);
      }
    });

    // A "Consistent Performer" achievement for crossing 100 points with less than 5 quizzes
    // This assumes you have a way to count the number of quizzes a user has taken
    if (newPoints >= 100 && user.quizCount <= 5 && !achievements.includes("Consistent Performer")) {
      achievements.push("Consistent Performer");
    }

    // "Overachiever" for earning more than 30 points in a single quiz submission
    if (pointsEarned > 30 && !achievements.includes("Overachiever")) {
      achievements.push("Overachiever");
    }

    // "Night Owl" for submitting a quiz after midnight (server time)
    const hour = new Date().getHours();
    if (hour >= 0 && hour < 6 && !achievements.includes("Night Owl")) {
      achievements.push("Night Owl");
    }

    const updateQuery = `UPDATE users SET points = ?, achievements = ? WHERE email = ?`;
    connection.query(updateQuery, [newPoints, JSON.stringify(achievements), email], (updateErr, updateResults) => {
      if (updateErr) {
        return callback(updateErr);
      }
      callback(null, achievements);
    });
  });
}


// Endpoint to get user profile by email
app.get('/profile/:email', (req, res) => {
  const { email } = req.params;
  const query = `SELECT * FROM users WHERE email = ?`;
  connection.query(query, [email], (err, results) => {
    if (err) {
      console.error('Error fetching user profile:', err);
      res.status(500).json({ error: 'An error occurred while fetching user profile' });
    } else {
      if (results.length === 0) {
        res.status(404).json({ error: 'User not found' });
      } else {
        const user = results[0];
        res.status(200).json({
          id: user.id,
          username: user.username,
          email: user.email,
          points: user.points
        });
      }
    }
  });
});


// Endpoint to submit quiz
app.post('/submit-quiz/:moduleId', (req, res) => {
  const { email, moduleId } = req.body;
  const module = modules.find(m => m.id.toString() === moduleId);
  if (!module) {
    return res.status(404).json({ error: 'Module not found' });
  }

  const { answers } = req.body;
  let pointsEarned = 0;
  answers.forEach((answer, index) => {
    if (answer === module.questions[index].correctAnswer) {
      pointsEarned += 10; // Each correct answer earns 10 points
    }
  });

  const query = `UPDATE users SET points = points + ? WHERE email = ?`;
  connection.query(query, [pointsEarned, email], (err, result) => {
    if (err) {
      console.error('Error updating user points:', err);
      res.status(500).json({ error: 'An error occurred while updating user points' });
    } else {
      handleAchievements(email, pointsEarned, (achErr, achievements) => {
        if (achErr) {
          console.error('Error handling achievements:', achErr);
        }
        console.log('Achievements updated successfully', achievements);
        res.status(200).json({ success: true, points: pointsEarned, achievements: achievements });
      });
    }
  });
});


// Endpoint to add points to a user
app.post('/add-points', (req, res) => {
  const { email, pointsToAdd } = req.body;

  if (!email || pointsToAdd === undefined) {
    return res.status(400).json({ error: 'Email and points to add must be provided' });
  }

  // Call the addPoints function
  addPoints(email, pointsToAdd, (err, result) => {
    if (err) {
      console.error('Error updating user points:', err);
      res.status(500).json({ error: 'An error occurred while updating user points' });
    } else {
      console.log(`Points added successfully to user: ${email}`);
      res.status(200).json({ success: true, pointsAdded: pointsToAdd });
    }
  });
});

// Function to add points to a user's account
function addPoints(email, pointsToAdd, callback) {
  const query = `UPDATE users SET points = points + ? WHERE email = ?`;
  connection.query(query, [pointsToAdd, email], (err, result) => {
    callback(err, result);
  });
}


// Endpoint to get leaderboard data
app.get('/leaderboard', (req, res) => {
  const query = `SELECT username, points FROM users ORDER BY points DESC`;
  connection.query(query, (err, results) => {
      if (err) {
          console.error('Error fetching leaderboard data:', err);
          res.status(500).json({ error: 'An error occurred while fetching leaderboard data' });
      } else {
          res.status(200).json(results);
      }
  });
});


app.get('/achievements/:email', (req, res) => {
  const { email } = req.params;
  const query = `SELECT achievements FROM users WHERE email = ?`;
  connection.query(query, [email], (err, results) => {
    if (err) {
      console.error('Error fetching achievements:', err);
      return res.status(500).json({ error: 'An error occurred while fetching achievements' });
    }
    
    const achievements = results[0] ? JSON.parse(results[0].achievements || '[]') : [];
    res.json(achievements);
  });
});


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
