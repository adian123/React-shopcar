import axios from "axios"
export function getShopcarlist(){
    return axios.get('/shopcarlist')
}