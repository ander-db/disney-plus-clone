import React, { useEffect } from 'react'
import styled from 'styled-components'

import db from '../firebase.js'
import { useDispatch } from 'react-redux'
import { setMovies } from "../features/movie/movieSlice.js"

// Mis componentes
import ImageSlider from './ImageSlider.js'
import Viewers from './Viewers.js'
import Movies from './Movies.js'

function Home() {

	const dispatch = useDispatch(); 

	useEffect(() =>{
		db.collection("movies").onSnapshot((snapshot) => {
			let tempMovies = snapshot.docs.map((doc) => {
				return {id: doc.id, ...doc.data() }
			})

			dispatch(setMovies(tempMovies));

		})
	
	}, [])

	return (
		<Container>
			<ImageSlider />
			<Viewers />
			<Movies />
		</Container>
	
	)
}

const Container = styled.main`
	position: relative;
	min-height: calc(100vh - 250px);
	overflow-x: hidden;
	display: block;
	top: 70px;
	padding: 0 calc(3.5vw + 5px);
	&:after {
		background: url("/images/home-background.png") center center / cover
		no-repeat fixed;
		content: "";
		position: absolute;
		inset: 0px;
		opacity: 1;
		z-index: -1;
	}
`;
export default Home
