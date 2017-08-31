import React from 'react';
import GifItem from './GifItem';

// stateless functional component
//simple display component use this short syntax 
const GifList = (props) => {
	const gifItems = props.gifs.map((image) => {
		return <GifItem key ={image.id} gif={image} />
		console.log(gifItems);
	});
	
	return (
		<ul>{gifItems}</ul>	
	);
};


export default GifList;
