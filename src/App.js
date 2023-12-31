import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import AddExpense from "./pages/add-expense";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/add-expense" component={AddExpense} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
