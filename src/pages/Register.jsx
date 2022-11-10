import styled from "styled-components"



const Container = styled.div`
width: 100vw;
height: 100vh;
background:linear-gradient(rgba(255,255,255,0.4),rgba(255,255,255,0.4)
), url("https://ik.imagekit.io/bja2qwwdjjy/dylan-de-jonge-pe9T4ROjpzQ-unsplash_mbFu2B96K.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1657970481389")
center;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;


`;

const Wrapper = styled.div`
width: 40%;
padding: 20px;
background-color: white;

`;

const Form = styled.form`
display: flex;
flex-wrap: wrap;
`;

const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`;

const Input = styled.input `
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;
`;

const Agreement = styled.span`
font-size: 12px;
margin: 20px 0px;
`;

const Button = styled.button `
width: 80px;
border:none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;


`;

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Create An Account</Title>
            <Form>
                <Input placeholder = "name"/>
                <Input placeholder = "last name"/>
                <Input placeholder = "username"/>
                <Input placeholder = "email"/>
                <Input placeholder = "password"/>
                <Input placeholder = "confirm password"/>
                <Agreement>By creating an account, I consent to the processing of my personal 
                    data in accordance with the <b>PRIVACY POLICY</b>
                    
                </Agreement>
                <Button>CREATE</Button>
            </Form>
        </Wrapper>
      
    </Container>
  )
}

export default Register
