import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Button, Typography } from "@material-ui/core";
import { getJobs } from "../../services/job.services";

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
    marginBottom: '50px',
    flexDirection: "column",
  },
  fixedHeight: {
    height: 200,
  },
  moreButton: {
    width: "150px"
  }
}));

export default function Home() {
  const initialState = {
    jobs: []
  }
  const [state, setstate] = useState(initialState);
  const classes = useStyles();

  useEffect(() => {
    getJobs()
    .then((res)=>{
      setstate({...state, jobs: res})
    })
  }, []);
  const getJobsList = ()=> state.jobs.map((item)=> {
    return (
      <Paper key={item.id} className={fixedHeightPaper}>
        <Typography component="h3" variant="h5">{item.title}</Typography>
        <Typography component="h4" variant="caption">{item.company}, {item.location}</Typography>
        <p>{item.description}</p>
        <Button className={classes.moreButton} variant="contained" color="primary">
          More Details
        </Button>
      </Paper>
    )
  })
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
