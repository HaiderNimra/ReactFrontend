import ApiRequests from "./ApiRequests";

class UserRequests extends ApiRequests {
  constructor() {
    super();
  }

  getUser = () => this.get("users");
  addUser = (data) => this.post("users/register", data);
  updateUser = (_id, data) => this.patch("users/" + _id, data);
  deleteUser = (_id) => this.delete("users/" + _id);
  getSingleUser = (_id) => this.get("users/" + _id);
}

let userRequest = new UserRequests();
export default userRequest;
