sizes = { width: 2, length: 5, height: 1 };

// function volumeOfBox(sizes) {
// 	return sizes.width*sizes.length*sizes.height;
// }

const volumeOfBox = ({height,width,length}) => height*length*width;


console.log(volumeOfBox(sizes));