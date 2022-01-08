import React from 'react';

function Hero() {
   return (
  <div>
    <div>
    <div className="w-full h-full bg-blue-800 top-0 left-0 abosolute opacity-40"></div>
    <div className="w-full h-full flex flex-col absolute top-0 left-0 justify-center items-center z-30">
        <div className="text-6xl font-bold text-white">You're next big adventure</div>
        <br />
        <div className="text-2xl text-white">See the world on your terms.</div>
    </div>
    <img src="https://picsum.photos/id/447/1920/700" />
    </div>
  </div>
   );
}

export default Hero;