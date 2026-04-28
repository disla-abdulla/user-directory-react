# Day 1 Learning

- React : it's a JS library that helps you to build reusable UI components and single page applications (SPA).
- # JSX : it is a syntax for writing HTML inside JS
- it describes UI
- This is stricter than HTML as it follows javascript rules :
- like single parent
- closing tag is important
- use camelCase for attributes: className instead of class
- Embedding JS inside HTML is done using {}. These help to "escape back" into JS within HTML tag
- these {} allows you to write variables, expressions, math , function etc inside the HTML tag.
- Conditional rendering in React can be done using if else outside JSX . Inside JSX simply ternary operator ?: or if you don't need 'else' just use &&
- Rendering list is done by map () function .In Some cases 'for' loops are used.
- # Components
- these are reusable pieces of UI.
- it makes the code reusable, logical
- mainly we focus on functional components
- they are just JS functions which return JSX which react renders it to the browser
- components should also be enclosed within single parent at top level.
- need to export and import these components.
- # Build :
- Built React application from scratch using vite (a build tool)
- Created 3 components HEADER, PROFILE AND FOOTER.
- used {} for writing variables and i have embedded js into the html syntax.

# Day 2 Learning

- # Props: Data/information passed from parent component to its child components
- most importantly they are immutable ie unchangeable - parents hold control over props and read only for child
- used for communication between parents and child components.
- props help in making components reusable and dynamic.
- props flow is unidirectional ie from parent to child
- # passing props
- props are passed inside JSX using {}
- they are like arguments passed to a js function
- # recieving props
- they can be recieved in 2 ways :
- # props destructuring: writing down all the props passed from the parent inside the child function paranthesis inside {} braces like parameters given inside function declaration
- this is the best practice
- # passing just 'props' inside the child component parenthesis.
- later declaring the props like const name = props.name inside the component
- # passing props inside nested components : we use
- spread operator {...props} to the child components
- this is not a recommended practice - because it make code unclear as we don't know what all props are being passed
- it can be used when there any many props to be passed
- # Build:
- passing the props from parent to children
- passed props like name , description, message from app.tsx to profile .
- created a new component named avatar for displaying profile image
- also passed the image url as props to avatar
- inside the img tag we give alt attribute for:
- accessibilty & SEO

# Day 3 of learning: "APP STATIC TO INTERACTIVE"

- In your application there might come cases like :
- handling events like button click
- form input updation
- show or hide UI
- all these changes needed to rerender the component to display the updated change.
- But if we use a local variable two things cannot be done: they are
- local variable don't persist between renders, ie during the rendering of react it won't remember the local variable and renders from scratch
- changes to the local variables won't trigger react to render (re-render)
- # solution to the above problem
- # STATE VARIABLE - a component specific memory
- state variable retains the data between renders
- setter function trigger react to render with new data (re-render)
- useState Hook is used for declaring state variable.
- useState function takes a single argument (initial value) & returns an array with exactly 2 items :
- state variable with initial value or current value
- state setter function for updating the state variable and rerendering the component
- we take the values returned by useState hook inside [,] syntax - called array destructuring
- State is isolated and private to a component ie,
- if you open a component at two places , each copy will have it's own state.
- A component can have multiple state variables if each of them are unrelated.
- # Important points:
- state updation will not immediately change value , instead it schedules a re-render
- state updates asynchronously
- always use setter function to update state variable
- never modify state directly
- Derived state should not be stored in state
- Compute it directly from existing state
- # Build
- Built a counter component with 3 buttons (Learnt Event Handling):
- Decrement
- Increment
- Reset
- Built a feature inside Profile component (Show/Hide message)
- use conditional rendering

# Day 4 Learning

