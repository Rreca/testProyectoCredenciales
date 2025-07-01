import axios from 'axios';

const credencialesDB = axios.create({
  //baseURL: 'https://test.ihsa.com.ar/CredencialDigitalApi/credentials',
  baseURL: 'https://servicios.ihsa.com.ar/CredencialDigitalApi/credentials',
});
export default credencialesDB;
