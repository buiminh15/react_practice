import React from 'react'
import Treko from '../hoc/Treko';

const Contact = (props) => {
  // setTimeout(()=> {
  //   props.history.push('/about')
  // }, 2000)
    // console.log(props)
    return (
      <div className="container">
        <h4 className="center">Contact</h4>
        <p>
          lorem loremloremloremloremloremlorem loremlorem mloremlorem loremlorem
        </p>
      </div>
    );
}

export default Treko(Contact);