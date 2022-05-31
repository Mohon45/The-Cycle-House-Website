import * as React from "react";
import { Link } from "react-router-dom";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import "./Dashboard.css";
import DashboardHome from "../DashboardHome/DashboardHome";
import AddCycle from "../AddCycle/AddCycle";
import MyOrders from "../MyOrders/MyOrders";
import PawNow from "../PayNow/PawNow";
import AddReview from "../AddReview/AddReview";
import useAuth from "../../../hooks/useAuth";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";

const drawerWidth = 200;

const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const { admin } = useAuth();

  return (
    <React.Fragment>
      <div className="d-flex" style={{ backgroundColor: "#E8E8E8" }}>
        <aside className="sidebar">
          <div className="pt-3 dashboard-title">
            {admin ? (
              <h2 className="fw-bold">Admin Dashboard</h2>
            ) : (
              <h2 className="fw-bold">User Dashboard</h2>
            )}
          </div>

          <div className="dashboard-items mt-4">
            <ul>
              <li>
                <Link className="single-item" to={`${url}`}>
                  Dashboard
                </Link>
              </li>
              <li>
                <Link className="single-item" to={`${url}/myOrders`}>
                  MY Orders
                </Link>
              </li>
              <li>
                <Link className="single-item" to={`${url}/review`}>
                  Review
                </Link>
              </li>
              <li>
                <Link className="single-item" to={`${url}/pay`}>
                  Pay Now
                </Link>
              </li>
              {admin ? (
                <>
                  {/* <li>
                    <Link className="single-item" to={`${url}/makeAdmin`}>
                      Make Admin
                    </Link>
                  </li> */}
                  <li>
                    <Link className="single-item" to={`${url}/addCycle`}>
                      Add Cycle
                    </Link>
                  </li>
                </>
              ) : null}
            </ul>
          </div>
        </aside>
        <div className="dashboard-field mx-auto">
          <Switch>
            <Route exact path={path}>
              <DashboardHome></DashboardHome>
            </Route>
            <Route exact path={`${path}/myOrders`}>
              <MyOrders></MyOrders>
            </Route>
            <Route exact path={`${path}/pay`}>
              <PawNow></PawNow>
            </Route>
            <Route exact path={`${path}/review`}>
              <AddReview></AddReview>
            </Route>
            {/* <AdminRoute path={`${path}/makeAdmin`}>
              <MakeAdmin></MakeAdmin>
            </AdminRoute> */}
            <AdminRoute path={`${path}/addCycle`}>
              <AddCycle></AddCycle>
            </AdminRoute>
          </Switch>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
