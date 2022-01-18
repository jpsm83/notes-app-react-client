// axios connect the front with back
// service setup the config for the connection
import axios from "axios";

export default class AuthService {
  constructor() {
    this.instance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/auth`,
      // withCredentials=true create cookies so cors (server) can reconize with user is in session
      withCredentials: true,
    });
  }

  // same methods from backend
  signup = (data) => this.instance.post("/signup", data);
  login = (data) => this.instance.post("/login", data);
  logout = () => this.instance.post("/logout");
  isLoggedIn = () => this.instance.get("/isLoggedin");
  edit = (data) => this.instance.put("/edit-user", data);
}
