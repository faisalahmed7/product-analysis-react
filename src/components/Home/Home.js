import React from 'react';


import laptop from '../../image/laptop.jpg'

const Home = () => {
    
    return (
        <div>
            <div className='flex justify-between mt-16 mb-20'>
                <div className="product-details ml-20 w-1/2">
                    <h3 className='text-5xl color text-gray-500 font-bold'>Gravity Laptop</h3>
                    <p className='text-xl py-8 text-justify'>The laptop drawing tablet is a very useful piece of hardware.
                        My laptop has a built-in microphone.
                        Simply power up your laptop and continue work.
                        Users can dock a laptop to their desktop setup.
                        His new laptop is state-of-the-art.
                        A laptop would be really useful for when I'm working on the train.
                        The battery can run a full-size laptop for 12 hours.
                        She used to work at her laptop until four in the morning.
                        It is significantly more compact than any comparable laptop, with no loss in functionality.
                        You can take your laptop on the plane as hand luggage.
                        This kind of laptop doesn't come cheap.</p>
                    <div >
                        <button className='text-xl bg-blue-400 rounded-lg border-0 p-2 text-left'>Show More Details</button>
                    </div>
                </div>
                <div className="img-container w-1/2  mr-20">
                    <img className="w-4/6 2 ml-20 rounded-xl border-2" src={laptop} alt=""></img>
                </div>
            </div>
            




        </div>
    );
};

export default Home;