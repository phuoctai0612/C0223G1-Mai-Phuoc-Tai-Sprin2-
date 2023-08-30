export default function Create(){
    return(
        <div>
            <div className="loginMovie">
                <meta charSet="UTF-8" />
                <title>Title</title>
                <link rel="stylesheet" href="../css/create.css" />
                <body>
                <div id="loginMovie" className="animated bounceInDown">
                    <div className="container">
                        <span className="error animated tada" id="msg" />
                        <form name="form1" className="box" onsubmit="return checkStuff()">
                            <h4>
                                Admin<span>Dashboard</span>
                            </h4>

                            <input
                                type="text"
                                name="email"
                                placeholder="Email"
                                autoComplete="off"
                            />
                            <i className="typcn typcn-eye" id="eye" />
                            <input
                                type="password"
                                name="password"
                                placeholder="Passsword"
                                id="pwd"
                                autoComplete="off"
                            />
                            <a href="#" className="forgetpass">
                                Forget Password?
                            </a>
                            <input type="submit" defaultValue="Sign in" className="btn1" />
                        </form>
                        <a href="#" className="dnthave">
                            Don’t have an account? Sign up
                        </a>
                    </div>
                    <div className="footer"></div>
                </div>
                </body>
            </div>

        </div>

    );
}