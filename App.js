// const heading = React.createElement('h1', {
//     id: 'heading',
//     xyz: 'abc'
// }, 
// 'Hello World from React');
 const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);




// creating nested elements using React.createElement

const parent = React.createElement(
    'div', {id: 'parent'}, 
    [
    React.createElement('div', {id: 'child1'}, 
    [React.createElement('h1', {}, 'I am H1 tag.'), React.createElement('h2', {}, 'I am H2 tag.')]),
    React.createElement('div', {id: 'child2'}, 
        [React.createElement('h1', {}, 'I am H1 tag.'), React.createElement('h2', {}, 'I am H2 tag.')])
    ]
);
console.log(parent);

root.render(parent);


// to avoid writing React.createElement multiple times, we can use JSX, it is a syntactic sugar for React.createElement

