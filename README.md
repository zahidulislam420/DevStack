Project Name:
Dev Stack

Description:
Dev Stack is an interactive web platform designed to help developers explore, compare, and assemble their ideal development stack. Users can browse through frontend frameworks, backend technologies, databases, and DevOps tools to easily configure and customize the tech stack for their next software project.

Technologies Used:
HTML5
CSS3
JavaScript
TypeScript

Key Features:
1.Interactive Stack Builder: Allows users to select technologies across various categories (Frontend, Backend, Database, Tools) and build a customized development stack 2.dynamically displayed in the sidebar.
Side-by-Side Technology Exploration: Provides detailed cards for each technology featuring proficiency levels, developer ratings, categories, and concise descriptions for easy comparison.
3.Dynamic Stack Management: Enables seamless management of the selected technologies with real-time add, individual remove, and bulk clear ("Remove All") functionality.

1. What is JSX, and why is it used in React?
JSX is a syntax that lets you write HTML inside JavaScript. It makes React code easier to read and helps describe UI components clearly.

2. What is the difference between props and state?
Props: Data passed from parent to child, read-only.
State: Internal data of a component that can change over time.

3. What does the useState hook do, and where did you use it in this project?
useState creates reactive variables inside a component. I used it to store and update country data after fetching.

4. What does the useEffect hook do, and why did you need it to load the JSON data?
useEffect runs side effects in React. I used it to fetch JSON data from the API when the component first loads.

5. Why does every item in a .map() list need a unique key prop?
Keys help React identify which items changed, added, or removed. Without keys, React re-renders inefficiently.
