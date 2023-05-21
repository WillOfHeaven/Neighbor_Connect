import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Notification from './Notification';
import Post from './Post';
//import { Router, Switch, Route } from 'react-router-dom';
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/post" element={<Post/>}/>
      <Route exact path="/home" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    </>
);
}

export default App;
