import React, { useEffect } from 'react';

const ClassicCarsScreen = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return <div>Classic Cars</div>;
};

export default ClassicCarsScreen;
