import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import styled from 'styled-components';

const Container = styled.div`
width: 100px;
height: 100vh;
display: flex;
`
const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: #ff7f7f;
border-radius: 50%;
`

const Slider = () => {
  return (
    <Container>
        <Arrow>
            <ArrowLeftOutlinedIcon/>
        </Arrow>

         <Arrow>
            <ArrowRightOutlinedIcon/>
        </Arrow>
    </Container>
  )
}

export default Slider
