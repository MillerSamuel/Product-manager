import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,Switch,Route,Link
} from "react-router-dom"
import Products from './components/Products';
import Form from './components/Form';
import OneProduct from './components/OneProduct';

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <Switch>
          <Route exact path="/">
            <Form></Form>
            <Products></Products>
          </Route>
          <Route exact path="/:_id">
            <OneProduct></OneProduct>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
