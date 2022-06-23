 import  styled  from "styled-components";
// import { styled } from "@material-ui/core";
import { categories } from "../data";

import CategoryItem from "./CategoryItem";

const Container = styled.div`
display: flex;
flex-wrap: wrap;
padding: 10px;

`;


const Categories = () => {
  return (
    <Container>
      {categories.map(item=>(
          <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  )
}

export default Categories
