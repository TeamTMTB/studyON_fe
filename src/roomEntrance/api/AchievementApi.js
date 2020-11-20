import axios from "axios";

class AchievementApi {
  URL = "/todo-oneday";

  achievementList(month, userId) {
    return axios
      .get(this.URL + `?month=${month}&userId=${userId}`)
      .then((response) => (response && response.data) || null);
  }

  achievementSave(id, achievment) {
    return axios
      .put(this.URL + `/${id}?achieve=${achievment}`)
      .then((response) => (response && response.data) || null);
  }
}

export default AchievementApi;
