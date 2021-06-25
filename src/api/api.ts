import axios from 'axios';
import { serverResponse } from '../store/types/storeTypes';

//import { invoiceType } from '../store/types/storeTypes';
//https://mockapi.io/projects/60d5f509943aa60017768d24

const instanceMock = axios.create({
  baseURL: "https://api.covid19api.com/summary",
});

//https://www.fakeapi.online/apis

type serverType = {
  getCountiesCovidList: Function
}

export const serverAL: serverType = {
  getCountiesCovidList: () => {
    return instanceMock
      .get<serverResponse>(``)

      .then((res) => {
        return res.data.Countries;
      });
  },

};