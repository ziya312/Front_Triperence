import styled from 'styled-components';
import axios from 'axios';
import { useState } from 'react';
import Tagbtn from 'components/common/Tagbtn';
import "components/common/Tagbtn.css";

const  categories = [
  {
      name: 75,
      text : "Leports"
  },
  {
    name : 76,
      text : "Landmark"
  },
  {
    name : 78,
      text : "Culture"
  },
  {
    name : 79,
      text : "Shopping"
  },
  {
    name : 80,
      text : "Accommodation"
  },
  {
    name : 82,
      text : "Dining"
  },
  {
    name : 85,
      text : "Festival"
  }
]







const Tag = ({ }) => {


  // setValues({...values, [e.target.name]: e.target.value});




  const Tagplace = styled.div`
  float: left;
  width: calc(28.95vw - 68px);
  margin-top: 18px;
`;


  return (
    <Tagplace>


{categories.map((c) => (



<label className='o'>
    <Tagbtn key={c.name} c={c}/>
  
</label>

))}     
      <hr style={{ float: 'left', marginLeft:'28px',marginTop:'10px',height: '0px', width: '25vw' }} />
    </Tagplace>
  );
};
export default Tag;
