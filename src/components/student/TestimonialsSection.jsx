import React from 'react';
import { assets, dummyTestimonial } from '../../assets/assets';

const TestimonialsSection = () => {
    return (
        <div className='pb-14 px-8 md:px-12'>
            <h2 className='text-3xl font-medium text-gray-800 text-center'>Testimonials</h2>
            <p className='md:text-base text-gray-500 mt-3 text-center'>
                Hear from our learners as they share their journeys of transformation, growth, and success, and
                how our <br /> platform has made a difference in their lives.
            </p>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-14 gap-8'>
                {dummyTestimonial.map((testimonial, index) => (
                    <div
                        className='text-sm text-left border border-green-500/30 pb-6 rounded-lg bg-white shadow-[0px_4px_15px_0px]
                         overflow-hidden shadow-black/5 max-w-sm'
                        key={index} // Add key here
                    >
                        <div className='flex items-center gap-4 px-5 py-4 bg-gray-500/10'>
                            <img className='h-12 w-12 rounded-full' src={testimonial.image} alt={testimonial.name} />
                            <div>
                                <h1 className='text-lg font-medium text-gray-800'>{testimonial.name}</h1>
                                <p className='text-gray-800/80'>{testimonial.role}</p>
                            </div>
                        </div>
                        <div className='p-5 pb-7'>
                            <div className='flex gap-0.5'>
                                {[...Array(5)].map((_, i) => (
                                    <img
                                        className='h-5'
                                        key={i} // Add key here
                                        src={i < Math.floor(testimonial.rating) ? assets.star : assets.star_blank}
                                        alt="star"
                                    />
                                ))}
                            </div>
                            <p className='text-gray-500 mt-5'>{testimonial.feedback}</p>
                        </div>
                        <a href="#" className='text-green-500 underline px-5'>Read More</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TestimonialsSection;
