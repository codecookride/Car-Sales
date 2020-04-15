import React from 'react';
import {clearFeature} from '../actions';
import {connect} from 'react-redux'

const AddedFeature = props => {
console.log("addedFeature props",props) 
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button"
      onClick={() => props.clearFeature(props)}
      >X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
 
  return {
   
  };
};

export default connect(
  mapStateToProps,
  { clearFeature}
)(AddedFeature);