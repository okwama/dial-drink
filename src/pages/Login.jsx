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
width: 25%;
padding: 20px;
background-color: white;

`;

const Form = styled.form`
display: flex;
flex-direction: column;
`;

const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`;

const Input = styled.input `
flex: 1;
min-width: 40%;
margin:10px 0;
padding: 10px;
`;



const Button = styled.button `
width: 80px;
border:none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
margin-bottom: 10px;
`;

const Link = styled.a`
margin: 5px 0px;
font-size: 12px;
text-decoration: underline;
cursor: pointer;
`;
const Login = () => {
  return (
    <Container>

<Wrapper>
            <Title>Sign In</Title>
            <Form>
                <Input placeholder = "username"/>
                <Input placeholder = "password"/>
                
                <Button>Login</Button>
                <Link>Do Not Remember The Password?</Link>
                <Link>Create A New Account?</Link>
            </Form>
        </Wrapper>
      
    </Container>
  )
}

export default Login
