import axios from 'axios'

async function getDoughnutsFromApi() {
  const response = await axios.get('http://localhost:5002/doughnuts');
  return response.data;
}

export {
  getDoughnutsFromApi
}
