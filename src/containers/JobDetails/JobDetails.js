import {
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { useAppcontext } from "../../core/AppContext";
import { getJobDetails } from "../../services/job.services";

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
}));
export default function JobDetails(props) {
  const appData = useAppcontext();
  const initialState = {
    job: null,
  };
  const [state, setstate] = useState(initialState);
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  useEffect(() => {
    appData.setTitle("Job Details");
    getJobDetails(props.match.params.id).then((res) => {
      setstate({ ...state, job: res });
    });
  }, []);
  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container>
          <Grid item xs={12}>
            <Paper className={fixedHeightPaper}>
              {state.job ? (
                <>
                  <Typography component="h3" variant="h5">
                    {state.job.title}
                  </Typography>
                  <Typography component="h4" variant="caption">
                    {state.job.company}, {state.job.location}
                  </Typography>
                  <p>{state.job.description}</p>
                </>
              ) : (
                <p>Job not found</p>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}
