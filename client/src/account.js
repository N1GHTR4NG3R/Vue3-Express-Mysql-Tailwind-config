import axios from "axios";
const url = "http://localhost:5000/account";

class accountService {
  // Get users
  static getUser() {
    return new Promise((resolve, reject) => {
      try {
        axios.get(url).then((res) => {
          const data = res.data;
          resolve(
            data.User.map((guild_owner) => ({
              ...guild_owner,
            }))
          );
        });
      } catch (err) {
        reject(err.message);
      }
    });
  }
  static insertAccounts(text) {
    return axios.post(url, {
      text,
    });
  }
}

export default accountService;
