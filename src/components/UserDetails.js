import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { getUserDetails } from '../selectors';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      color: "black",
      height: "10vh",
      margin: '10px'
    },
    container : {
        padding: "10px",
        margin: "50px",
        backgroundColor: '#ebeded'
    },
    header:{
        textAlign:"center",
        fontSize:'20',
        fontWeight:"bold"
    },
    innerContainer : {
        marginLeft: "20px",
        fontSize:'16',
        fontWeight: "bolder",
    } 
  });

function UserDetails(props){
    const classes = useStyles();
    let userId = props.match.params.id
    let currentUserDetails = props.getUserDetails(userId)  
    return(
        <div className={classes.container}>
            <div className={classes.header}>
                User Details
            </div>
             <Card className={classes.root}>
                <CardContent className={classes.innerContainer}>
                    <Typography variant="body2" component="p">
                        user Id :: {currentUserDetails.id}
                    </Typography>
                </CardContent>
            </Card>

            <Card className={classes.root}>
                <CardContent className={classes.innerContainer}>
                    <Typography variant="body2" component="p">
                        Name :: {currentUserDetails.name}
                    </Typography>
                </CardContent>
            </Card>

            <Card className={classes.root}>
                <CardContent className={classes.innerContainer}>
                    <Typography variant="body2" component="p">
                        Email :: {currentUserDetails.email}
                    </Typography>
                </CardContent>
            </Card>

            <Card className={classes.root}>
                <CardContent className={classes.innerContainer}>
                    <Typography variant="body2" component="p">
                    Phone :: {currentUserDetails.phone}
                    </Typography>
                </CardContent>
            </Card>

            <Card className={classes.root}>
                <CardContent className={classes.innerContainer}>
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
