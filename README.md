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