- # Declarative v/s Imperative UI
- # Imperative UI
- here we tell the browser dom how to do everything step by step
- everything is done manually
- results in many bugs
- code becomes complex
- gives command to each element and tells the browser how to update UI
- similar to you cooking everything step by step by yourself
- # Declarative UI
- here we tells the react : "what UI should look like"
- React controls:
- UI change
- Re-rendering
- DOM change
- lesser manual works
- cleaner code
- less bugs
- similar to ordering the food and kitchen prepares it for you
- # Interview
- # 1. why is react declarative
- because we describe how UI should look based on state and react handles state updation, re-rendering and DOM updation.
- # 2. Controlled components consider React as SINGLE SOURCE OF TRUTH
- there is only one place where the data lives and is controlled
- state is the single source of truth
- when a user types inside input field:
- input field act as an employee and state/react act as boss
- onChange triggers the state change
- react re-render with new state
- UI gets updated.
- Flow:
- User types → onChange fires
- setName() updates state
- React re-renders
- Input shows updated name
- # input handling
- input is handles by the state
- value ={name}
- onChange - updates the state when input changes
- # Event Object
- e.target.value
- this gives the current input
- # CONTROLLED COMPONENT v/s UNCONTROLLED COMPONENT
- Controlled components
- here input is controlled by React
- React controls this by state and input fields don't manage by themselves.
- Uncontrolled Component
- here input is controlled by DOM

- # BUILD
- Added input fields for :
- entering new profile name
- description
- message
- Added submit button for form and onSubmit an alert pops up welcoming the new profile user.
- Added Reset/Clear button for clearing all the input fields: name, description & message.

# Day 5 Learning

- # COMPONENT LIFECYCLE
- a component lifecycle can be mainly classified into 3:
- 1. Mounting (birth): a component appears on the screen for first time
- 2. Updating (change): a component gets re-rendered when the state/prop changes.
- 3. Unmounting (death): a component gets removed from the screen.
- # useEffect : react hook which is used for synchronising a component with external world.
- it is used for handling side effects.
- side effects include :
- 1. API call
- 2. Timers
- 3. updating DOM manually
- 4. removing event listeners.
- syntax: useEffect(setup,dependencies?)
- setup means a function which contains effect's logic . it may optionally return clean up functions.
- dependencies array contols when the useEffect executes.
- # useEffect lifecycle
- # 1. Runs ONLY on mount
- do not run again
- useEffect(()=>{
  console.log("runs on mount");
  },[]);
- use cases :
- 1. API calls
- 2. Initial setup
- # 2. Runs on state/ prop change
- runs on mount
- runs on a specific state/ prop updation
- useEffect(()=>{
  console.log("runs on mount and during the state/prop change")
  },[state/prop])
- # 3. Run on every render
- run on mount
- run on every update
- useEffect(()=>{

});

