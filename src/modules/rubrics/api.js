import Axios from "axios";


export function getUsers() {
  return Axios.get('api/users');
}