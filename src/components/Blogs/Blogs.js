import React from 'react';

const Blogs = () => {
    return (
        <div className='grid md:grid-cols-1 gap-8 mt-16'>
            <div className='border rounded-lg bg-slate-200 px-3 py-6 mx-auto w-1/2 mb-6 text-justify '>
                <h3 className='text-center text-3xl font-bold mb-6'>What is Context API</h3>
                <p className=''>The Context API was first introduced in react version 16.3 as an experiment.
                    The Context API is a special react component structure which is provided by the React framework.
                    Mainly it enable us to share our specific data or value for all level components without the problem of props drilling.
                    It is introduced mainly to solve the problem of props drilling in react.
                    That means it is the alternative of props drilling to pass the data from grandparent to child or child to father, or child to others and so on.</p>
            </div>

            <div className='border rounded-lg bg-slate-200 px-3 py-6 mx-auto w-1/2  text-justify'>
                <h3 className='text-center text-3xl font-bold mb-6'>What is Semantic Tags</h3>
                <p className=''>Semantic Tag or HTML  are those tag or HTML that refers to the tags which provide a meaning to an HTML webpage rather than just a normal presentation.
                    Normal HTML was created  to describe the documents in the early stage of internet.
                    But semantic tags make HTML more feasible and comprehensible to use, to understand etc.
                    Mainly it clears a good communication by it's meaning to both the developers and the browsers.
                    Some of them are header, nav, article, section, aside, footer,main etc. </p>
            </div>

        </div>
    );
};

export default Blogs;