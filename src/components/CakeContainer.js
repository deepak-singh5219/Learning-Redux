import React from 'react';
import { connect } from 'react-redux'; 
import { buyCake } from '../Redux';
import toast from 'react-hot-toast';



const CakeContainer = (props) => {
  const {numOfCakes,buyCake} = props;
  
  const CakeBuy = () => {
    if(numOfCakes===0) {
      toast.error('Cakes Finished!!!');
      return;
    } 

    buyCake();
    toast.success("Cake Buy Successfull!!!");
  }
  return (
    <div>
        <h1>Cake Container: {numOfCakes}</h1>
        <button onClick={CakeBuy}>Buy Cake</button>
    </div>
  )
}

const mapStateToProps = (state) => {
      return {
        numOfCakes:state.numOfCakes
      }
}

const mapDispatchToProps = (dispatch) => {
      return {
        buyCake: () => dispatch(buyCake())
      }

}
export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer);

