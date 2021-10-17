import axios from "axios";

export default axios.create({
  baseURL: "http://ec2-100-26-142-111.compute-1.amazonaws.com:3000",
  headers: {
    "Content-type": "application/json"
  }
});
