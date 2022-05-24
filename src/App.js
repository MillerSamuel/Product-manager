import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,Switch,Route,Link
} from "react-router-dom"
import Products from './components/Products';
import Form from './components/Form';
import OneProduct from './components/OneProduct';
import EditForm from './components/EditForm';
import React,{useState} from 'react';

function App() {
  const[formToggle,setFormToggle]=useState(false);

  return (
    <BrowserRouter>
      <div className="App container">
        <Switch>
          <Route exact path="/">
            <Form formToggle={formToggle} setFormToggle={setFormToggle}></Form>
            <Products formToggle={formToggle} setFormToggle={setFormToggle}></Products>
          </Route>
          <Route exact path="/:_id">
            <OneProduct></OneProduct>
          </Route>
          <Route exact path="/:_id/edit">
            <EditForm></EditForm>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
