import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { getUserDetails } from '../selectors';

const container = {
    padding: "10px",
    margin: "50px",
    backgroundColor: '#ebeded'
}

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      color: "black",
      height: "80vh",
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

function UserDetails(props){
    const classes = useStyles();

    let userId = props.match.params.id
    let currentUserDetails = props.getUserDetails(userId)  
    console.log("currentUserDetails::::",currentUserDetails);
    return(
        <div style={container}>
             <Card className={classes.root}>
                <CardContent>
                    <Typography variant="body2" component="p">
                        user Id :: {currentUserDetails.id}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Name :: {currentUserDetails.name}
                    </Typography>
                    <Typography variant="body2" component="p">
                        User Name :: {currentUserDetails.userName}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Email :: {currentUserDetails.email}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Phone :: {currentUserDetails.phone}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Website :: {currentUserDetails.website}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

const connectStateToProps = (state) => {
    return {
      userDetails: state.userDetails,
      getUserDetails: (userId) => getUserDetails(state.userDetails, userId)
    }
  }


export default connect(connectStateToProps)(UserDetails);
