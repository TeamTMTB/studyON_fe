import { observable, computed, action } from "mobx";
import RoomApi from "../roomList/Api/RoomApi";
import RoomCreateApi from "../roomCreate/Api/RoomCreateApi";
import RoomApiModel from "../roomCreate/Api/model/RoomApiModel";
import tagData from "../roomList/tagData";
import io from "socket.io-client";

//1.Mobx Store 클래스 선언
class Store {
  roomApi = new RoomApi();
  roomCreateApi = new RoomCreateApi();
  //2. 관리해야하는 state 객체 @observable 선언 및 초기화
  mySocket = io.connect("http://localhost:8000");

  @observable
  roomName = "";

  @observable
  rooms = [];

  @observable
  room = {};

  @observable
  user = "";

  @observable
  userList = [];

  @observable
  tagList = tagData;

  @observable
  roomName = "";

  @observable
  selectedTag = "";

  @observable
  searchList = [];

  @computed
  get getRoomList() {
    return this.rooms ? this.rooms.slice() : [];
  }

  @computed
  get getErrorMessage() {
    return this.errorMessage ? this.errorMessage : "FAIL";
  }

  @computed
  get getRoomName() {
    return this.roomName;
  }

  @computed
  get getRoom() {
    return this.room ? { ...this.room } : {};
  }

  @computed
  get getTagList() {
    return this.tagList ? this.tagList.slice() : [];
  }

  @computed
  get getSearchList() {
    return this.searchList ? this.searchList.slice() : [];
  }

  //4. state 데이터 변경 @action 함수 구현
  // @action
  // setMySocketId(mySocketId) {
  //   this.mySocketId = mySocketId;
  // }

  @action
  async roomList() {
    this.rooms = await this.roomApi.roomList();
    this.searchList = this.rooms;
  }

  @action
  async roomCreate(room) {
    room.owner = this.mySocket.id;
    room.isPlaying = false;
    const roomApiModel = new RoomApiModel(
      room.title,
      room.description,
      room.startTime,
      room.studyTime,
      room.breakTime,
      room.maxPeopleNum,
      room.tag,
      room.maxTerm,
      this.mySocket.id,
      room.isPlaying,
      room.userList
    );
    console.log("createRoom", roomApiModel);
    const result = this.roomCreateApi.roomCreate(roomApiModel);
    this.rooms.push(room);
    if (result == null) this.errorMessage = "Create error!!";
  }

  @action
  async updateIsPlaying(room) {
    // room.owner = this.mySocket.id;
    room.isPlaying = true;
    const roomApiModel = new RoomApiModel(
      room.title,
      room.description,
      room.startTime,
      room.studyTime,
      room.breakTime,
      room.maxPeopleNum,
      room.tag,
      room.maxTerm,
      room.owner,
      room.isPlaying,
      room.userList
    );
    console.log("updateIsPlaying", roomApiModel);
    const result = this.roomApi.updateIsPlaying(roomApiModel);
    if (result == null) this.errorMessage = "Update error!!";
  }

  @action
  async addUserList(room) {
    this.userList.push(this.user);
    room.userList = this.userList;
    const roomApiModel = new RoomApiModel(
      room.title,
      room.description,
      room.startTime,
      room.studyTime,
      room.breakTime,
      room.maxPeopleNum,
      room.tag,
      room.maxTerm,
      room.owner,
      room.isPlaying,
      room.userList
    );
    console.log("addUserList ", roomApiModel);
    const result = this.roomApi.userList(roomApiModel);
    if (result == null) this.errorMessage = "userList error!!";
  }

  @action
  setRoom(owner) {
    this.room = this.rooms.find((room) => room.owner === owner);
  }

  @action
  setRoomName(roomName) {
    this.roomName = roomName;
  }

  @action
  async userDetail() {
    this.user = await this.userApi.userDetail();
  }

  @action
  findMatches = () => {
    this.rooms = this.searchList.filter((room) => {
      // 이 곳에서 검색어와 매치 되는 지를 확인해야 합니다
      const regex = new RegExp(this.roomName, "gi");
      return room.title.match(regex);
    });
  };

  // @action
  // initRoomList = () => {
  //   this.roomList = tileData;
  // };

  @action
  checkedTagList = (checked, id) => {
    this.tagList = tagData.map((tag) =>
      tag.id === id ? { ...tag, checked } : tag
    );
    this.selectedTag = this.tagList[id];
    this.rooms = this.searchList.filter((room) => {
      return room.tag.includes(this.selectedTag.title);
      // return room.tag === this.selectedTag.title;
    });

    if (this.tagList.every((tag) => tag.checked === false)) {
      this.rooms = this.searchList;
    }
  };

  @action
  async removeRoom(id) {
    this.rooms = this.searchList.filter(
      (room) => room.owner !== this.room
    );
    this.room = {};
    let result = this.roomApi.roomDelete(id);
    if (result == null) {
      this.errorMessage = `Error : There is no Room with roomId ${id} `;
    }
  }

  @action
  setRoomProp(name, value) {
    this.room = {
      ...this.room,
      [name]: value,
    };
  }
}

//5. 객체 생성해서 export
export default new Store();
