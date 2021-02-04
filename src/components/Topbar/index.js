// import React,  { Component } from 'react';
// import withStyles from '@material-ui/styles/withStyles';


// // Tab styles
// const styles = theme => ({
//   tabContainer: {
//     marginLeft: 32,
//     [theme.breakpoints.down('sm')]: {
//       display: 'none'
//     }
//   },
//   tabItem: {
//     paddingTop: 20,
//     paddingBottom: 20,
//     minWidth: 'auto'
//   }
// })

// class Topbar extends Component {

//   state = {
//     value: 0,
//     menuDrawer: false
//   };

//   handleChange = (event, value) => {
//     this.setState({ value });
//   };

//   current = () => {
//     if(this.props.currentPath === '/home') {
//       return 0
//     }
//     if(this.props.currentPath === '/dashboard') {
//       return 1
//     }
//     if(this.props.currentPath === '/signup') {
//       return 2
//     }
//     if(this.props.currentPath === '/wizard') {
//       return 3
//     }
//     if(this.props.currentPath === '/cards') {
//       return 4
//     }

//   }

//   render() {

//     // Tab markup
//     <div className={classes.tabContainer}>
//       <Tabs
//         value={this.current() || this.state.value}
//         indicatorColor="primary"
//         textColor="primary"
//         onChange={this.handleChange}
//       >
//         {Menu.map((item, index) => (
//           <Tab key={index} component={item.external ? MaterialLink : Link} href={item.external ? item.pathname : null} to={item.external ? null : {pathname: item.pathname, search: this.props.location.search}} classes={{root: classes.tabItem}} label={item.label} />
//         ))}
//       </Tabs>
//     </div>
//   }
// }


// export default withRouter(withStyles(styles)(Topbar))