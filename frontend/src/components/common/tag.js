import styled from 'styled-components';
import axios from 'axios';
import { useState } from 'react';
import Tagbtn from 'components/common/Tagbtn';
import "components/common/Tagbtn.css";

const categories = [
  {
    name: "lodging",
    text: "Accommodation",
  },
  {
    name: "landmark",
    text: "Landmark",
  },
  {
    name: "festival",
    text: "Festival",
  },
  {
    name: "food",
    text: "Dining",
  },
  {
    name: "leports",
    text: "Leisure",
  },
  {
    name: "shopping",
    text: "Shopping",
  },
  {
    name: "culture",
    text: "Culture",
  },
];

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
