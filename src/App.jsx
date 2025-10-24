import React, { useState, useEffect } from 'react';
import { Book, Code, Layout, Palette, Database, Globe, Moon, Sun, Search, ChevronRight, ChevronDown, X, BookOpen, Cpu, Smartphone } from 'lucide-react';

const booksData = {
  frontend: {
    id: 'frontend',
    title: 'Frontend Development',
    icon: Layout,
    color: '#4A90E2',
    description: 'Master HTML, CSS, and JavaScript',
    units: [
      {
        id: 1,
        title: 'HTML Fundamentals',
        icon: Code,
        subsections: [
          {
            title: 'Introduction to HTML',
            content: `HTML (HyperText Markup Language) is the backbone of every website. It provides structure and meaning to web content through a system of elements and tags.

HTML documents are composed of nested elements that create a hierarchical structure called the DOM (Document Object Model). Every HTML document starts with a DOCTYPE declaration and contains head and body sections.`,
            codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Webpage</title>
</head>
<body>
    <h1>Welcome to Web Development</h1>
    <p>This is your first HTML page!</p>
</body>
</html>`
          },
          {
            title: 'Semantic HTML',
            content: `Semantic HTML uses meaningful tags that describe the content they contain. This improves accessibility, SEO, and code maintainability.

Key semantic elements include header, nav, main, article, section, aside, and footer. These elements help screen readers and search engines understand your page structure.`,
            codeExample: `<header>
    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
        </ul>
    </nav>
</header>

<main>
    <article>
        <h2>Article Title</h2>
        <p>Article content goes here...</p>
    </article>
</main>

<footer>
    <p>&copy; 2025 My Website</p>
</footer>`
          },
          {
            title: 'Forms and Input',
            content: `HTML forms are essential for collecting user input. They include various input types, validation attributes, and form controls.

Modern HTML5 introduced new input types like email, date, number, and color, along with built-in validation attributes that improve user experience.`,
            codeExample: `<form action="/submit" method="POST">
    <label for="name">Name:</label>
    <input type="text" id="name" required>
    
    <label for="email">Email:</label>
    <input type="email" id="email" required>
    
    <label for="age">Age:</label>
    <input type="number" id="age" min="18" max="100">
    
    <button type="submit">Submit</button>
</form>`
          }
        ]
      },
      {
        id: 2,
        title: 'CSS Styling',
        icon: Palette,
        subsections: [
          {
            title: 'CSS Selectors and Specificity',
            content: `CSS selectors determine which elements receive styling. Understanding specificity is crucial for managing style conflicts.

Specificity hierarchy: Inline styles > IDs > Classes/Attributes > Elements. The more specific selector wins when conflicts occur.`,
            codeExample: `/* Element selector */
p { color: blue; }

/* Class selector */
.highlight { background: yellow; }

/* ID selector */
#main-header { font-size: 24px; }

/* Descendant selector */
nav ul li { display: inline; }

/* Pseudo-classes */
a:hover { color: red; }
input:focus { border: 2px solid blue; }`
          },
          {
            title: 'Flexbox Layout',
            content: `Flexbox is a one-dimensional layout system perfect for distributing space and aligning items in rows or columns.

Key properties include display: flex, justify-content, align-items, flex-direction, and flex-wrap. Flexbox simplifies many layout challenges.`,
            codeExample: `.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
}

.item {
    flex: 1;
    /* flex-grow: 1, flex-shrink: 1, flex-basis: 0 */
}

.sidebar {
    flex: 0 0 250px;
    /* Don't grow, don't shrink, 250px wide */
}`
          },
          {
            title: 'CSS Grid',
            content: `CSS Grid is a two-dimensional layout system that excels at creating complex page layouts with rows and columns.

Grid provides precise control over both axes simultaneously, making it ideal for full page layouts and component arrangements.`,
            codeExample: `.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 20px;
}

/* Responsive grid */
@media (max-width: 768px) {
    .grid-container {
        grid-template-columns: 1fr;
    }
}

/* Named grid areas */
.layout {
    display: grid;
    grid-template-areas:
        "header header"
        "sidebar main"
        "footer footer";
}`
          },
          {
            title: 'Animations and Transitions',
            content: `CSS animations and transitions add life to your interfaces. Transitions animate property changes, while animations provide more complex, keyframe-based motion.`,
            codeExample: `/* Transition */
.button {
    background: blue;
    transition: all 0.3s ease;
}

.button:hover {
    background: darkblue;
    transform: scale(1.05);
}

/* Animation */
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.element {
    animation: fadeIn 1s ease-in;
}`
          }
        ]
      },
      {
        id: 3,
        title: 'JavaScript Essentials',
        icon: Code,
        subsections: [
          {
            title: 'Variables and Data Types',
            content: `JavaScript is a dynamically typed language with several primitive data types: string, number, boolean, undefined, null, symbol, and bigint.

Modern JavaScript uses let and const for variable declarations, avoiding var due to its function-scoping issues.`,
            codeExample: `// Variables
let userName = "John";
const PI = 3.14159;

// Data types
let str = "Hello";
let num = 42;
let bool = true;
let arr = [1, 2, 3];
let obj = { name: "Alice", age: 30 };

// Type checking
console.log(typeof str); // "string"
console.log(Array.isArray(arr)); // true`
          },
          {
            title: 'Functions and Arrow Functions',
            content: `Functions are reusable blocks of code. Arrow functions provide a concise syntax and lexically bind 'this', making them ideal for callbacks.`,
            codeExample: `// Function declaration
function greet(name) {
    return \`Hello, \${name}!\`;
}

// Arrow function
const add = (a, b) => a + b;

// Arrow function with body
const calculate = (x, y) => {
    const result = x * y;
    return result;
};

// Array methods with arrows
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);`
          },
          {
            title: 'Async/Await and Promises',
            content: `Asynchronous JavaScript handles operations that take time, like API calls. Promises represent future values, and async/await provides cleaner syntax.`,
            codeExample: `// Promise
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

// Async/Await
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

// Multiple promises
const results = await Promise.all([
    fetch('/api/users'),
    fetch('/api/posts')
]);`
          },
          {
            title: 'DOM Manipulation',
            content: `The Document Object Model (DOM) represents HTML as a tree of objects. JavaScript can query, modify, and create DOM elements dynamically.`,
            codeExample: `// Selecting elements
const header = document.getElementById('header');
const items = document.querySelectorAll('.item');

// Creating elements
const div = document.createElement('div');
div.className = 'box';
div.textContent = 'New content';
document.body.appendChild(div);

// Event listeners
const button = document.querySelector('button');
button.addEventListener('click', (e) => {
    console.log('Button clicked!');
    e.target.style.background = 'blue';
});

// Modifying styles
header.style.color = 'red';
header.classList.add('active');`
          }
        ]
      }
    ]
  },
  backend: {
    id: 'backend',
    title: 'Backend Development',
    icon: Database,
    color: '#27AE60',
    description: 'Server-side programming and databases',
    units: [
      {
        id: 1,
        title: 'Node.js Fundamentals',
        icon: Cpu,
        subsections: [
          {
            title: 'Introduction to Node.js',
            content: `Node.js is a JavaScript runtime built on Chrome's V8 engine. It enables server-side JavaScript execution with an event-driven, non-blocking I/O model.

Node.js is perfect for building scalable network applications, APIs, and real-time services. It uses npm (Node Package Manager) for managing dependencies.`,
            codeExample: `// Creating a simple server
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello from Node.js!</h1>');
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});

// File operations
const fs = require('fs');
fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});`
          },
          {
            title: 'Express.js Framework',
            content: `Express is a minimal and flexible Node.js web framework that provides robust features for web and mobile applications.

It simplifies routing, middleware integration, and request/response handling, making it the most popular Node.js framework.`,
            codeExample: `const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to Express!');
});

app.get('/api/users', (req, res) => {
    res.json([
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' }
    ]);
});

app.post('/api/users', (req, res) => {
    const user = req.body;
    res.status(201).json(user);
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});`
          },
          {
            title: 'RESTful API Design',
            content: `REST (Representational State Transfer) is an architectural style for designing networked applications. RESTful APIs use HTTP methods for CRUD operations.

Key principles: stateless communication, resource-based URLs, standard HTTP methods (GET, POST, PUT, DELETE), and proper status codes.`,
            codeExample: `// RESTful API structure
app.get('/api/products', getAllProducts);
app.get('/api/products/:id', getProductById);
app.post('/api/products', createProduct);
app.put('/api/products/:id', updateProduct);
app.delete('/api/products/:id', deleteProduct);

// Example controller
async function getAllProducts(req, res) {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Middleware for validation
const validateProduct = (req, res, next) => {
    const { name, price } = req.body;
    if (!name || !price) {
        return res.status(400).json({ error: 'Missing fields' });
    }
    next();
};`
          }
        ]
      },
      {
        id: 2,
        title: 'Databases',
        icon: Database,
        subsections: [
          {
            title: 'SQL Databases',
            content: `SQL (Structured Query Language) databases use tables with predefined schemas. Popular options include PostgreSQL, MySQL, and SQLite.

Relational databases excel at complex queries, transactions, and maintaining data integrity through relationships and constraints.`,
            codeExample: `-- Creating a table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Inserting data
INSERT INTO users (username, email)
VALUES ('john_doe', 'john@example.com');

-- Querying data
SELECT * FROM users WHERE username = 'john_doe';

-- Joins
SELECT orders.id, users.username, orders.total
FROM orders
JOIN users ON orders.user_id = users.id
WHERE users.id = 1;

-- Updating data
UPDATE users SET email = 'newemail@example.com'
WHERE id = 1;`
          },
          {
            title: 'MongoDB (NoSQL)',
            content: `MongoDB is a document-oriented NoSQL database that stores data in flexible JSON-like documents. It's ideal for applications with evolving schemas.

MongoDB scales horizontally, handles large volumes of data, and provides powerful querying capabilities for document-based data.`,
            codeExample: `// Connecting to MongoDB
const { MongoClient } = require('mongodb');
const client = new MongoClient('mongodb://localhost:27017');

await client.connect();
const db = client.db('myapp');
const users = db.collection('users');

// Insert document
await users.insertOne({
    username: 'john_doe',
    email: 'john@example.com',
    profile: {
        age: 30,
        interests: ['coding', 'music']
    }
});

// Find documents
const user = await users.findOne({ username: 'john_doe' });
const allUsers = await users.find({}).toArray();

// Update document
await users.updateOne(
    { username: 'john_doe' },
    { $set: { 'profile.age': 31 } }
);`
          }
        ]
      },
      {
        id: 3,
        title: 'Authentication & Security',
        icon: Globe,
        subsections: [
          {
            title: 'JWT Authentication',
            content: `JSON Web Tokens (JWT) are a secure way to transmit information between parties. They're commonly used for authentication in modern web applications.

JWTs consist of three parts: header, payload, and signature. They're stateless, making them ideal for distributed systems.`,
            codeExample: `const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Register user
app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    
    await User.create({ username, password: hashedPassword });
    res.status(201).json({ message: 'User created' });
});

// Login
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    
    if (!user || !await bcrypt.compare(password, user.password)) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
    res.json({ token });
});

// Protected route middleware
const auth = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'No token' });
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
};`
          }
        ]
      }
    ]
  },
  react: {
    id: 'react',
    title: 'React Development',
    icon: BookOpen,
    color: '#61DAFB',
    description: 'Modern React and component architecture',
    units: [
      {
        id: 1,
        title: 'React Fundamentals',
        icon: Code,
        subsections: [
          {
            title: 'Components and JSX',
            content: `React uses a declarative approach to build user interfaces through reusable components. JSX is a syntax extension that looks like HTML but compiles to JavaScript.

Components can be functional or class-based. Modern React favors functional components with hooks for managing state and side effects.`,
            codeExample: `// Functional Component
function Welcome({ name }) {
    return <h1>Hello, {name}!</h1>;
}

// Component with children
function Card({ title, children }) {
    return (
        <div className="card">
            <h2>{title}</h2>
            <div className="content">
                {children}
            </div>
        </div>
    );
}

// Using components
function App() {
    return (
        <div>
            <Welcome name="Alice" />
            <Card title="My Card">
                <p>This is the card content</p>
            </Card>
        </div>
    );
}`
          },
          {
            title: 'State and Props',
            content: `Props pass data from parent to child components, while state manages component-specific data that changes over time.

State updates trigger re-renders. Props are immutable in the receiving component. Understanding data flow is crucial for React architecture.`,
            codeExample: `import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </div>
    );
}

// Lifting state up
function Parent() {
    const [data, setData] = useState('');
    
    return (
        <div>
            <Child1 value={data} onChange={setData} />
            <Child2 value={data} />
        </div>
    );
}

function Child1({ value, onChange }) {
    return (
        <input 
            value={value} 
            onChange={(e) => onChange(e.target.value)} 
        />
    );
}`
          },
          {
            title: 'useEffect and Side Effects',
            content: `useEffect handles side effects like data fetching, subscriptions, and DOM manipulation. It runs after render and can clean up after itself.

The dependency array controls when effects run. Empty array means run once, no array means run every render, array with values means run when those values change.`,
            codeExample: `import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        let cancelled = false;
        
        async function fetchUser() {
            try {
                const res = await fetch(\`/api/users/\${userId}\`);
                const data = await res.json();
                if (!cancelled) {
                    setUser(data);
                    setLoading(false);
                }
            } catch (error) {
                console.error(error);
            }
        }
        
        fetchUser();
        
        return () => {
            cancelled = true;
        };
    }, [userId]);
    
    if (loading) return <p>Loading...</p>;
    return <div>{user.name}</div>;
}`
          },
          {
            title: 'Custom Hooks',
            content: `Custom hooks let you extract component logic into reusable functions. They follow the "use" naming convention and can use other hooks.

Custom hooks promote code reuse, separate concerns, and make components cleaner by abstracting complex logic.`,
            codeExample: `import { useState, useEffect } from 'react';

// Custom hook for fetching data
function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch(url);
                const json = await res.json();
                setData(json);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [url]);
    
    return { data, loading, error };
}

// Using the custom hook
function UserList() {
    const { data, loading, error } = useFetch('/api/users');
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    
    return (
        <ul>
            {data.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
}`
          }
        ]
      },
      {
        id: 2,
        title: 'Advanced Patterns',
        icon: Layout,
        subsections: [
          {
            title: 'Context API',
            content: `Context provides a way to pass data through the component tree without manually passing props at every level. It's ideal for global state like themes, auth, and preferences.

Context consists of Provider and Consumer components, or the useContext hook for functional components.`,
            codeExample: `import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');
    
    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };
    
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

function ThemedButton() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    
    return (
        <button 
            className={theme}
            onClick={toggleTheme}
        >
            Toggle Theme
        </button>
    );
}

// App setup
function App() {
    return (
        <ThemeProvider>
            <ThemedButton />
        </ThemeProvider>
    );
}`
          },
          {
            title: 'React Router',
            content: `React Router enables navigation in single-page applications. It keeps your UI in sync with the URL and provides declarative routing.

Common components include BrowserRouter, Routes, Route, Link, and useNavigate for programmatic navigation.`,
            codeExample: `import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/users">Users</Link>
            </nav>
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/users" element={<Users />} />
                <Route path="/users/:id" element={<UserDetail />} />
            </Routes>
        </BrowserRouter>
    );
}

function UserDetail() {
    const { id } = useParams();
    return <div>User ID: {id}</div>;
}`
          }
        ]
      }
    ]
  },
  mobile: {
    id: 'mobile',
    title: 'Mobile Development',
    icon: Smartphone,
    color: '#9B59B6',
    description: 'React Native and mobile app development',
    units: [
      {
        id: 1,
        title: 'React Native Basics',
        icon: Smartphone,
        subsections: [
          {
            title: 'Introduction to React Native',
            content: `React Native lets you build mobile apps using React. It renders to native components rather than web views, providing true native performance.

React Native uses the same declarative UI paradigm as React, but with mobile-specific components like View, Text, and TouchableOpacity.`,
            codeExample: `import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

function App() {
    const [count, setCount] = useState(0);
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Counter App</Text>
            <Text style={styles.count}>{count}</Text>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => setCount(count + 1)}
            >
                <Text style={styles.buttonText}>Increment</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20
    },
    button: {
        backgroundColor: '#4A90E2',
        padding: 15,
        borderRadius: 8
    }
});`
          },
          {
            title: 'Navigation in React Native',
            content: `React Navigation is the standard library for routing in React Native. It provides stack, tab, and drawer navigation patterns.

Navigation state is automatically managed, and you can customize transitions, headers, and navigation options.`,
            codeExample: `import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Home" 
                    component={HomeScreen}
                    options={{ title: 'My App' }}
                />
                <Stack.Screen 
                    name="Details" 
                    component={DetailsScreen} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

function HomeScreen({ navigation }) {
    return (
        <View>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}`
          }
        ]
      }
    ]
  }
};

