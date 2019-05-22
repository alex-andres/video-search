import axios from 'axios';
const KEY = 'AIzaSyCr16J6C-28rx9UEMtt5GW2o0NmYlEceMA';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
