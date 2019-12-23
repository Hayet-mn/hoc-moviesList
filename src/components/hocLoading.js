import React from "react";
import Spinner from "./spinner";

const  HocLoading= WrappedComponent => {
  return class HocLoading extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isloading: true
      };

      setTimeout(
        () =>
          this.setState({
            isloading: !this.state.isloading
          }),
        2000
      );
    
    }

    render() {
      return this.state.isloading ?  (<Spinner />) : (<WrappedComponent {...this.props} />);
    }
  };
};

export default HocLoading;