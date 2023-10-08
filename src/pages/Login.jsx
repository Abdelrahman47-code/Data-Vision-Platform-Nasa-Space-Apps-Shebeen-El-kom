/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import "../assets/css/login.css";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [anim, setAnim] = useState(false);
  const [animate, setAnimate] = useState(false);
  // Sign up form values
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [upEmail, setUpEmail] = useState("");
  const [upPass, setUpPass] = useState("");
  const [birth, setBirth] = useState("");
  const [gender, setGender] = useState("male");
  const [agreements, setAgreements] = useState([false, false]);
  // Sign in form values
  const [inEmail, setInEmail] = useState("");
  const [inPass, setInPass] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (inEmail === "" || inPass === "") {
      swal({
        text: "All fields must be filled",
        icon: "error",
      });
    } else {
      setIsLoading(!isLoading);
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (
      fname === "" ||
      lname === "" ||
      upEmail === "" ||
      upPass === "" ||
      birth === ""
    ) {
      swal({
        text: "All fields must be filled!",
        icon: "error",
      });
    } else {
      if (agreements[0] === false || agreements[1] === false) {
        swal({
          text: "You must agree all!",
          icon: "error",
        });
      } else {
        setIsLoading(!isLoading);
      }
    }
  };
  const animDur = 0.8;

  return (
    <div className="login_page">
      <div
        className="animation"
        style={{ animation: animate && `ani ${animDur}s ease-in 1` }}
      ></div>
      <div className="container">
        <div className={signUp ? "content sign_up_active" : "content"}>
          <form
            onSubmit={handleLogin}
            style={{
              animation: anim ? "sig 0.4s linear 1" : "log 0.5s linear 1",
            }}
          >
            <h2>Sign in</h2>
            <input
              type="email"
              name="logemail"
              placeholder="Enter your email"
              value={inEmail}
              onChange={(e) => setInEmail(e.target.value)}
            />
            <input
              type="password"
              name="logpass"
              placeholder="Password"
              value={inPass}
              onChange={(e) => setInPass(e.target.value)}
            />
            <Link path="/" className="forgot">
              Forgot your password?
            </Link>
            <button type="submit">
              {isLoading ? <div className="loading"></div> : "Sign in"}
            </button>
            <div className="switch">
              <p>Or don't have an account?</p>
              <span
                onClick={() => {
                  setAnimate(!animate);
                  setAnim(!anim);
                  setTimeout(() => {
                    setSignUp(!signUp);
                  }, (animDur * 1000) / 2);
                  setTimeout(() => {
                    setAnimate(false);
                  }, animDur * 1000);
                }}
              >
                Sign up
              </span>
            </div>
          </form>
          <form
            onSubmit={handleSignup}
            style={{
              animation: anim ? "sig 0.4s linear 1" : "log 0.5s linear 1",
            }}
          >
            <h2>Create account</h2>
            <input
              type="text"
              name="fname"
              placeholder="First name"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
            <input
              type="text"
              name="lname"
              placeholder="Last name"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={upEmail}
              onChange={(e) => setUpEmail(e.target.value)}
            />
            <input
              type="password"
              name="pass"
              placeholder="Password"
              value={upPass}
              onChange={(e) => setUpPass(e.target.value)}
            />
            <div className="gender">
              <div className="radio" onClick={() => setGender("male")}>
                <span className={gender === "male" ? "active" : ""}></span>
                Male
              </div>
              <div className="radio" onClick={() => setGender("female")}>
                <span className={gender === "female" ? "active" : ""}></span>
                Female
              </div>
            </div>
            <input
              type="date"
              name="birth"
              value={birth}
              onChange={(e) => setBirth(e.target.value)}
            />
            <div className="agreement">
              <div
                className={`checkbox ${agreements[0] && "active"}`}
                onClick={() => setAgreements([!agreements[0], agreements[1]])}
              >
                <span></span>
                agree terms
              </div>
              <div
                className={`checkbox ${agreements[1] && "active"}`}
                onClick={() => setAgreements([agreements[0], !agreements[1]])}
              >
                <span></span>
                agree terms brdo
              </div>
            </div>
            <button type="submit">
              {isLoading ? <div className="loading"></div> : "sign up"}
            </button>
            <div className="switch">
              <p>Already have an account?</p>
              <span
                onClick={() => {
                  setAnimate(!animate);
                  setAnim(!anim);
                  setTimeout(() => {
                    setSignUp(!signUp);
                  }, (animDur * 1000) / 2);
                  setTimeout(() => {
                    setAnimate(false);
                  }, animDur * 1000);
                }}
              >
                Sign in
              </span>
            </div>
          </form>
          <div
            className="text"
            style={{
              animation: anim ? "log 0.4s linear 1" : "sig 0.5s linear 1",
            }}
          >
            <div>
              <h3>Hello, Friend!</h3>
              <p>Enter your personal details and start journey with us</p>
              <button
                onClick={() => {
                  setAnim(!anim);
                  setTimeout(() => {
                    setSignUp(!signUp);
                  }, 200);
                }}
              >
                Sign up
              </button>
            </div>
            <div>
              <h3>Welcome back!</h3>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                onClick={() => {
                  setAnim(!anim);
                  setTimeout(() => {
                    setSignUp(!signUp);
                  }, 200);
                }}
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
