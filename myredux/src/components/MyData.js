import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
    //   maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

 
    


const MyData = ( props ) => {
    console.log(`MyData` ,props)
    const classes = useStyles();
    // const {name} = fact


    return(
        <Card className={classes.card}>
            <CardActionArea className='action-area'>
            {/* <img src='https://s19316.pcdn.co/wp-content/uploads/2019/03/DSC09507-600px-600x338.jpg' /> */}
            <CardMedia
          className={classes.media}
          image="https://s19316.pcdn.co/wp-content/uploads/2019/03/DSC09507-600px-600x338.jpg"
          title="beer cups"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">{props.fact.name}</Typography>
            <div>
            <h3>Location: </h3>
            <div>
            <Typography variant="body2" color="textSecondary" component="p">
            {props.fact.street}
            
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <p> {props.fact.city}</p>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            <p>{props.fact.state}, {props.fact.postal_code}</p>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            <p>{props.fact.country}</p>
            </Typography>
            
            </div>
            </div>
            </CardContent>
            </CardActionArea>
            <CardActions className='but-center'>
                <Button size="small" color="primary">{props.fact.phone}</Button>
                <Button size="small" color="primary">{props.fact.website_url}</Button>
            </CardActions>
        </Card>
    )
}
export default MyData

// return (
//     <Card className={classes.card}>
//       <CardActionArea>
//         <CardMedia
//           className={classes.media}
//           image="/static/images/cards/contemplative-reptile.jpg"
//           title="Contemplative Reptile"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             Lizard
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//             Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
//             across all continents except Antarctica
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button size="small" color="primary">
//           Share
//         </Button>
//         <Button size="small" color="primary">
//           Learn More
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }