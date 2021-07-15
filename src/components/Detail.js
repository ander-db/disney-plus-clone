import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import db from "../firebase"

function Detail() {

	const { id } = useParams();
	const [movie, setMovie] = useState();

	console.log(id);


	useEffect(() => {
		// Grab the movie info from the DB=
		db.collection("movies")
			.doc(id)
			.get()
			.then((doc) => {
				if (doc.exists) {
					// save the movie data
					setMovie(doc.data());
				}
				else {
					// Redirect to home page
					

				}
			})
	}, [id])

	console.log(movie);

	return (
		<Container>
			{movie && (
				<>
					<Background>
						<img src={movie.backgroundImg} />
					</Background>
					<ImageTitle>
						<img src={movie.titleImg} />
					</ImageTitle>
					<Controls>
						<PlayButton>
							<img src="/images/play-icon-black.png" />
							<span>PLAY</span>
						</PlayButton>

						<TrailerButon>
							<img src="/images/play-icon-white.png" />
							<span>TRAILER</span>
						</TrailerButon>

						<AddButton>
							<span>+</span>
						</AddButton>

						<GroupWatchButton>
							<img src="/images/group-icon.png" />
						</GroupWatchButton>
					</Controls>
					<Subtitles>
						{movie.subTitle}
					</Subtitles>
					<Description>
						{movie.description}
					</Description>
				</>
			)}


		</Container>
	)
}

export default Detail


const Container = styled.div`
  position: relative;
  min-height: calc(100vh-250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  margin-top: 20px;
`;

const Background = styled.div`
  left: 0px;
  opacity: 0.8;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;
  img {
    width: 100vw;
    height: 100vh;
    @media (max-width: 768px) {
      width: initial;
    }
  }
`;
const ImageTitle = styled.div`
  align-items: flex-end;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0px auto;
  height: 20vw;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;
  img {
	  margin-top: 30px;
    max-width: 600px;
    min-width: 200px;
    width: 30vw;
  }
`;


const Controls = styled.div`
	display: flex;
	align-items: center;
`;

const PlayButton = styled.button`
	border-radius: 4px;
	font-size: 15px;
	display: flex;
	align-items: center;
	height: 56px;
	background-color: rgb (249, 249, 249);
	border: none;
	padding: 0px 24px;
	margin-right: 22px;
	letter-spacing: 1.8px;
	cursor: pointer;

	&:hover {
			background: rgb(198, 198, 198);
	}
`;

const TrailerButon = styled(PlayButton)`
	background: rgb(0, 0, 0, 0.3);
	border: 1px solid rgb(249, 249, 249);
	color: rgb(249, 249, 249);
	text-transform: uppercase;

`;



const AddButton = styled.button`
	width: 44px;
	height: 44px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	border: 2px solid white;
	background-color: rgba(0, 0, 0, 0.6);
	cursor: pointer;

	margin-right: 16px;
	span {
		font-size: 30px;
		color: white;
	}

`;

const GroupWatchButton = styled(AddButton)`
	background: rgb(0, 0, 0)
`;


const Subtitles = styled.div`
	color: rgb(249, 249, 249);
	font-size: 15px;
	min-height: 20px;
	margin-top: 26px;

`

const Description = styled.div`
	line-height: 1.4;
	font-size: 20px;
	margin-top: 16px;
	color: rgb(249, 249, 249);

`