- This is not advisable.
- # Cleanup(Unmount phase)
- useEffect(()=>{
  console.log("start")
  return ()=>{
  console.log("cleanup)
  }
  },[]);
- start - runs on mount
- cleanup - runs on unmount
- use cases:
- 1. stop timers
- 2. unsubscribe event listeners.
- # API call
- done using fetch()
- fetch("API URL").then(res=>res.json()).then(data=>setAPIData(data))
- # Build
- component named UserList was created.
- after the UI displays i wanted to fetch the users API , so i called useEffect with empty dependency and wrote the fetch setup logic
- displayed the userList by storing the fetched data to the state
- mapped the state data using map function and also given key attribute with user id to each user element.
- # Interview:
- 1. Dependencies control when the useEffect executes.
- 2. UseEffect executes only after rendering the component, not before.
- 3. if Dependencies change: React
- a. runs cleanup(previous effect)
- b. runs new effect

# Day 6 Learning

- Build Real UI having features:
- 1. Component loads
- 2. API fetch runs (useEffect)
- 3. Users stored in state
- 4. User types in input
- 5. search state updates
- 6. Filter runs
- 7. UI updates automatically
- # learnt while building
- 1. Fetch API
- 2. Handle Input
- 3. Filter Data
- 4. Render Dynamic UI
- 5. while mapping array elements key should be provided to the element where map is used
- # Interview question
- 1. Why do we not store filteredUsers in state? eg:
- useEffect(() => {
  setLoading(true);
  // data filtering
  setFilteredUsers(
  users.filter((user) =>
  user.name.toLowerCase().includes(search?.toLowerCase())
  )
  );
  setLoading(false);
  }, [search]);
- # ans: we should not store derived data inside state . here filteredusers was derived from search and users, so it should be stored just as a local variable.
- if we do so it will results in :
- 1. No extra state
- 2. No extra re-render
- 3. Cleaner logic
- 2. Do not use loading for filtering:
- loading should be only for fetching API

# Day 7 Learning

# DEBOUNCING

- # what problem are we facing now?
- On user search we are doing filter logic for each keystroke, but this results in many issues like:
- 1. unnecessary execution of function/ unnecessary re-renders
- 2. API overload
- 3. prevents smooth perfomance
- 4. race conditions , ie on each keystroke filtering logic is done.
- # solution : Debouncing
- # WHAT IS DEBOUNCING?
- Debouncing means delaying the execution of a function until a certain specified time since a last event.
- in other words it means function gets executed only after user stops action.
- # WHY DEBOUNCING?
- it prevents:
- 1. race conditions
- 2. API overload
- 3. Unnecessary rerenders/executions.
- ensures smooth performance & better User Experience
- # Real world use cases?
- 1. Search bar
- 2. API call on input
- 3. Auto-save forms
- 4. window resize events
- # How debouncing works?
- steps:
- 1. User performs an action (say typing)
- 2. timer starts
- 3. if user acts again -> timer resets
- 4. only when user stops -> function executes.
- # Difference between DEBOUNCING & THROTTLING?
- Debouncing means delaying an execution until user stops an action
- throttling means limiting the execution at fixed intervals.
- # useEffect lifecycle in Debouncing ?
- 1. user types -> state updates
- 2. useEffect runs
- 3. Timer starts
- 4. if user types again:
- 4.a cleanup function will get executed -> clear timers
- 4.b start new timer
- 5. only last timer executes.
- # setTimeOut
- delays the execution
- run the function after specified time
- # clearTimeOut
- cancels previous timer
- prevents multiple executions
- # cleanup function
- return ()=> clearTimeOut(timer)
- runs :
- before next effect
- on component unmount

# Day 8 Learning

# Routing : it allows a react app to navigate between different views/pages without reloading the page.

- # Why Routing?
- Converts single application to multiple page experience
- for navigating between pages.
- improves user experience
- Steps :
- 1. install react-router-dom
- 2. Use <BrowserRouter><App/></BrowserRouter>: this wraps app and enables routing
- 3. Define Routes and Route: it tells you which component should load for which path : <Routes><Route path="/" element={<Home/>}/></Routes>
- 4. Import useNavigate hook from react-router-dom : this gives prgrammatic navigation inside the button click , it ised inside event handlers.
- 5. Import useParams hook from react-router-dom inside the component where you need to get the dynamic values from URL.
- 6. if needed import useLocation from react-router-dom to get the location of current page : it will be useful for dynamic content display. Used for conditional rendering.
- # build:
- Converted SPA → Multi-page app ✔️
- Implemented navigation ✔️
- Created dynamic route /user/:id ✔️
- Displayed user details based on ID ✔️
- Used useLocation to control UI ✔️
- # Interview:
- 1. What is SPA behaviour?
- A Single Page Application loads a single HTML page and dynamically updates UI without reloading the entire page. Navigation is handled on client side using tools like react-router , which improves the perfomance and user experience.
- 2. Why SPA is powerful?
- Better perfomance
- Smooth User Experience
- Faster Navigation
- # Limitation
- Initial load will be heavier
- SEO needs extra handling

# Day 9 Learning

- # API : Application Programming Interface allows your frontend to communicate with server ie, fetch data from / send data to server
- # Why API?
- get real time data
- to replace mock data
- build dynamic applications
- # where do you call an API?
- inside useEffect
- # why useEffect?
- It renders the component on mount and then fetches the api
- it prevents infinite renders
- ideal for side effects like API calls
- # states used in API call?
- a. Data state for success UI
- b. Loading state for Loading UI
- c. Error state for error handling
- # handling missing data like images
- we could use Pravatar eg : https://i.pravatar.cc/150?img=${id}
- # Interview
- 1. How did you optimize API calls?
- Initially I fetched all users and filtered locally, but then optimized it by fetching a single user using the dynamic ID in the API endpoint to reduce unnecessary data transfer.
- 2. fetch?
- fetch is a built in browser API for making HTTP requests to a server and retrieving data asynchronously.
- fetch returns a promise
- that is why we use :
- .then()
- or async/await

# Day 10 Learning

- # Custom Hooks : they are reusable JS functions in React that are used to extract and share stateful logic between components.
- They help you avoid repeating logic across components.
- # why Custom hooks?
- Here we were using logics like :
- 1. Debouncing
- 2. API fetch
- 3. Side Effects(useEffect)
- 4. State handling
- was written inside components, which leads to:
- 1. messy code
- 2. duplication
- 3. hard-to-maintain logic
- Custom hooks solve this by moving logic outside components.
- # advantages:
- 1. Reusable logic
- 2. Cleaner component
- 3. Better readability
- 4. Easier Testing
- 5. Less duplicate code
- # Rules of Custom hooks:
- 1. Must start with use
- 2. inside we can use built in react hooks like useState, useEffect etc
- 3. cannot return JSX , instead can return data/function/state
- 4. hooks must be imported and exported similarly like components
- # Difference between component and custom hooks?
- Component - UI Layer ie it is a JS function which returns JSX
- Custom Hooks -logic layer, it act as the reusable brain of react app where all the logics are stored and it will never return JSX , instead can return data/function ie logic
- # Build
- inside src/hooks folder we created 3 hooks:
- 1. useDebounce : used for search optimization and delay value update
- 2. useFetch: reusable api logic
- 3. usePageTitle: for dynamically updating document/browser title
- # Interview:
- 1. before implementing custom hook the debounce logic was written like this with only one dependency searchData useEffect(() => { const timer = setTimeout(() => { setDebouncedSearch(searchData); }, 500); return () => clearTimeout(timer); }, [searchData]); but inside custom hook useDebounce , the dependency array contains two elements value and delay, value means searchData . but why are we adding a new element delay as dependency in useeffect?
- ans: Because useEffect should depend on everything it uses inside.
- inside your effect you are using value and delay , so we should add it inside dependency array.
- if we don't add delay , then React will not re-run the effect when delay changes.That means your effect runs with old values even when things change.
- 2. How can you restore document title on component unmount?
- function usePageTitle(title) {
  useEffect(() => {
  const prevTitle = document.title;
  document.title = title;

      return () => {
        document.title = prevTitle; // restore on unmount
      };

  }, [title]);
  }

- This restores the old title when leaving the page — very clean UX.

# Day 11 Learning

- # Event bubbling
- # Context API
- 1. What is Context API?
- ans: Context API is a way to share state across components without prop drilling. It does not necessarily mean global, but commonly used for app-wide data.
- 2. What is props drilling?
- ans: Prop drilling is the process of passing data through multiple intermediate components that do not need the data.
- 3. What problem does it solve?
- ans: it helps to solve the passing of data through multiple intermediate components unneccessarily. It makes the messy code looks cleaner.
- 4. When would you use context?
- ans: 1. Used when data is needed globally ie multiple components or unrelated components need same data.
- ans 2. eg:
- a. Auth state
- b. Theme Toggle
- c. favorite list
- d. language
- 5. When should you not use context?
- ans: if data is local, that is data is only used by 1-2 components.
- ans : in such cases usage of context results in unneccessary re-renders of components.
- 6. Re-rendering?
- When the context value changes, all components consuming that context will re-render, even if they use only part of the data.
- eg: Add Favorites -> Navbar Updates
- -> Profile updates.
- 7. Optimization ?
- To avoid re-renders:
- a. split context
- b. use memoization
- 8. Advantages of Context?
- ans:
- a. To avoid props drilling
- b. cleaner code
- c. centralised state
- d. easy sharing
- 9. Disadvantages?
- ans:
- a. Difficult to optimize large contexts because all consumers re-render
- b. results in unnecessary re-renders
- c. not ideal for complex state
- d. harder debugging if overused.
- 10. Context vs Props?
- ans :
- # context :
- a. global data
- b. scalable
- c. auto available
- # props
- a. local data
- b. simple
- c. passed manually
- 11. Context v/s Redux?
- # Context
- a. built in
- b. simple state
- c. less boilerplate
- d. suiltable for small to medium application
- e. harder debugging
- # Redux
- a. external library
- b. complex state
- c. more structure
- d. suitable for large scale complex application.
- e. Redux provides better debugging tools like DevTools and predictable state updates.
- 12. What your project do?
- ans: I used Context API to manage favorite users globally. This allowed me to access and update favorites from multiple components like UserList, UserDetails, Navbar, and Favorites page without prop drilling.
  I implemented a FavoriteContext to manage favorite users globally. This allowed multiple components like UserList, UserDetails, Navbar, and Favorites page to access and update favorites without prop drilling. I also created a custom hook useFavorite to encapsulate logic for toggling favorites, which improved reusability and kept components clean.
- # Build
- FavoriteContext
- Stored favorite users
- Used in:
- UserList
- UserDetails
- Navbar
- Favorites page
