import {Link} from "react-router-dom";
import {Formik, Field, Form} from "formik";
import {signUpCustomer} from "../services/signUpService";
export default function SignUp() {
    return (
        <div>
            <section className="normal-breadcrumb set-bg" data-setbg="img/normal-breadcrumb.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="normal__breadcrumb__text">
                                <h2>Đăng kí</h2>
                                <p>Chào mừng bạn đến với <h2 style={{color: '#a20a0f'}}>CONFLIX</h2></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="signup spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="login__form">
                                <Formik initialValues={
                                    {
                                        email: "",
                                        password: ""
                                    }
                                }

                                        onSubmit={async (values) => {
                                          await  signUpCustomer(values.email,values.password)
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
                                        <button type="submit" className="site-btn">Đăng kí</button>
                                    </Form>
                                </Formik>
                            </div>
                        </div>
                        <div className="login__register col-lg-6">
                            <h3>Bạn đã có tài khoản ?</h3>
                            <Link to={`/login`}> <a style={{color: 'white'}} className="primary-btn">Đăng nhập ngay</a></Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}