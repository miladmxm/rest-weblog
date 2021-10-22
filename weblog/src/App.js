import React, { useEffect, useState } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import DashContext from "./components/context/dashContext";
import Blog from "./components/layouts/blog/bloglayout";
import Contact from "./components/layouts/blog/contact";
import Login from "./components/layouts/blog/login";
import Rejister from "./components/layouts/blog/register";
import Single from "./components/layouts/blog/single";
import AddPost from "./components/layouts/dashboard/addPost";
import DashBlogs from "./components/layouts/dashboard/DashBlogs";
import MainLayout from "./components/layouts/mainLayout";
import Logout from './components/layouts/blog/logout'
import { Messages } from "./components/ui/messages";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser } from "./action/user";
import { decodedToken } from "./components/utils/decodedToken";
import isEmpty from "./components/utils/isEmpty";

const App = ({ location }) => {
  const isDashboard = location.pathname.includes("dashboard")
  const user = useSelector(state => state.userHandler)
  const dispatch = useDispatch()
 
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      const { payload } = decodedToken(token)
      if (payload.exp > Date.now() / 1000) {
        dispatch(addUser(payload.user))
      } else {
        localStorage.removeItem('token')
        dispatch(deleteUser())
      }

    }
  }, [])
  return (
    <>
      <DashContext>
        <MainLayout dashboard={isDashboard}>
          <Messages />
          <Switch>
            {/* dashboard router  */}
            <Route path="/" exact component={Blog} />
            <Route path="/single/:id" exact component={Single} />
            <Route path="/contact" exact component={Contact} />

            {isEmpty(user) ? (

              <Switch>
                <Route path="/logout" exact component={Logout} />
                <Route path="/dashboard" exact component={DashBlogs} />
                <Route path="/dashboard/add-post" exact component={AddPost} />
                <Route path="/dashboard/edit-post" exact component={DashBlogs} />
                <Route path="*" render={() => <p style={{ margin: '250px auto', width: '100%', color: "red" }}>404</p>} />
              </Switch>

            ) : (
              <Switch>
                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Rejister} />
                <Route path="*" render={() => <p style={{ margin: '250px auto', width: '100%', color: "red" }}>404</p>} />
              </Switch>
            )}
            {/* blog router  */}




          </Switch>
        </MainLayout>
      </DashContext>

    </>
  );
}

export default withRouter(App);
