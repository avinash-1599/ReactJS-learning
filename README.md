# learning React

webpack, parcel, vite - bundlers

~ tilde -> ~2.4.8 in package.json means automatic major update of version
^ caret -> ^3.7.2 in package.json means automatic minor update of version

# hosting app to server using parcel
----parcel------
- npx parcel index.html
- dev build
- HMR - hot module replacement (automatic changes in server on changing in ocal files)
- File watching algorithm
- Caching (faster builds)
- Image optimization
- Bundles the code
- Minification, Compression
- Consistent Hashing
- Code splitting
- Differential Bundling - support older browser
- Tree Shaking - remove unused code
- Diagnostics, error-


# build in production using parcel
npx parcel build index.html   (remove main key from package.json)

scripts inside package.json

"start": "parcel index.html"
"build": "parcel build index.html"

- command to run project
 - npm run start (shorthand- npm start)
 - npm run build

 # JSX - html-like or XML-like syntax

 - const jsx = <h1 className="heading" tabIndex="1"> Hello JSX </h1>  -- react element  (behind the scene its using React.      createElement)
 - camel case used for jsx attributes
 - if we write jsx in multiple lines then bracket () is required
 - jsx is transpiled before it goes to JS engine so that browser can understand the code
 - transpilation is done by parcel (parcel does it by a package called Babel)


 # Routing in React
 - import {createBrowserRouter, RouterProvider} from react-router-dom
 - const router = createBrowserRouter({
    {
        path: '/',
        element: <AppLayout />
        errorElement: <Error />
    },
    {
        path: '/about',
        element: <About />
    }
 })

 const root = ReactDOM.createRoot(document.getElementById('root'));

 root.render(<ReactProvider router={router} />)


 # 2 types of Routing in web apps

 - Client-side routing
 - Server-side routing



 # life cycle in class-based component

 constructor>render>componentDidMount

 ex- in case of parent-child components
 parent constructor->parent render->child contructor->child render->child componentDidMount->Parent componentDidMount

 ex- in case of parent-multiple childs(child1, child2)
 parent constructor->parent render->child1 contructor->child1 render->child2 contructor->child2 render->child1 componentDidMount->child2 componentDidMount->Parent componentDidMount



 # Redux Toolkit ------

 - install @reduxjs/toolkit and react-redux
 - build the store
    import { configureStore } from "@reduxjs/toolkit";
    import cartReducer from "./slices/cartSlice";
    //import userReducer from "./slices/userSlice";

    const appStore = configureStore({
        reducer: {
            cart: cartReducer,
            //user: userReducer
        }
    });

    export default appStore;

 - connect our app to the store
    - we have to make changes in app.js file to connect store to the app
    - import { Provider } from 'react-redux';
    - import appStore from './utils/appStore';
    - const AppLayout = () => {

        - return (
        - <Provider store={appStore}>
        - <UserContext.Provider value={{loggedInUser: userInfo, setUserInfo}}>
            <div className='app'>
            <Header></Header>
            <Outlet />
            </div>
        - </UserContext.Provider>
        - </Provider>
        - )
    - }
 - create slice (cart slice)
 - dispatch action
 - use selector to read data


 # Types of Testing (a developer can write 3 types)
 - Unit Testing
 - Integration Testing
 - End to End Testing (E2E)

# setting up testing in the app

- installed react testing library
- installed jest
- installed Babel dependencies
- configure babel
- configure parcel config file to disable default babel transpilation  (create .parcelrc file)
- jest configuration (npx jest --init)
- install jsdom (npm i -D jest-environment-jsdom)
- install @babel/preset-react to make JSX work in test file
- include @babel/preset-react in babel configuration
- install testing library/jest-dom