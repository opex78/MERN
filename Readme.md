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

1.  function getRes() {

}

2.  const GetRes = () => {
    return <h1>hello</h1>
    }
