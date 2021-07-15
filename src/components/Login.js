import React from 'react'
import styled from 'styled-components'


function Login() {
	return (
		<Container>
			<CTA>
				<CTALogoOne src="/images/cta-logo-one.svg" />
				<SignUp>GET ALL THERE</SignUp>
				<Description>
				Disney+ con Star es más de lo que te imaginas. Cientos de series y películas. Más emociones, más drama, más suspense. Disfruta de Star como parte de tu suscripción a Disney+.
				</Description>
				<CTALogoTwo src="/images/cta-logo-two.png" />
			</CTA>
		</Container>
	)
}

export default Login



const Container = styled.div`
	position: relative;
	height: calc(100vh - 70px);
	display: flex;
	align-items: center;
	justify-content: center;

	

	&:before {
		position: absolute;
		top: 70px;
		left: 0;
		bottom: -70px;
		right: 0;
		z-index: -1;
		content: "";

		background-position: top;
		background-size: cover;
		background-image: url("/images/login-background.jpg");
	}
`

const CTA = styled.div`
	max-width: 650px;
	padding: 80px 40px;
	width: 80%;
	flex-direction: column;
	display: flex;
	justify-content: center;
	align-items: center;
	
`

const CTALogoOne = styled.img`

`
const CTALogoTwo = styled.img`
	width: inherit;
`

const SignUp = styled.a`
	width: 100%;
	background-color: #0063e5;
	font-weight: bold;
	padding: 17px 0;
	justify-content: center;
	color: #f9f9f9;
	border-radius: 4px;
	text-align: center;
	margin-top: 8px;
	margin-bottom: 12px;
	cursor: pointer;

	transition: all 250ms;

	&:hover {
		background: #0483ee;
	}

`




const Description = styled.div`
	font-size: 11px;
	letter-spacing: 1.5px;
	text-align: center;
	line-height: 1.5;

`

