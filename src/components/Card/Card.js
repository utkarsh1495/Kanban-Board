import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles({
  root: {
    padding: 10,
    textAlign: "center",
    margin: 10,
    border: "1px solid",
    padding: 10,
    boxShadow: "5px 10px #888888"
  
  },
  media: {
    height: 50,
    width: 50,
    float: "right"
  },
    title: {
        textAlign: "left",
        width: 121
    },
    gutterBottom:{
        float: "left"
    },
    avatar: {
        backgroundColor: red[500],
      },
    rightTitle:{
        marginLeft: "auto"
    },
    userName: {
        position: "absolute",
        right: 60
    }
});

const KanbanCard = (props)=> {
  const classes = useStyles();

  return (
      <Card className={classes.root}>
          <CardActionArea onClick={props.updateCardDetails}>
              <CardContent>
                  <Typography className={classes.gutterBottom} gutterBottom variant="h6" component="h5">
                      {props.cardTitle}
                  </Typography>
                  <Typography className={classes.title} color="textPrimary" gutterBottom>
                      Due: {props.dueDate}
                  </Typography>
              </CardContent>
              <CardActions disableSpacing>
                  <Typography className={classes.userName} color="textPrimary" gutterBottom>
                        {props.assignee}
                </Typography>
                  <IconButton aria-label="User Icon" color="primary" className={classes.rightTitle}>
                  <AccountCircleIcon fontSize="large"/>
                  </IconButton>
              </CardActions>

          </CardActionArea>
          <CardActions>
          </CardActions>

      </Card>
  );
}
export default KanbanCard