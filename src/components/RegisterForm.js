import React, { useState } from "react";
import { Box, TextField, Button, Typography, CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import PasswordInput from "../FieldMessage/PasswordField";
import EmailField from "../FieldMessage/EmailField";
import TwitterLogo from "../images/twitterlogo.png";
import { useForm } from "../context/UserContext";
import UserContext from "../context/UserContext";


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const nameRegex = /^[A-Za-z\s]+$/;
const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const passwordRegex =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

const alertMsg = {
  error: {
    msg: "Please Register!",
    severity: "error",
    key: "error",
  },
  empty: {
    msg: "Please Enter Details!",
    severity: "error",
    key: "empty",
  },
  success: {
    msg: "Registered successfully!",
    severity: "success",
    key: "success",
  },
};

const RegisterForm = () => {
  const { userName, setUserName } =useForm(UserContext);
  // const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [pswd, setPswd] = useState("");
  const [nameError, setNameError] = useState(false);
  const [error, setError] = useState({
    pwd: false,
    mail: false,
    name:false,
  });
  const navigate = useNavigate();
  const [errorType, setErrorType] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    if (email === "" && pswd === "" && userName === "") {
      setErrorType(alertMsg.empty.key);
    }
    if (
      !nameRegex.test(userName) ||
      !emailRegex.test(email) ||
      !passwordRegex.test(pswd)
    ) {
      setNameError(true);
      setError(true);
    } else {
      const userDetails = {
        userName: userName,
        email: email,
        password: pswd,
      };
      const existingData = JSON.parse(localStorage.getItem("data")) || [];
      existingData.push(userDetails);
      localStorage.setItem("data", JSON.stringify(existingData));
      // setSuccess(true);
      setErrorType(alertMsg.success.key);
      setTimeout(() => {
        navigate("/");
      }, 2000);
      setUserName("");
      setEmail("");
      setPswd("");
      setNameError(false);
      setError({ pwd: false, mail: false });
    }
  };
  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setErrorType("");
  };
  const handleLogin=()=>{
    navigate("/");
  }
  return (
    <>
    <Box sx={{ display: "flex", justifyContent: "space-around", height: 597 }}>
    <Box>
          <CardMedia
            component="img"
            sx={{
              width: 250,
              height: 250,
              mt: 20,
              ml: 10,
            }}
            image={TwitterLogo}
            alt="logo"
          />
        </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          // width: 300,
          height: 400,
          // backgroundColor: "#b7c6e8",
          mt: 10,
          // mx: 60,
          // p: 2,
        }}
      >
        <Typography variant="h4" sx={{fontWeight:'bold'}}>Sign Up</Typography>
        <TextField
          sx={{ my: 1, width: 350 }}
          id="outlined-basic"
          label="Name"
          variant="outlined"
          name="userName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          onBlur={() => setNameError((state)=> ({ ...state, name:nameError}))}
          helperText={nameError ? "Please enter a valid name" : ""}
          error={nameError}
        />
        <EmailField
          sx={{ my: 1, width: 350 }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={(e, error) =>
            setError((state) => ({ ...state, mail: error }))
          }
        ></EmailField>
        <PasswordInput
          value={pswd}
          onChange={(e) => setPswd(e.target.value)}
          onBlur={(e, error) => setError((state) => ({ ...state, pwd: error }))}
          sx={{ width: 350, my: 2 }}

        />
        {/* <Button sx={{ my: 1,fontWeight: 'bold' }} variant="contained" onClick={handleClick}>
          Sign up
        </Button> */}
        <Button
            sx={{
              mt: 1,
              width: 350,
              borderRadius: 4,
              height: 60,
              color: "primary",
              fontWeight: "bold",
            }}
            variant="contained"
            onClick={handleClick}
          >
            Sign up
          </Button>
        <MyAlert
          open={errorType}
          onClose={handleClose}
          msg={alertMsg[errorType]?.msg}
          severity={alertMsg[errorType]?.severity}
        />
        <Typography variant="h6"sx={{fontWeight:'bold',mt:2}}>Already have an account?</Typography>
        <Button
            sx={{
              mt: 1,
              width: 350,
              borderRadius: 4,
              height: 60,
              border: "1px solid",
              color: "primary",
              fontWeight: "bold",
            }}
            variant="outlined"
            onClick={handleLogin}

          >
            Sign in
            {/* <Link to="/">Login</Link> */}
          </Button>
      </Box>
      </Box>
    </>
  );
};

export default RegisterForm;

function MyAlert({ msg, onClose, open, severity }) {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
      <Alert onClose={onClose} severity={severity} sx={{ width: "100%" }}>
        {msg}
      </Alert>
    </Snackbar>
  );
}
