import axios from "axios";

export async function getMoney(money, id) {
    const res = await axios.post(`http://localhost:8080/vnpay/create/${money}/${id}`)
    return res.data
}