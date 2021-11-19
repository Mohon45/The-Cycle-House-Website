import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import ExploreCycle from './Pages/Home/ExploreProducts/ExploreProducts';
import Login from './Pages/Login/Login/Login';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Footer from './Pages/Home/Footer/Footer';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Booking from './Pages/Booking/Booking';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import NotFound from './Pages/NotFound/NotFound';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import AddCycle from './Pages/Dashboard/AddCycle/AddCycle';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/exploreCycle">
              <ExploreCycle></ExploreCycle>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/addCycle">
              <AddCycle></AddCycle>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute exact path="/booking/:productId">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
