import ApiRequests from "./ApiRequests";

class LoginRequests extends ApiRequests {
  constructor() {
    super();
  }

  login = (email, pass) =>
    new Promise((resolve, reject) => {
      this.post("users/login", { email, pass })
        .then((token) => {
          localStorage.setItem("token", token);
          resolve(token);
        })
        .catch((err) => {
          reject(err);
        });
    });

  register = async (userData) => this.post("users/register", userData);

  logout = () => {
    localStorage.removeItem("user");
  };

  isLoggedIn = () => {
    return localStorage.getItem("user") ? true : false;
  };
}

let loginRequest = new LoginRequests();
export default loginRequest;
