import styled from 'styled-components';
import axios from 'axios';
import { useState } from 'react';


const Tagbtn = ({ c }) => {
  const { text, name } = c;

  return (  
  <>
    <input style={{display:'none'}} type="radio" name='a' />

{/* {name}이 주솟값입니다 */}
    <div>{text}</div>
  </>
  );
};

export default Tagbtn;