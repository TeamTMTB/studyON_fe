import { observable, computed, action } from "mobx";
import RoomApi from "../Api/RoomApi";
import RoomCreateApi from "../../roomCreate/Api/RoomCreateApi";
//import tileData from "../tileData.json";
//import axios from "axios";
//import { actionFieldDecorator } from "mobx/lib/internal";
import RoomApiModel from "../../roomCreate/Api/model/RoomApiModel";
import tagData from "../tagData";
import tileData from "../tileData";
import TimePicker from "rc-time-picker";

//1.Mobx Store 클래스 선언
class RoomStore {
  roomApi = new RoomApi();
  roomCreateApi = new RoomCreateApi();

  //2. 관리해야하는 state 객체 @observable 선언 및 초기화
  @observable
  rooms = [];

  @observable
  room = {};

  @observable
  user = {};

  // @observable
  // tileRooms = tileData;

  @observable
  roomName = "";

  @observable
  tagList = tagData;

  //3. state 데이터 리턴 - @computed get으로 함수 구현
  @computed
  get getRoomList() {
    return this.rooms ? this.rooms.slice() : [];
  }

  // @computed
  // get getTileRooms() {
  //     return this.tileRooms ? this.tileRooms.slice() : [];
  // }

  @computed
  get getErrorMessage() {
    return this.errorMessage ? this.errorMessage : "FAIL";
  }

  @computed
  get getRoomName() {
    return this.roomName;
  }
  @computed
  get getUser() {
    return this.user ? { ...this.user } : {};
  }

  @computed
  get getTagList() {
    return this.tagList ? this.tagList.slice() : [];
  }

  //4. state 데이터 변경 @action 함수 구현
  @action
  setRoomName(roomName) {
    this.roomName = roomName;
  }

  @action
  async roomList() {
    this.rooms = await this.roomApi.roomList();
    console.log(this.rooms);
  }

  @action
  async roomCreate(room) {
    const roomApiModel = new RoomApiModel(
      room.title,
      room.description,
      room.startTime,
      room.studyTime,
      room.breakTime,
      room.maxPeopleNum,
      room.tag,
      room.maxTerm
    );
    const result = this.roomCreateApi.roomCreate(roomApiModel);
    this.rooms.push(room);
    if (result == null) this.errorMessage = "Create error!!";
  }

  @action
  async userDetail() {
    this.user = await this.userApi.userDetail();
  }

  @action
  findMatches = () => {
    this.tileRooms = tileData.filter((room) => {
      // 이 곳에서 검색어와 매치 되는 지를 확인해야 합니다
      const regex = new RegExp(this.roomName, "gi");
      return room.title.match(regex);
    });
  };

  @action
  initRoomList = () => {
    this.roomList = tileData;
  };

  @action
  checkedTagList = (checked, id) => {
    this.tagList = tagData.map((tag) =>
      tag.id === id ? { ...tag, checked } : tag
    );
  };

  @action
  setRoomProp(name, value) {
    this.room = {
      ...this.room,
      [name]: value,
    };
  }
}

//5. 객체 생성해서 export
export default new RoomStore();