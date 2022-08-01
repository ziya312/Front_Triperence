import styled, {css} from 'styled-components';


const categories = [
  {
    name: 'all',
    text: 'All',
  },
  {
    name: 75,
    text: 'Leports',
  },
  {
    name: 76,
    text: 'Landmark',
  },
  {
    name: 78,
    text: 'Culture',
  },
  {
    name: 79,
    text: 'Shopping',
  },
  {
    name: 80,
    text: 'Accommodation',
  },
  {
    name: 82,
    text: 'Dining',
  },
  {
    name: 85,
    text: 'Festival',
  },
];

const CategoriesBlock = styled.div`
  display:flex;
  padding:1rem;
  width 768px;
  margin:0 auto;
  @media screen and (max-width: 768px){
    width:100%;
    overflow-x:auto;
  }
`;
const Category = styled.div`
  font-size: 1rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #77aefc;
  }

  ${(props) =>
    props.active &&
    css`
      font-weight: 600;
      border-bottom: 2px solid #22b8cf;
      color: #77aefc;
      &:hover {
        color: #77aefa;
      }
    `}
  &+& {
    margin-left: 1rem;
  }
`;

const Categories = ({ onSelect, category }) => {
  // setValues({...values, [e.target.name]: e.target.value});

  return (
    <CategoriesBlock>
      {categories.map((c) => (
        <Category key={c.name} active={category === c.name} onClick={() => onSelect(c.name)}>
          {c.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
};
export default Categories;
