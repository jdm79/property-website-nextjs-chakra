import Axios from "axios";

const headers = {
    'X-RapidAPI-Key': '58cf27617fmsh2eb06e9ef64b23fp15ae43jsnd4125d459720',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
}

export const axios = Axios.create({
    baseURL: 'https://bayut.p.rapidapi.com',
    headers: headers
});