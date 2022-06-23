import styled from 'styled-components'
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Container = styled.div``;
const Title = styled.h1`
margin: 20px;
`;

const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
`;

const Filter = styled.div`
margin: 20px;
`;
const FilterText = styled.span`
font-size: 20px;
font-weight: 600;
margin-right: 20px;
`;
const Select = styled.select`
padding: 10px;
margin-right: 20px;
`;
const Option = styled.option``

const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>Whiskey</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select>
                    <Option disabled selected>
                        Drink
                    </Option>
                    <Option>Whiskey</Option>
                    <Option>Vodka</Option>
                    <Option>Wine</Option>
                    <Option>Champagne</Option>
                    <Option>Brandy</Option>
                    <Option>Cognac</Option>
                    <Option>Beer</Option>
                    <Option>Tequila</Option>
                    <Option>Rum</Option>
                </Select>
                <Select>
                    <Option disabled selected>
                        Filter
                    </Option>
                    <Option>Single Malt</Option>
                    <Option>Blended Scotch</Option>
                    <Option>Bourbon</Option>
                    <Option>Johnnie Walker</Option>
                    <Option>Diageo</Option>
                    <Option>Tennessee</Option>
                    <Option>Irish</Option>
                    <Option>William Grant & Sons</Option>
                </Select>
                </Filter>
            <Filter>
                <FilterText>Sort Products: </FilterText>
                <Select>
                    <Option disabled selected>
                        Popular
                    </Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (dsc)</Option>
                    <Option>Newest</Option>
                    
                </Select>
                
                </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>


    </Container>
  )
}

export default ProductList
