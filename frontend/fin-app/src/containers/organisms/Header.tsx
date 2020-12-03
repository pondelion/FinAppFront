import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


// export interface HeaderProps {}

// export interface HeaderHandler {}

// type Props = HeaderProps & HeaderHandler


// export class Header extends React.Component<Props> {

//   render() {

//     return (
//       <div>
//         <AppBar position="static">
//           <Typography variant="h4" >
//             Finantial Analysis Tool
//           </Typography>
//         </AppBar>
//       </div>
//     )
//   }

// }

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: '#FFFCE1',
    textAlign: "right",
    paddingRight: "60px",
    background: "#4E4A46",
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Typography variant="h4" className={classes.title}>
          Finantial Analysis Tool
        </Typography>
      </AppBar>
    </div>
  );
}
