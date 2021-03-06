import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useAppcontext } from "../../core/AppContext";
import { checkLogin } from "../../services/user.service";
import { connect } from "react-redux";
import { fetchUser } from "../../store/actions";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Login(props) {
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const { setLoggedin, isLoggdin } = useAppcontext();
  const classes = useStyles();
  const submitForm = (e) => {
    e.preventDefault();
    checkLogin(email, pass).then((res) => {
      if (res) {
        const user = {
          name: "Sidharth"
        }
        props.fetchUser(user);
        setLoggedin(true);
        props.history.push("/");
      } else {
        alert("invalid credentials");
      }
    });
  };
  if(isLoggdin) {
    props.history.push("/");
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={(e) => submitForm(e)}>
          <TextField
            type="email"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={pass}
            onChange={(e) => setpass(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
}


const mapDispatchToProps = (dispatch) =>{
  return {
    fetchUser: (user) => dispatch(fetchUser(user))
  }
}
export default connect(null, mapDispatchToProps)(Login)
