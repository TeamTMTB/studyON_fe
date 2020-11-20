import { observable, computed, action } from "mobx";
import { getCurrentUser } from "../oauth/util/APIUtils";
import { ACCESS_TOKEN } from "../oauth/constants";
import Alert from "react-s-alert";

class UserStore {
  @observable
  authenticated = false;

  @observable
  currentUser = {};

  @observable
  loading = false;

  @observable
  curPoint = 2000;

  @computed
  get getAuthenticated() {
    return this.authenticated;
  }

  @computed
  get getCurrentUser() {
    return this.currentUser ? { ...this.currentUser } : {};
  }

  @computed
  get getLoading() {
    return this.loading;
  }

  @computed
  get getCurPoint() {
    return this.curPoint;
  }

  @action
  loadCurrentlyLoggedInUser = () => {
    this.loading = true;

    getCurrentUser()
      .then((response) => {
        this.currentUser = response;
        this.authenticated = true;
        this.loading = false;
      })
      .catch((error) => {
        this.loading = false;
      });
  };

  @action
  handleLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    this.authenticated = false;
    this.currentUser = null;

    Alert.success("You're safely logged out!");
  };

  @action
  setCurPoint = (curPoint) => {
    this.curPoint = curPoint;
    console.log(curPoint)
  }
  // @action
  // inCurPoint(num) {
  //   this.curPoint = this.curPoint + num;
  // }

  // @action
  // disCurPoint(num) {
  //   this.curPoint = this.curPoint - num
  // }
}

export default new UserStore();
