import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import AppHeader from '../header/view/Header';
import Home from "../home/view/Home";
import Login from "../oauth/login/Login";
import RoomCreate from "../roomCreate/Container/RoomCreate";
import RoomList from "../roomList/view/RoomList";
import Signup from "../oauth/signup/Signup";
import PrivateRoute from '../common/PrivateRoute';
import LoadingIndicator from '../common/LoadingIndicator';
import { getCurrentUser } from '../oauth/util/APIUtils';
import { ACCESS_TOKEN } from '../oauth/constants';
import Alert from 'react-s-alert';
import NotFound from '../common/NotFound';
import RoomEntranceView from "../roomEntrance/view/RoomEntranceView";
import MyPages from "../myPage/view/MyPages";
import OAuth2RedirectHandler from '../oauth/oauth2/OAuth2RedirectHandler';
import ScrollToTop from "../assets/ScrollToTop";
import RoomListViewContainer from "../roomList/container/RoomListViewContainer";
import RoomEntranceContainer from "../roomEntrance/container/RoomEntranceContainer";

class MainRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      currentUser: null,
      loading: false
    }

    this.loadCurrentlyLoggedInUser = this.loadCurrentlyLoggedInUser.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  loadCurrentlyLoggedInUser() {
    this.setState({
      loading: true
    });

    getCurrentUser()
    .then(response => {
      this.setState({
        currentUser: response,
        authenticated: true,
        loading: false
      });
    }).catch(error => {
      this.setState({
        loading: false
      });  
    });    
  }

  handleLogout() {
    localStorage.removeItem(ACCESS_TOKEN);
    this.setState({
      authenticated: false,
      currentUser: null
    });
    Alert.success("You're safely logged out!");
  }

  componentDidMount() {
    this.loadCurrentlyLoggedInUser();
  }

  render() {
    if(this.state.loading) {
      return <LoadingIndicator />
    }
    return (
      <div className="app">
        <div className="app-top-box">
          <AppHeader authenticated={this.state.authenticated} onLogout={this.handleLogout} />
        </div>
        <div>
        <ScrollToTop>
          {/* <BrowserRouter> */}
          <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute path="/profile" component={MyPages} authenticated={this.state.authenticated} currentUser={this.state.currentUser}/>
            <Route path="/login" component={Login}
              render={(props) => <Login authenticated={this.state.authenticated} {...props} />}>
            </Route>
            <Route path="/signup" component={Signup}
              render={(props) => <Signup authenticated={this.state.authenticated} {...props} />}>
            </Route>
            <Route path="/room-create" component={RoomCreate} />
            <Route path="/room-list" component={RoomList} />
            <Route
              path="/room-entrance/:id"
              component={RoomEntranceContainer}
            />
            <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}></Route> 
          </Switch>
          {/* </BrowserRouter> */}
        </ScrollToTop>
        </div>
      </div>
    );
  }
}

export default MainRouter;
