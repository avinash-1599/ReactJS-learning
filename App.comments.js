import React from 'react';
import ReactDOM from 'react-dom/client';
// // const heading = React.createElement('h1', {
// //     id: 'heading',
// //     xyz: 'abc'
// // }, 
// // 'Hello World from React');
//  const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(heading);

// // creating nested elements using React.createElement

// const parent = React.createElement(
//     'div', {id: 'parent'}, 
//     [
//     React.createElement('div', {id: 'child1'}, 
//     [React.createElement('h1', {}, 'I am H1 tag.'), React.createElement('h2', {}, 'I am H2 tag.')]),
//     React.createElement('div', {id: 'child2'}, 
//         [React.createElement('h1', {}, 'I am H1 tag.'), React.createElement('h2', {}, 'I am H2 tag.')])
//     ]
// );
// console.log(parent);

// root.render(parent);
// // to avoid writing React.createElement multiple times, we can use JSX, it is a syntactic sugar for React.createElement


const root = ReactDOM.createRoot(document.getElementById('root'));

// React Element
const jsxHeading = <h1 id="heading">Hello World from React</h1>;
//root.render(jsxHeading);

// React Component
//  - Functional Component - denoted by function keyword starting with capital letter
//  - Class Component - denoted by class keyword starting with capital letter

// Functional Component
//------1 way----------
function Title() {
    return <h1 id="title">Title Component</h1>;
}
// --------2 way---------
const Heading = () => { 
   return (
   <div id='container'>
    {/* -- rendering Title component inside Heading component (known as Component Composition) -- */}
        <Title />
        <Title></Title>
        {Title()}
      <h1 className="heading">Functional Component</h1>
   </div>
   )
}
root.render(<Heading />);

