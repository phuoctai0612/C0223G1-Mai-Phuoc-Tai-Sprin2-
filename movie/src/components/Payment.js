import {useEffect, useState} from "react";
import {getListPackedMovie} from "../services/packedMovie";
import numeral from "numeral"
import {getMoney} from "../services/paymentService";
import Swal from "sweetalert2";
import {getHistoryAccount} from "../services/history";
import {getAccountWithToken} from "../services/loginService";
import {useNavigate} from "react-router";

export default function Payment() {
    const navigate = useNavigate();
    const [listTypeAccount, setListTypeAccount] = useState([]);
    const [selectedTypeAccount, setSelectedTypeAccount] = useState('');
    const [packed, setPacked] = useState("")
    const [account, setAccount] = useState("");
    const getToken = async () => {
        try {
            setAccount(await getAccountWithToken(localStorage.getItem("token")));
        } catch (e) {
            navigate("/error")
        }
    }

    const getHistoryPackedAccount = async (id) => {
        try {
            setPacked(await getHistoryAccount(id))
            Swal.fire({
                icon: "error",
                timer: 2000,
                title: "Hiện tại bạn đang có gói nên không thể mua thêm!",
                showConfirmButton:false
            })
            navigate("/")
        } catch (e) {

        }
    }
    const getListOfTypeAccount = async () => {
        setListTypeAccount(await getListPackedMovie());
    }
    const handleTypeAccountChange = (event) => {
        const newTypeAccount = event.target.value;
        if (newTypeAccount !== selectedTypeAccount) {
            setSelectedTypeAccount(JSON.parse(newTypeAccount));
        }
    };
    const getUrlVnPay = async () => {
        try {
            window.location.href = await getMoney(selectedTypeAccount.price, selectedTypeAccount.id)
        } catch (e) {
            Swal.fire({
                icon: "error",
                timer: 2000,
                title: "Vui lòng chọn gói trước khi thanh toán!",
                showConfirmButton: false
            })
        }

    }
    useEffect(() => {
        getListOfTypeAccount()
        getToken()
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [])
    useEffect(() => {
        if (account!=''){
          getHistoryPackedAccount(account.id);
        }
    }, [account])
    return (
        <div className={"container"} style={{padding: "50px 0px 100px 0px"}} id={"payment"}>
            <title>Thanh toán</title>
            <div style={{color: "white"}} className={"container"}>
                <h1 className={"section-title payment"}>Chọn gói dịch vụ phù hợp với bạn</h1>
                <span className={"paymentIcon"}>  <i className="fa-solid fa-check "></i> </span><strong>Xem mọi nội dung
                bạn muốn. Không có quảng cáo.</strong>
                <br/>
                <span className={"paymentIcon"}>  <i className="fa-solid fa-check "></i></span> <strong>Đề xuất dành
                riêng cho bạn.</strong>
            </div>
            <section style={{paddingTop: "50px"}}>
                {listTypeAccount &&
                listTypeAccount.map((item, index) =>
                    <div key={`type_account_${index}`} className={"col-lg-4 col-md-12 col-sm-12 container divPayment"}>
                        <input type="radio" id={"control_0" + index} name="select" value={JSON.stringify(item)}
                               onChange={handleTypeAccountChange}/>
                        <label htmlFor={"control_0" + index}>
                            <h2><strong>{item.name}</strong></h2>
                            <strong>{numeral(item.price).format('0,0')} vnđ/{item.id == 1 ?
                                <span>6 tháng</span> : item.id == 2 ? <span>3 tháng</span> :
                                    <span>tháng</span>}</strong>
                            <div style={{paddingTop: "20px"}}>
                                <p><span>•</span>Chất lượng hình ảnh và âm thanh tuyệt vời</p>
                                <p><span>•</span>Độ phân giải dễ xem </p>
                                <p><span>•</span>Xem trên TV, máy tính, điện thoại và máy tính bảng của bạn</p>
                                {item.id == 1 ? <p><span>•</span>Được giảm tới 10%</p> : item.id == 2 ?
                                    <p><span>•</span>Được giảm tới 5%</p> : ""}
                            </div>
                        </label>
                    </div>
                )
                }
            </section>
            <div className={"col-lg-12 col-sm-12 col-md-12 container"} style={{paddingTop: "50px"}}>
                <center>
                    <button onClick={async () => {
                        await getUrlVnPay()
                    }} style={{
                        width: "40%",
                        height: "80px",
                        background: "#E50914",
                        color: "white",
                        borderRadius: "20px"
                    }}><span style={{fontSize: "30px"}}><>Thanh toán</></span></button>
                </center>
            </div>
        </div>
    )
}