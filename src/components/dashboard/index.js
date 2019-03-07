import React, { Component } from 'react';
import { connect } from "react-redux";
import  SideMenu  from '../../containers/SideMenu/SideMenu'
import  HeaderMenu  from '../../containers/HeaderMenu/HeaderMenu';
import  PageWrapper  from '../../containers/PageWrapper/PageWrapper';
import  Footer  from '../../containers/Footer/Footer';
import jQuery from 'jquery';

class Dashboard extends Component {
  constructor(props){
    jQuery("body").addClass("cbp-spmenu-push");
    super(props);
  }

  // componentDidMount(){
  //   console.log("this.props", this.props.match.params)
  // }

  render() {
    return (
    <div className="main-content">
      <SideMenu></SideMenu>
      <HeaderMenu></HeaderMenu>
      <PageWrapper inner={this.props.match.params}></PageWrapper>
      <Footer></Footer>
    </div>
    );
  }
}
const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(Dashboard);
