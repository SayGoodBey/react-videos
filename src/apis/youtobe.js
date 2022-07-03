import axios from 'axios'

const KEY = 'AIzaSyDhCw6Qidkkf3Vgc6gUXIq4M3c56XLrWug';

export default axios.create({
  baseURL:'https://www.googleapis.com/youtube/v3',
  params:{
    part: 'snippet',
    maxResults:5,
    key:KEY
  }
})