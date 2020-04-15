import React from 'react';
import {connect} from "react-redux";

const Total = props => {
  console.log("total props", props)
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.add.additionalPrice}</h4>
    </div>
  );
};



const mapStateToProps = state => {
  console.log(state);
  return {
    add:state
  };
};

export default connect(
  mapStateToProps,
  { }
)(Total);