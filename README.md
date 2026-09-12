Project Name:
Dev Stack

Description:
Dev Stack is an interactive web platform designed to help developers explore, compare, and assemble their ideal development stack. Users can browse through frontend frameworks, backend technologies, databases, and DevOps tools to easily configure and customize the tech stack for their next software project.

Technologies Used:

1.HTML5
2.CSS3
3.JavaScript
4.TypeScript
5.React-Toastify(npm package)
6.JSON(technology data)
7.vite(build)

Key Features:
1.Interactive Stack Builder: Allows users to select technologies across various categories (Frontend, Backend, Database, Tools) and build a customized development stack 2.dynamically displayed in the sidebar.
Side-by-Side Technology Exploration: Provides detailed cards for each technology featuring proficiency levels, developer ratings, categories, and concise descriptions for easy comparison.
3.Dynamic Stack Management: Enables seamless management of the selected technologies with real-time add, individual remove, and bulk clear ("Remove All") functionality.

Short question & ans:
1. What is JSX, and why is it used in React?
 
JSX is a syntax that lets you write HTML inside JavaScript. It makes React code easier to read and helps describe UI components clearly.

3. What is the difference between props and state?

Props: Data passed from parent to child, read-only.
State: Internal data of a component that can change over time.

5. What does the useState hook do, and where did you use it in this project?

useState creates reactive variables inside a component. I used it to store and update country data after fetching.

7. What does the useEffect hook do, and why did you need it to load the JSON data?
 
useEffect runs side effects in React. I used it to fetch JSON data from the API when the component first loads.

9. Why does every item in a .map() list need a unique key prop?

Keys help React identify which items changed, added, or removed. Without keys, React re-renders inefficiently.

11. What is conditional rendering? Show one place you used it.
 
Conditional rendering means showing UI only when a condition is true. Example: showing “Loading…” when data isn’t ready.

13. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Parent → Child: Pass data via props.

Child → Parent: Call a function passed down as a prop to send data back.
