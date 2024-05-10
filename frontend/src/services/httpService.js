import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001/api';

const exportedObject = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
  };
  export default exportedObject;