function App() {
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [expandedSubsection, setExpandedSubsection] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? '#121212' : '#F5F5F5';
  }, [darkMode]);

  const handleBookSelect = (bookId) => {
    setSelectedBook(bookId);
    setSelectedUnit(null);
    setExpandedSubsection(null);
  };

  const handleUnitSelect = (unit) => {
    setSelectedUnit(unit);
    setExpandedSubsection(null);
  };

  const handleBack = () => {
    if (expandedSubsection !== null) {
      setExpandedSubsection(null);
    } else if (selectedUnit) {
      setSelectedUnit(null);
    } else if (selectedBook) {
      setSelectedBook(null);
    }
  };

  const filteredBooks = Object.values(booksData).filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentBook = selectedBook ? booksData[selectedBook] : null;
  const currentUnit = selectedUnit;

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <header className="header">
        <div className="header-left">
          <BookOpen size={28} />
          <h1>Web Dev Academy</h1>
        </div>
        <div className="header-right">
          <button 
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </header>

      <div className="main-container">
        {sidebarOpen && (
          <aside className="sidebar">
            <div className="search-container">
              <Search size={18} />
              <input
                type="text"
                placeholder="Search books..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>

            {!selectedBook ? (
              <div className="books-list">
                <h2>Select a Book</h2>
                {filteredBooks.map(book => {
                  const IconComponent = book.icon;
                  return (
                    <div
                      key={book.id}
                      className="book-card"
                      onClick={() => handleBookSelect(book.id)}
                      style={{ borderLeftColor: book.color }}
                    >
                      <div className="book-icon" style={{ color: book.color }}>
                        <IconComponent size={24} />
                      </div>
                      <div className="book-info">
                        <h3>{book.title}</h3>
                        <p>{book.description}</p>
                      </div>
                      <ChevronRight size={20} />
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="units-list">
                <button className="back-button" onClick={handleBack}>
                  ← Back to Books
                </button>
                <h2 style={{ color: currentBook.color }}>{currentBook.title}</h2>
                {currentBook.units.map(unit => {
                  const IconComponent = unit.icon;
                  return (
                    <div
                      key={unit.id}
                      className={`unit-item ${selectedUnit?.id === unit.id ? 'active' : ''}`}
                      onClick={() => handleUnitSelect(unit)}
                    >
                      <IconComponent size={20} />
                      <span>{unit.title}</span>
                      <ChevronRight size={16} />
                    </div>
                  );
                })}
              </div>
            )}
          </aside>
        )}

        <main className="content">
          {!selectedBook ? (
            <div className="welcome-screen">
              <div className="welcome-content">
                <BookOpen size={64} color="#4A90E2" />
                <h1>Welcome to Web Dev Academy</h1>
                <p>Your comprehensive guide to modern web development</p>
                <div className="features">
                  <div className="feature">
                    <Code size={32} />
                    <h3>Interactive Learning</h3>
                    <p>Learn by doing with real code examples</p>
                  </div>
                  <div className="feature">
                    <Layout size={32} />
                    <h3>Structured Content</h3>
                    <p>Organized curriculum from basics to advanced</p>
                  </div>
                  <div className="feature">
                    <Globe size={32} />
                    <h3>Industry Standards</h3>
                    <p>Best practices and modern techniques</p>
                  </div>
                </div>
              </div>
            </div>
          ) : !selectedUnit ? (
            <div className="unit-selection">
              <h1>Select a Unit to Begin</h1>
              <p>Choose from the sidebar to start learning</p>
            </div>
          ) : (
            <div className="unit-content">
              <div className="unit-header">
                <button className="back-button-content" onClick={handleBack}>
                  ← Back
                </button>
                <h1>{selectedUnit.title}</h1>
              </div>

              <div className="subsections">
                {selectedUnit.subsections.map((subsection, index) => (
                  <div key={index} className="subsection">
                    <div
                      className="subsection-header"
                      onClick={() => setExpandedSubsection(
                        expandedSubsection === index ? null : index
                      )}
                    >
                      <h2>{subsection.title}</h2>
                      {expandedSubsection === index ? (
                        <ChevronDown size={24} />
                      ) : (
                        <ChevronRight size={24} />
                      )}
                    </div>

                    {expandedSubsection === index && (
                      <div className="subsection-content">
                        <div className="text-content">
                          {subsection.content.split('\n\n').map((para, i) => (
                            <p key={i}>{para}</p>
                          ))}
                        </div>

                        {subsection.codeExample && (
                          <div className="code-block">
                            <div className="code-header">
                              <Code size={16} />
                              <span>Code Example</span>
                            </div>
                            <pre>
                              <code>{subsection.codeExample}</code>
                            </pre>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .app {
          min-height: 100vh;
          font-family: 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif;
          transition: all 0.3s ease;
        }

        .app.light {
          --bg-primary: #F5F5F5;
          --bg-secondary: #FFFFFF;
          --bg-tertiary: #FAFAFA;
          --text-primary: #2D2D2D;
          --text-secondary: #666666;
          --border: #E0E0E0;
          --shadow: rgba(0, 0, 0, 0.1);
          --code-bg: #F8F9FA;
        }

        .app.dark {
          --bg-primary: #121212;
          --bg-secondary: #1E1E1E;
          --bg-tertiary: #2A2A2A;
          --text-primary: #E0E0E0;
          --text-secondary: #B0B0B0;
          --border: #333333;
          --shadow: rgba(0, 0, 0, 0.3);
          --code-bg: #1A1A1A;
        }

        .header {
          background: var(--bg-secondary);
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 2px solid var(--border);
          box-shadow: 0 2px 8px var(--shadow);
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 1rem;
          color: #4A90E2;
        }

        .header-left h1 {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .header-right {
          display: flex;
          gap: 1rem;
        }

        .theme-toggle {
          background: var(--bg-tertiary);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 0.5rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          color: var(--text-primary);
        }

        .theme-toggle:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 12px var(--shadow);
        }

        .main-container {
          display: flex;
          height: calc(100vh - 70px);
        }

        .sidebar {
          width: 320px;
          background: var(--bg-secondary);
          border-right: 1px solid var(--border);
          overflow-y: auto;
          padding: 1.5rem;
        }

        .search-container {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--bg-tertiary);
          padding: 0.75rem;
          border-radius: 8px;
          margin-bottom: 1.5rem;
          border: 1px solid var(--border);
        }

        .search-input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          font-size: 0.95rem;
          color: var(--text-primary);
        }

        .search-input::placeholder {
          color: var(--text-secondary);
        }

        .books-list h2,
        .units-list h2 {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.25rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .book-card {
          background: var(--bg-tertiary);
          padding: 1.25rem;
          border-radius: 8px;
          margin-bottom: 1rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 1rem;
          border-left: 4px solid;
          transition: all 0.3s ease;
          box-shadow: 0 2px 6px var(--shadow);
        }

        .book-card:hover {
          transform: translateX(5px);
          box-shadow: 0 4px 12px var(--shadow);
        }

        .book-icon {
          flex-shrink: 0;
        }

        .book-info {
          flex: 1;
        }

        .book-info h3 {
          font-size: 1.1rem;
          margin-bottom: 0.25rem;
          color: var(--text-primary);
          font-weight: 600;
        }

        .book-info p {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .back-button {
          background: var(--bg-tertiary);
          border: 1px solid var(--border);
          padding: 0.5rem 1rem;
          border-radius: 6px;
          cursor: pointer;
          margin-bottom: 1rem;
          font-size: 0.9rem;
          color: var(--text-primary);
          transition: all 0.2s ease;
          width: 100%;
        }

        .back-button:hover {
          background: var(--bg-primary);
        }

        .unit-item {
          background: var(--bg-tertiary);
          padding: 1rem;
          border-radius: 6px;
          margin-bottom: 0.75rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          transition: all 0.2s ease;
          color: var(--text-primary);
        }

        .unit-item:hover {
          background: var(--bg-primary);
          transform: translateX(3px);
        }

        .unit-item.active {
          background: #4A90E2;
          color: white;
        }

        .content {
          flex: 1;
          overflow-y: auto;
          background: var(--bg-primary);
        }

        .welcome-screen {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100%;
          padding: 2rem;
        }

        .welcome-content {
          text-align: center;
          max-width: 800px;
        }

        .welcome-content h1 {
          font-family: 'Montserrat', sans-serif;
          font-size: 2.5rem;
          margin: 1.5rem 0 1rem;
          color: var(--text-primary);
        }

        .welcome-content > p {
          font-size: 1.25rem;
          color: var(--text-secondary);
          margin-bottom: 3rem;
        }

        .features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .feature {
          background: var(--bg-secondary);
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 12px var(--shadow);
          transition: transform 0.3s ease;
        }

        .feature:hover {
          transform: translateY(-5px);
        }

        .feature h3 {
          margin: 1rem 0 0.5rem;
          color: var(--text-primary);
          font-family: 'Montserrat', sans-serif;
        }

        .feature p {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .unit-selection {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100%;
          padding: 2rem;
          color: var(--text-secondary);
        }

        .unit-content {
          padding: 2rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .unit-header {
          margin-bottom: 2rem;
        }

        .back-button-content {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          padding: 0.5rem 1rem;
          border-radius: 6px;
          cursor: pointer;
          margin-bottom: 1rem;
          font-size: 0.9rem;
          color: var(--text-primary);
          transition: all 0.2s ease;
        }

        .back-button-content:hover {
          background: var(--bg-tertiary);
        }

        .unit-header h1 {
          font-family: 'Montserrat', sans-serif;
          font-size: 2rem;
          color: var(--text-primary);
        }

        .subsection {
          background: var(--bg-secondary);
          border-radius: 12px;
          margin-bottom: 1.5rem;
          overflow: hidden;
          box-shadow: 0 2px 8px var(--shadow);
          transition: all 0.3s ease;
        }

        .subsection:hover {
          box-shadow: 0 4px 16px var(--shadow);
        }

        .subsection-header {
          padding: 1.5rem;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: var(--bg-tertiary);
          transition: background 0.2s ease;
        }

        .subsection-header:hover {
          background: var(--bg-primary);
        }

        .subsection-header h2 {
          font-size: 1.35rem;
          color: var(--text-primary);
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
        }

        .subsection-content {
          padding: 1.5rem;
          animation: slideDown 0.3s ease;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .text-content {
          margin-bottom: 1.5rem;
        }

        .text-content p {
          font-size: 1rem;
          line-height: 1.8;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .code-block {
          background: var(--code-bg);
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid var(--border);
        }

        .code-header {
          background: var(--bg-tertiary);
          padding: 0.75rem 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          border-bottom: 1px solid var(--border);
          color: var(--text-secondary);
          font-size: 0.85rem;
          font-family: 'Fira Code', monospace;
        }

        .code-block pre {
          padding: 1.5rem;
          overflow-x: auto;
          margin: 0;
        }

        .code-block code {
          font-family: 'Fira Code', 'Source Code Pro', monospace;
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--text-primary);
        }

        @media (max-width: 768px) {
          .sidebar {
            position: fixed;
            left: 0;
            top: 70px;
            height: calc(100vh - 70px);
            z-index: 50;
            transform: translateX(-100%);
            transition: transform 0.3s ease;
          }

          .sidebar.open {
            transform: translateX(0);
          }

          .header-left h1 {
            font-size: 1.2rem;
          }

          .welcome-content h1 {
            font-size: 1.8rem;
          }

          .features {
            grid-template-columns: 1fr;
          }

          .unit-content {
            padding: 1rem;
          }
        }
      `}</style>
    </div>
  );
}

export default App;