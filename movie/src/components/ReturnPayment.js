import {useEffect, useState} from "react";
import {createHistory} from "../services/history";
import Swal from "sweetalert2";
import {useNavigate} from "react-router";

export default function ReturnPayment() {
    const [responseCode, setResponseCode] = useState("")
    const [account, setAccount] = useState(JSON.parse(localStorage.getItem("account")) != null ? JSON.parse(localStorage.getItem("account")) : "")
    const [pricePacked, setPricePacked] = useState("")
    const navigate=useNavigate();
    console.log(account)
    useEffect(() => {
        try {
            getURL()
        } catch (e) {

        }
    }, [])
   useEffect(() => {
       if (responseCode){
       if (responseCode == "00") {
           Swal.fire({
               icon: "success",
               timer: 2000,
               title: "Mua gói thành công!"
           })
           try {
               createHistory(account.nameAccount,pricePacked)
           }catch (e){

           }
       }else {
           Swal.fire({
               icon: "error",
               timer: 2000,
               title: "Mua gói thất bại rồi!"
           }).then(navigate("/return-fail"))
       }
       }
    }, [responseCode])

    const getURL = () => {
        const urlParams = new URLSearchParams(window.location.search);
        const responseCode = urlParams.get('vnp_ResponseCode');
        const price = urlParams.get("vnp_Amount")
        setPricePacked(price)
        setAccount(JSON.parse(localStorage.getItem("account")))
        // const amount = urlParams.get('vnp_Amount');
        console.log(responseCode);
        setResponseCode(responseCode)
        // setMoney(amount)
    }

    return (
        <div>
            <div className={"row"} style={{justifyContent: "center"}}>
                <img src="../img/a68920a81073b90f3ab4a5890d2c57cf-removebg-preview.png" alt=""/>
            </div>
            <div className={"row"} style={{justifyContent: "center",marginBottom:"60px"}}>
                <h2 style={{color: "#1dc973"}}>Chúc bạn xem phim vui vẻ <span style={{color:"red"}}><i className="fa-regular fa-heart"></i></span></h2>
            </div>
        </div>

    )
}