import axios from "axios";

const randomApi = "https://randomapi.com/api/1234abcd?key=ITXW-9KX0-F2EJ-MJAF";
export default {
  search: function () {
    return axios.get(randomApi);
  },
};
