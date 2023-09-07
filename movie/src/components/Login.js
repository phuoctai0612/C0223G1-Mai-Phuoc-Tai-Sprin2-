import {Link} from "react-router-dom";
import {Formik, Field, Form} from "formik";
import {loginCustomer} from "../services/loginService";
import {useNavigate} from "react-router";
import Swal from "sweetalert2";

export default function Login() {

    const navigate = useNavigate();
    const loginFunction = async (email, password) => {
        try {
          const customer=  await loginCustomer(email, password)
            localStorage.setItem("token",customer.token);
            Swal.fire({
                icon: "success",
                timer: 2000,
                title: "Đăng nhập thành công!"
            }).then( navigate("/"))
        }catch (a){
            Swal.fire({
                icon: "error",
                timer: 2000,
                title: "Đăng nhập thất bại!"
            })
        }

    }
    return (
        <div>
            <section className="normal-breadcrumb set-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="normal__breadcrumb__text">
                                <h2>Đăng nhập</h2>
                                <p>Chào mừng bạn đến với <h2 style={{color: '#a20a0f'}}>CONFLIX</h2></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="login spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="login__form">
                                <Formik initialValues={{
                                    email: "",
                                    password: ""
                                }}
                                        onSubmit={async (values) => {
                                            try {
                                                await loginFunction(values.email, values.password)

                                            } catch (e) {
                                                Swal.fire({
                                                    icon: "error",
                                                    timer: 2000,
                                                    title: "Đăng nhập thất bại!"
                                                })
                                            }
                                        }}
                                >
                                    <Form>
                                        <div className="input__item">
                                            <Field type="text" placeholder="abc@gmail.com" name="email"/>
                                            <span className="icon_mail"></span>
                                        </div>
                                        <div className="input__item">
                                            <Field type="password" placeholder="123456Aaa" name="password"/>
                                            <span className="icon_lock"></span>
                                        </div>
                                        <button type="submit" className="site-btn">Đăng nhập</button>
                                    </Form>
                                </Formik>
                                <a href="#" className="forget_pass">Quên mật khẩu ?</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="login__register">
                                <h3>Bạn chưa có tài khoản ?</h3>
                                <Link to={`/signup`}> <a style={{color: 'white'}} className="primary-btn">Đăng kí
                                    ngay</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );

}