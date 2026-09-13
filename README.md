# 🚀 Dev Stack

**Dev Stack** is an interactive web platform that helps developers explore, compare, and build their ideal technology stack for software projects.

Users can browse technologies across **Frontend, Backend, Database, and Tools** categories, compare their features, and create a customized development stack based on their project requirements.

##  Technologies Used:

* **HTML5**
* **CSS3**
* **JavaScript (ES6+)**
* **TypeScript**
* **React**
* **React-Toastify**
* **JSON**
* **Vite**

##  Key Features:

### 1. Interactive Stack Builder

Users can select technologies from different categories, including **Frontend, Backend, Database, and Tools**, to create a personalized development stack.

### 2. Side-by-Side Technology Exploration

Each technology is presented through an informative card containing details such as **proficiency level, developer rating, category, and a brief description**, making it easier to explore and compare technologies.

### 3. Dynamic Stack Management:

Selected technologies are displayed dynamically in the sidebar. Users can:

* Add technologies to their stack
* Remove individual technologies
* Clear the entire stack using the **Remove All** option
* Manage their selections in real time

##  Short Questions & Answers:

### 1. What is JSX, and why is it used in React?

**JSX (JavaScript XML)** is a syntax extension for JavaScript that allows developers to write HTML-like markup directly within JavaScript. It makes React components more readable and provides a clear way to describe the structure and UI of an application.

### 2. What is the difference between Props and State?

**Props** are read-only data passed from a parent component to a child component.

**State** is internal component data that can be updated over time and causes the component to re-render when its value changes.

### 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook allows functional components to manage and update local state.

In this project, I used `useState` to manage the technology data and the user's selected technologies, allowing the UI to update dynamically whenever the stack changes.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The `useEffect` hook is used to handle side effects in React, such as data fetching, subscriptions, or other operations that occur outside the normal rendering process.

In this project, I used `useEffect` to load the technology data from the JSON source when the component initially renders.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` prop to uniquely identify elements in a list. It helps React efficiently determine which items have been **added, removed, or updated**, resulting in more efficient UI updates.

### 6. What is Conditional Rendering? Show one place you used it.

**Conditional rendering** means displaying different UI elements based on a specific condition.

For example, I used conditional rendering to display a **"Loading..."** message while the technology data was being loaded and to display the actual content once the data became available.

```jsx
{loading ? <p>Loading...</p> : <TechnologyList />}
```

### 7. How do you pass data from a parent component to a child component, and how does a child send data back to the parent?

**Parent → Child:**
Data is passed from a parent component to a child component through **props**.

**Child → Parent:**
The parent passes a **callback function** as a prop to the child. The child can then call that function and pass the required data back to the parent.

```jsx
// Parent
<Child onSelect={handleSelect} />

// Child
<button onClick={() => onSelect(technology)}>
  Add
</button>
```

##  Project Purpose:

The main goal of **Dev Stack** is to provide developers with a simple and interactive way to explore different technologies and assemble a suitable technology stack for their next project.
