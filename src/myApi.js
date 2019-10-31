import axios from "axios";
const URL = "https://us-central1-update-table-b7e83.cloudfunctions.net/users";

export const postApi = user => {
  axios
    .post(URL, user)
    .then(res => res.data)
    .catch(err => err);
};

export const getApi = user => {
  axios
    .get(URL, user)
    .then(res => res.data)
    .catch(err => err);
};