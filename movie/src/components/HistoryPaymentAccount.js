import {useEffect, useState} from "react";
import {getHistoryAccount, getListHistoryAccount} from "../services/history";
import {useNavigate} from "react-router";
import numeral from "numeral";
import moment from "moment";
export default function HistoryPaymentAccount() {
    const [packed, setPacked] = useState("")
    const [account, setAccount] = useState({})
    const [page,setPage]=useState(0)
    const navigate = useNavigate();
    const headers = {
        "Authorization": 'Bearer '+localStorage.getItem('token')
    }
    const getHistoryPackedAccount = async (id,pageable,headers) => {
        try {
            setPacked(await getListHistoryAccount(id,pageable,headers))
        } catch (e) {

        }
    }
    console.log(headers)
    const formatDate = (time) => {
        const date = time.substring(0, 11)
        const hour = time.substring(11)
        return `${hour} ${moment(date).format('DD/MM/YYYY')}`
    }
    useEffect(() => {
        window.scrollTo(0, 0)
        const accountCheck = JSON.parse(localStorage.getItem("account"))

        if (accountCheck) {
            setAccount(accountCheck)
        } else {
            navigate("/error")
        }
    }, [])

    useEffect(()=>{
        if (account.id!=undefined){
            try {
                getHistoryPackedAccount(account.id,page,headers)
            }catch (e){
                navigate("")

            }

        }
    },[account])
    console.log(packed)
    return (
        <>
            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 text-center mb-5">
                            <h2 className="heading-section">Table #07</h2>
                        </div>
                    </div>
                    <div className="row" style={{margin: "50px 0px 200px 0px"}}>
                        <div className="col-md-12 col-sm-12 col-lg-12">
                            <div className="table-wrap">
                                <table className="table table-bordered table-dark table-hover">
                                    <thead>
                                    <tr>
                                        <th>STT</th>
                                        <th>Ngày bắt đầu</th>
                                        <th>Ngày kết thúc</th>
                                        <th>Tên gói</th>
                                        <th>Số tiền</th>
                                        <th>Trạng thái</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {packed.content&&
                                    packed.content.map((item,index)=>
                                        <tr>
                                            <th>{(5*page)+index+1}</th>
                                            <td>{formatDate(item.dayStart)}</td>
                                            <td>{formatDate(item.dayEnd)}</td>
                                            <td>{item.packedMovie.name}</td>
                                            <td>{numeral(item.packedMovie.price).format('0,0')} vnđ</td>
                                            <td>{item.flag?<span>Còn hạn</span>:<span>Hết hạn</span>}</td>
                                        </tr>
                                    )
                                    }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}