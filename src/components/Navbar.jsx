import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import {mobile} from "../responsive"


const Container = styled.div`
height: 60px;
${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({ padding: "10px 0px" })}
`
const Left = styled.div`
flex:1;
display: flex;
align-items: center;
`;

const Language = styled.span`
font-size: 14px;
cursor: pointer;
${mobile({ display: "none" })}
`
const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 28px;
padding: 5px;

`
const Input = styled.input`
border: none;
flex:8;
${mobile({ Width: "40px" })}
`;

const Center = styled.div`
flex:1;
text-align: center;
`;

const Logo = styled.h1`
font-weight:bold;
${mobile({ fontSize: "20px" })}
`

const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({ flex:2,justifyContent: "center" })}
`;

const MenuItem = styled.div`
font-size: 14px;
cursor:pointer;
margin-left: 25px;
${mobile({ fontSize: "12px" , marginLeft:"10px" })}
`
const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            {/* search bar ya navbar */}
        <Left>
            <Language>EN</Language>
            <SearchContainer>
                <Input placeholder='Search'/>
               <Search style={{color:"gray", fontSize:16}}/>
            </SearchContainer>
        </Left>
{/* logo component  */}
        <Center><Logo>Dial Drink</Logo></Center>

{/* cart na reg na signin */}
        <Right>

         <MenuItem>Register</MenuItem>
         <MenuItem>Sign In</MenuItem>
         <MenuItem>
         <Badge badgeContent={4} color="primary">
         <ShoppingCartOutlined/>
         </Badge>
         </MenuItem>
      </Right>
    </Wrapper>
    </Container>
  )
}

export default Navbar
