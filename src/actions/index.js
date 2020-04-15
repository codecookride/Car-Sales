export const ADD_FEATURE= "ADD_FEATURE";
export const Clear= "clear";


export const addFeature = newFeature => {
    return {
      type: ADD_FEATURE,
      payload: newFeature
    };
  };

  export const clearFeature = (clearIt) => {
    console.log("clearIT",clearIt)
    return {
      type: Clear,
      payload:clearIt
    };
  };