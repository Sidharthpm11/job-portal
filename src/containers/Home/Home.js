import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import { Button, Typography } from "@material-ui/core";
import { getJobs } from "../../services/job.services";
import { useHistory } from "react-router-dom";
import { useAppcontext } from "../../core/AppContext";
import "./Home.css";

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(4),
    display: "flex",
    overflow: "auto",
    marginBottom: "50px",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 200,
  },
  moreButton: {
    width: "150px",
  },
}));

export default function Home() {
  const appData = useAppcontext();
  const initialState = {
    jobs: [],
  };
  const [state, setstate] = useState(initialState);
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    appData.setTitle("Home");
    getJobs().then((res) => {
      setstate({ ...state, jobs: res });
    });
  }, []);

  const gotoDetailPage = (id) => {
    history.push("/job/" + id);
  };
  const getJobsList = () =>
    state.jobs.map((item) => {
      return (
        <Paper
          key={item.id}
          style={({ padding: "30px", backgroundColor: "skyblue" })}
          className={fixedHeightPaper}
        >
          <Typography component="h2" variant="h5">
            {item.title}
          </Typography>
          <Typography component="h3" variant="caption">
            {item.company}, {item.location}
          </Typography>{" "}
          <br />
          <Typography component="h3" variant="caption">
            <LocalAtmIcon /> salary: {item.salary} $
          </Typography>
          <Typography component="h3" variant="caption">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z" />
            </svg>
            <i> Work Experience :{item.workEx}</i>
          </Typography>
          <Typography component="h3" variant="caption">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
              <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
            </svg>{" "}
            <i> working time: {item.worktime}</i>{" "}
          </Typography>
          <p>{item.description}</p>
          <Button
            onClick={() => gotoDetailPage(item.id)}
            className={classes.moreButton}
            variant="contained"
            color="primary"
          >
            More Details
          </Button>
        </Paper>
      );
    });
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container>
          <Grid item xs={12}>
            {getJobsList()}
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}
