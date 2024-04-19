import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { Add, Remove } from "@material-ui/icons";

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
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom:20px;

`;

const ProductAmount = styled.div`
font-size: 24px;
margin: 5px ;
`;

const ProductPrice = styled.div`
font-size:30px;
font-weight:200;

`;
const Hr = styled.hr`
background-color: #eee;
border:none;
height: 1px;
`;



const Summary = styled.div`
flex:1;
border: 0.5px sild lightgrey;
border-radius: 10px;
padding: 20px;
height: 50vh;
`
const SummaryTitle = styled.h1`
font-weight: 200;
`;
const SummaryItem = styled.div`
margin:30px 0px;
display: flex;
justify-content: space-between;
font-weight:${props=>props.type ==="total" && "500"};
font-size:${props=>props.type ==="total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
width: 100%;
padding: 10px;
background-color: black;
color: white;
font-weight: 600;
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
                        <Image src="https://ik.imagekit.io/bja2qwwdjjy/captain-morgan-spiced-gold_PplVWHj3n.jpg?updatedAt=1713295162077"/>
                        <Details>
                            <ProductName><b>Product:</b>Captain Morgan</ProductName>
                            <ProductId><b>ID:</b>989788632</ProductId>
                            <ProductSize><b>Size:</b>750ml</ProductSize>
                        
                        </Details>

                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountContainer>
                            <Add/>
                            <ProductAmount>2</ProductAmount>
                            <Remove/>
                        </ProductAmountContainer>
                        <ProductPrice>
                            Kes 2,300/=
                            </ProductPrice>
                    </PriceDetail>
                </Product>
                <Hr/>

                <Product>
                    <ProductDetail>
                        <Image src="https://ik.imagekit.io/bja2qwwdjjy/Hennessy-VS-_A1-RYC4lN.avif?updatedAt=1652309292223"/>
                        <Details>
                            <ProductName><b>Product:</b>Hennesy VS</ProductName>
                            <ProductId><b>ID:</b>989788632</ProductId>
                            <ProductSize><b>Size:</b>750ml</ProductSize>
                        
                        </Details>

                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountContainer>
                            <Add/>
                            <ProductAmount>2</ProductAmount>
                            <Remove/>
                        </ProductAmountContainer>
                        <ProductPrice>
                            Kes 2,300/=
                            </ProductPrice>
                    </PriceDetail>
                </Product>
            </Info>
            <Summary>
                 <SummaryTitle>
                    ORDER SUMMARY
                 </SummaryTitle>
                 <SummaryItem>
                    <SummaryItemText> Sub Total</SummaryItemText>
                    <SummaryItemPrice>Kes 4600</SummaryItemPrice>
                 </SummaryItem>

                 <SummaryItem>
                    <SummaryItemText> Estimated Shipping</SummaryItemText>
                    <SummaryItemPrice>Kes 600</SummaryItemPrice>
                 </SummaryItem>
                 <SummaryItem>
                    <SummaryItemText> Shipping Discount</SummaryItemText>
                    <SummaryItemPrice>Kes - 150</SummaryItemPrice>
                 </SummaryItem>
                 <SummaryItem type="total">
                    <SummaryItemText> Total</SummaryItemText>
                    <SummaryItemPrice>Kes 5050</SummaryItemPrice>
                 </SummaryItem>
                 <Button>CHECKOUT NOW</Button>

            </Summary>
        </Bottom>
    </Wrapper>
    <Footer/>
    </Container>
      
      )
}

export default Cart
