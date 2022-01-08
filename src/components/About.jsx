import React from 'react';
import AboutUs from './AboutUs';
import Founders from './Founders';

const About = () => {
	return (
		<div className='relative my-10 mx-25'>
			<div>
				<AboutUs />
			</div>
			<div>
				<Founders />
			</div>
		</div>
	);
};

export default About;
