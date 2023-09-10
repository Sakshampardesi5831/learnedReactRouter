import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import { RouterProvider, createBrowserRouter, createRoutesFromElements,Route } from "react-router-dom";
import Layout from "./Layout";
import { About, ContactUs, GitHub, Home, User } from "./components";
import {githubInfo} from './components/GitHub/GitHub'
/*const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      { path: "about", element: <About /> },
      {path:"contact",element:<ContactUs/>}
    ],
  },
]);*/
//Another Way of Routing in the React 


const router2=createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout/>}>
             <Route  path="" element={<Home/>}/>
             <Route  path="about" element={<About/>}/>
             <Route  path="contact" element={<ContactUs/>}/>
             <Route path="userid/:id"  element={<User/>}/>
             <Route loader={githubInfo} path="github"  element={<GitHub/>}/>
        </Route> 
    )
)


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router2} />
  </React.StrictMode>
);
