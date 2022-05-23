import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,Switch,Route,Link
} from "react-router-dom"
import Products from './components/Products';
import Form from './components/Form';

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <h1>Hello</h1>
        <Switch>
          <Route exact path="/all">
            <Products></Products>
          </Route>
          <Route exact path="/">
            <Form></Form>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
