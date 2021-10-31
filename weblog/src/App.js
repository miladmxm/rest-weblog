import React, { useContext, useEffect, useState } from "react";
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
import Loader from "./components/ui/loader";
import { cleareDash, getDashboard } from "./action/dashboard";
import NotFound from "./components/layouts/404";
import EditPost from "./components/layouts/dashboard/editPost";
import { getAllPosts } from "./services/dashServises";
import ForgetPass from "./components/layouts/blog/forgetPass";
import ResetPass from "./components/layouts/blog/resetPass";

const App = ({ location }) => {
  const isDashboard = location.pathname.includes("dashboard")
  const user = useSelector(state => state.userHandler)
  const dispatch = useDispatch()

  useEffect(async () => {
    const token = localStorage.getItem('token')
    if (token) {
      const { payload } = decodedToken(token)
      if (payload.exp > Date.now() / 1000) {
        dispatch(addUser(payload.user))
        const postsH = await getAllPosts(payload.user.userId,token )
        if (postsH) { 
          dispatch(getDashboard(postsH.data.posts));
        }
      } else {
        localStorage.removeItem('token')
        dispatch(deleteUser())
        dispatch(cleareDash())
      }

    }
  }, [])
  return (
    <>
      <DashContext>
        <MainLayout dashboard={isDashboard}>
        <Loader />
          <Messages />
          <Switch>
            {/* dashboard router  */}
            <Route path="/" exact component={Blog} />
            <Route path="/single/:id" exact component={Single} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/forget-password" exact component={ForgetPass} />
            <Route path="/reset-password/:token" exact component={ResetPass} />

            {isEmpty(user) ? (

              <Switch>
                <Route path="/logout" exact component={Logout} />
                <Route path="/dashboard" exact component={DashBlogs} />
                <Route path="/dashboard/add-post" exact component={AddPost} />
                <Route path="/dashboard/edit-post/:id" exact component={EditPost} />
                <Route path="*" component={NotFound} />
              </Switch>

            ) : (
              <Switch>
                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Rejister} />
                <Route path="*" component={NotFound} />
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
