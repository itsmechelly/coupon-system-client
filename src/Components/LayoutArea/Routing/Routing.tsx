import { Redirect, Route, Switch } from "react-router-dom";
import Login from "../../AuthArea/Login/Login";
import Logout from "../../AuthArea/Logout/Logout";
import Register from "../../AuthArea/Register/Register";
import Page404 from "../../SharedArea/Page404/Page404";
import Main from "../Main/Main";
import AdminMain from "../../AdminArea/AdminMain/AdminMain";
import CustomerMain from "../../CustomerArea/CustomerMain/CustomerMain";
import CompanyMain from "../../CompanyArea/CompanyMain/CompanyMain";

function Routing(): JSX.Element {
    return (
        <div className="Routing">

            <Switch>

                <Route path="/layout" component={Main} exact />

                <Route path="/admin" component={AdminMain} />
                <Route path="/company" component={CompanyMain} />
                <Route path="/customer" component={CustomerMain} />

                <Route path="/register" component={Register} exact />
                <Route path="/login" component={Login} exact />
                <Route path="/logout" component={Logout} exact />

                <Redirect from="/" to="/layout" exact />

                <Route component={Page404} />

            </Switch>
        </div>
    );
}

export default Routing;