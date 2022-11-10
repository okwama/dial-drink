import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Container = styled.div``;
const Wrapper = styled.div`
padding: 20px;
`;
const Title = styled.h1`
font-weight: 300;
text-align: center;
`;

const Top = styled.div`
display: flex;
align-items: center;
justify-content:space-between;
padding: 20px;
`;
const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border: ${props=>props.type === "filled" && "none"};
background-color: ${props=>
         props.type === "filled" ? "black"  : "transparent"};
color: ${props=>props.type === "filled" && "white"};
`;
const TopTexts = styled.div``;
const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;
`;
const Bottom = styled.div`
display: flex;
justify-content:space-between;

`;


const Info = styled.div`
flex:3 ;
`;


const Product = styled.div`
display: flex;
justify-content:space-between;
`;
const ProductDetail = styled.div`
flex:2;
display: flex;
`;


const Image = styled.img`
width: 300px;
display: flex;


`;

const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content:space-evenly;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductSize = styled.span``;

const PriceDetail = styled.div`

flex:1;
`;

const Summary = styled.div`
flex:1;

background-color: ;

`;




const Cart = () => {
  return (
    <Container>
    <Navbar/>
    <Announcement/>
    <Wrapper>
        <Title>Your Cart</Title>
        <Top>
            <TopButton>Continue Shopping</TopButton>
            <TopTexts>
            <TopText>Shopping Cart(2)</TopText>
            <TopText>Your Wishlist(0)</TopText>
            </TopTexts>
            <TopButton type="filled">CheckOut Now</TopButton>
        </Top>
        product info 
        <Bottom>
            <Info>
                <Product>
                    <ProductDetail>
                        <Image src="https://ik.imagekit.io/bja2qwwdjjy/beercat_W9kK1HzJC.png?ik-sdk-version=javascript-1.4.3&updatedAt=1652303132687"/>
                        <Details>
                            <ProductName><b>Product:</b>Hennesy XO</ProductName>
                            <ProductId><b>ID:</b>989788632</ProductId>
                            <ProductSize><b>Size:</b>750ml</ProductSize>
                        
                        </Details>

                    </ProductDetail>
                    <PriceDetail>
                        price
                    </PriceDetail>
                </Product>
            </Info>
            <Summary>Sumary</Summary>
        </Bottom>
    </Wrapper>
    <Footer/>
    </Container>
      
      )
}

export default Cart
