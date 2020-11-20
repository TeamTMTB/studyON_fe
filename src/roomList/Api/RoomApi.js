import axios from "axios";

class RoomApi {
    URL = "/rooms";

    roomList() {
        return axios
            .get(this.URL)
            .then((response) => {
                console.log(response.data);
                return response.data;
            })
            .catch((error) => console.error(error));
    }
    updateIsPlaying(RoomApiModel) {
        return axios
            .put(this.URL, RoomApiModel.getJson())
            .then((response) => (response && response.data) || null);
    }
}

export default RoomApi;
