1. Imp concepts for JS

- Hoisting
- Diff var, let, const
- Closures
- Interview Quns related to it

2. What is CDN?
3. What is crossorigin?
4. Framework vs Library?

## Carat vs Tilde

1. ^ - this will install all minor updates. e.g ^2.12.0 - 2.12.1 is released, it automatically updates to it
2. ~ - this will install all major updates. e.g ~2.12.0 - 2.12.1 is released, it won't install it, but if 2.13.0 is released it install it automatically. Not Recommended.

## Parcel features

# JSX = Javascript XML / HTML

JSX => Javascript like HTML / XML
JSX => React.createElement => HTMLElement (render) - parcel / babel

=============
2 kinds of components

1. Class based components - OLDER
2. Functional based components - Newer

React Functional based component => normal javscript function => it has to return a JSX

const GetRes = () => {
return <h1>hello</h1>
}

======================= Food Ordering App =============================

1. Header

   - Logo
   - Nav Items

2. Body

   - Search
   - Restaurant Container
     - Restaurant Cards

3. Footer
   - Copyright
   - Links
   - Address
   - Contact Details

Top Level Component

2 types of Exports

1. Default Export

- Exporting a function

2. Named Export

- Exporting a function with name of it

##

Javascript
map, filter, reduce

###

Hooks

1. React has utility functions => normal js functions => facebook developers
   - these funs has some superpowers

- useState - 80%
- useEffect - 15%
- other - 5%

// normal variables
let a = 10;

a = 15;

// super powerful variable = state variables = React

state variables => utility function, powerful function which is provided by React library => Hooks => Normal js fun

1.  useState =>  
    let [restaurants, setRestaurnts] = useState(mock_restaurants)

    - state variable
    - special fun through which i can modify / reassign my state variable

      - this is necessary because if you don't do this and assign your variable like a normal one, then it will not come into the UI effect

    - setRestaurnts(newVal) => your component will be re-rendered with the newVal that is why your UI is refreshed or reloaded

    ## Use Effect

    component loads => useEffect called

          - [] - empty array
             useEffect called only on initial render of the component

         - not mention anything in dependency array
            useEffect called on every re render cycle

         - [statevariable]
            useEffect will be called everytime only when there is a change in statevariable

## Best Practices

1. Never create hooks / state variables outside of your react component
2. Always declare hooks on top of your functional component => because js is synchronous language.
3. Do not create hooks inside your function or loops, conditional statement

# string : ""

# object (always in key-value pair): {

"name":"MyName"
}

# array : index always starts with 0

["red","blue", "white"]
0 1 2

---

---- Mounting ----

Constructor
Render

   <HTML Dummy>
Component did mount 
   <API Call>
   <this.setState> => state variable is updated

--- Update cycle

render (API Data)

   <HTML> (new API data)
   Component did update

#### MakeMyTrip

Hotel - 20 files
Cab booking - 10 files
Flight booking - 25 files - Default Business
Total = 55 files

https://www.makemytrip.com/ => I will not load all files 55 files
25 files would be loaded

https://www.makemytrip.com/hotels/ - 1 file as a bundle => bundle internally contains 20 files in compressed mode (minified mode)

1. Lazy
2. Suspense

==== Higher Order Component ====

function, which will take a component as input and returns an enhanced component

RestaurantMenu -> dummyData
RestaurantCategory -> dummyData
a
b
c
d
ItemList -> access it

This concept is called as Prop Drilling which is the problem

Soln : React Context

global place => store data => access it anywhere you want

RestaurantMenu -> dummyData -> would be kept at react context

ItemList -> access it

============= REDUX Toolkit =================

// write the data to your slice.

1. When you click on Add to Cart (+) button, a dispatch action would be triggered.
   Now, the dispatch will call a function that is responsible to go and edit the data of your redux store's slice.
   This function known as reducer.

// read the data from the slice. 2. In order to read the data, we will use selector and use the data wherever we want.

Terms to be noted :
slice
dispatch / action
reducer
selector

# React Toolkit

- Install @reduxjs/toolkit & react-redux
- Building the store
- Connect store to my application
- Slice (cartSlice)
- dispatch (action) // write
- Selector // read

# Types of testing (Developer)

- Unit testing
- Integration testing
- End to End testing e2e testing

# setting up testing in our app

- Install React testing library
- Installed jest
- Install Babel dependencies
- Configured babel - babel.config.js
- Configure parcel config file to disable default babel transpilation.


# 
__ -> dundus symbol 