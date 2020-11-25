import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import AppHeader from "../header/view/Header";
import Home from "../home/view/Home";
import Login from "../oauth/login/Login";
import RoomCreate from "../roomCreate/Container/RoomCreateContainer";
import RoomList from "../roomList/view/RoomList";
import Signup from "../oauth/signup/Signup";
import PrivateRoute from "../common/PrivateRoute";
import LoadingIndicator from "../common/LoadingIndicator";
import { getCurrentUser } from "../oauth/util/APIUtils";
import { ACCESS_TOKEN } from "../oauth/constants";
import Alert from "react-s-alert";
import MyPages from "../myPage/view/MyPages";
import OAuth2RedirectHandler from "../oauth/oauth2/OAuth2RedirectHandler";
import ScrollToTop from "../assets/ScrollToTop";
import RoomListViewContainer from "../roomList/container/RoomListViewContainer";
import RoomEntranceContainer from "../roomEntrance/container/RoomEntranceContainer";
import { inject, observer } from "mobx-react";
import About from "../etcPage/view/About";
import Shop from "../etcPage/view/Shop";

@inject("UserStore")
@observer
class MainRouter extends Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {
  //         authenticated: false,
  //         currentUser: null,
  //         loading: false,
  //     };

  //     // this.loadCurrentlyLoggedInUser = this.loadCurrentlyLoggedInUser.bind(this);
  //     // this.handleLogout = this.handleLogout.bind(this);
  // }

  // loadCurrentlyLoggedInUser = () => {
  //     this.setState({
  //         loading: true,
  //     });

  //     getCurrentUser()
  //         .then((response) => {
  //             this.setState({
  //                 currentUser: response,
  //                 authenticated: true,
  //                 loading: false,
  //             });
  //         })
  //         .catch((error) => {
  //             this.setState({
  //                 loading: false,
  //             });
  //         });
  // };

  // handleLogout = () => {
  //     localStorage.removeItem(ACCESS_TOKEN);
  //     this.setState({
  //         authenticated: false,
  //         currentUser: null,
  //     });
  //     Alert.success("You're safely logged out!");
  // };

  // componentDidMount() {
  //     this.loadCurrentlyLoggedInUser();
  // }

  componentDidMount() {
    this.props.UserStore.loadCurrentlyLoggedInUser();
  }

  render() {
    const { UserStore } = this.props;
    // if (this.state.loading) {
    if (UserStore.getLoading) {
      return <LoadingIndicator />;
    }
    return (
      <div className="app">
        <div className="app-top-box">
          <AppHeader
          // authenticated={UserStore.getAuthenticated}
          // onLogout={UserStore.handleLogout}
          // authenticated={this.state.authenticated}
          // onLogout={this.props.UserStore.handleLogout}
          />
        </div>
        <div>
          <ScrollToTop>
            <Switch>
              <Route exact path="/" component={Home} />
              <PrivateRoute
                path="/profile"
                component={MyPages}
                authenticated={UserStore.getAuthenticated}
                currentUser={UserStore.getCurrentUser}
                // authenticated={this.state.authenticated}
                // currentUser={this.state.currentUser}
              />
              <Route
                path="/login"
                component={Login}
                render={(props) => (
                  <Login
                    authenticated={UserStore.getAuthenticated}
                    // authenticated={this.state.authenticated}
                    {...props}
                  />
                )}
              ></Route>
              <Route
                path="/signup"
                component={Signup}
                render={(props) => (
                  <Signup
                    authenticated={UserStore.getAuthenticated}
                    // authenticated={this.state.authenticated}
                    {...props}
                  />
                )}
              ></Route>
              <Route path="/room-create" component={RoomCreate} />
              <Route path="/room-list" component={RoomList} />
              <Route
                path="/room-entrance/:id"
                component={RoomEntranceContainer}
              />
              <Route
                path="/oauth2/redirect"
                component={OAuth2RedirectHandler}
              ></Route>
              <Route path="/about" component={About} />
              <Route path="/shop" component={Shop} />
            </Switch>
          </ScrollToTop>
        </div>
      </div>
    );
  }
}

export default MainRouter;
