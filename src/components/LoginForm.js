import React, { useState } from "react";
import { Box, Button, CardMedia, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import PasswordInput from "../FieldMessage/PasswordField";
import EmailField from "../FieldMessage/EmailField";
import TwitterLogo from "../images/twitterlogo.png";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const alertMsg = {
  error: {
    msg: "LogIn Failed,Please Register!",
    severity: "error",
    key: "error",
  },
  empty: {
    msg: "Please Enter Details!",
    severity: "error",
    key: "empty",
  },
  success: {
    msg: "Logged in successfully!",
    severity: "success",
    key: "success",
  },
};

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  // const [success, setSuccess] = useState(false)
  const [pswd, setPswd] = useState("");
  const [error, setError] = useState({
    pwd: false,
    mail: false,
  });
  // const [errors, setErrors] = useState(false)
  const [errorType, setErrorType] = useState("");

  const handleLogin = () => {
    const data = JSON.parse(localStorage.getItem("data")) || [];
    console.log(data, "rtyuiop");
    console.log(email, pswd, "emai,password");
    const logindetails = data.find((user) => {
      return user.email === email && user.password === pswd;
    });

    console.log(logindetails, "login");
    if (logindetails) {
      // setSuccess(true);
      setTimeout(() => {
        navigate("/layout");
      }, 3000);
      setErrorType(alertMsg.success.key);
      localStorage.setItem("LoggedIn", true);
    } else {
      // setError(true);
      setErrorType("error");
    }
    if (email === "" && pswd === "") {
      // setErrors(true)
      setErrorType(alertMsg.empty.key);
    } else {
      setEmail("");
      setPswd("");
    }
  };

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    // setSuccess(false);
    // setErrors(false)
    setErrorType("");
  };
  const handleRegister=()=>{
    navigate("/register");
  }
  return (
    <>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", height: 597 }}
      >
        <Box>
          <CardMedia
            component="img"
            sx={{
              width: 300,
              height: 300,
              mt: 20,
              ml: 20,
            }}
            image={TwitterLogo}
            alt="logo"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            // justifyContent:'space-between',
            width: 650,
            // backgroundColor: "#b7c6e8",
          }}
        >
          <Box>
            <Typography
              variant="h2"
              sx={{ fontWeight: "bold", mt: 3, fontSize: 60 }}
            >
              Happening now
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: "bold", mt: 3 }}>
              Join today.
            </Typography>
          </Box>
          {/* <Typography variant="h5">Login</Typography> */}
          <EmailField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={(e, error) =>
              setError((state) => ({ ...state, mail: error }))
            }
            sx={{ borderRadius: 7, width: 350, mt: 4 }}
          ></EmailField>
          <PasswordInput
            value={pswd}
            onChange={(e) => setPswd(e.target.value)}
            onBlur={(e, error) =>
              setError((state) => ({ ...state, pwd: error }))
            }
            sx={{ width: 350, my: 2 }}
          />
          <Button
            sx={{ mt: 1, width: 350, borderRadius: 4, height: 50,fontWeight: 'bold' }}
            variant="contained"
            onClick={handleLogin}
          >
            Sign in
          </Button>
          <MyAlert
            open={errorType}
            onClose={handleClose}
            msg={alertMsg[errorType]?.msg}
            severity={alertMsg[errorType]?.severity}
          />
          <Typography variant="p" sx={{ mt: 2,fontSize:13 }}>
            By signing up, you agree to the
            <Link
              to="https://twitter.com/en/tos"
              sx={{ textDecoration: "none" }}
            >
              Terms of Service
            </Link>{" "}
            and
            <Link to="https://twitter.com/en/privacy">
              Privacy
              <br /> Policy
            </Link>
            ,including
            <Link to="https://help.twitter.com/en/rules-and-policies/x-cookies">
              {" "}
              Cookie Use
            </Link>
            .
          </Typography>
          <Typography variant="h6" sx={{ mt: 3 }}>
            Don't have an account?
          </Typography>
          <Button
            sx={{
              mt: 1,
              width: 350,
              borderRadius: 4,
              height: 50,
              textDecoration: "none",
              border: "1px solid",
              color: "primary",
              fontWeight: "bold",
            }}
            variant="outlined"
            onClick={handleRegister}
          >
            Sign up
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default LoginForm;

function MyAlert({ msg, onClose, open, severity }) {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
      <Alert onClose={onClose} severity={severity} sx={{ width: "100%" }}>
        {msg}
      </Alert>
    </Snackbar>
  );
}