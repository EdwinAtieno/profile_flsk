import {login, useAuth, logout} from './auth'
import Login from "../components/Login";
import {BrowserRouter as Router,  Switch,  Route,  Redirect,  Link} from 'react-router-dom';




const PrivateRoute = ({ component: Component, ...rest }) => {
  const [logged] = useAuth();

  return <Route {...rest} render={(props) => (
    logged
      ? <Component {...props} />
      : <Redirect to={Login} />
  )} />
}
export default PrivateRoute;