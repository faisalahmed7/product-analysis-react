import React from 'react';
import useReviews from '../../customHooks/useReviews';
import ReviewDetails from '../ReviewDetails/ReviewDetails';



const Reviews = () => {

    // by calling custom hook

    const [reviews] = useReviews();
    console.log(reviews)


    return (
        <div>
            <h2 className='text-4xl text-cyan-700 text-center'>Total Review: {reviews.length}</h2>

            <div className='mt-10  md:ml-60 p-3 mx-5 grid md:grid-cols-3 bg-white gap-6'>
                {
                    reviews.map(review => <ReviewDetails key={review.id} review={review}></ReviewDetails>)
                }
            </div>

        </div>
    );
};

export default Reviews;