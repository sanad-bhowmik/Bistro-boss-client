import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featureimg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-8 my-20'>
            <SectionTitle subHeading='check it out' heading="Featured items" />
            <div className='md:flex justify-center items-center py-20 px-36 pt-12 bg-slate-500 bg-opacity-40'>
                <div>
                    <img src={featureimg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Aug 20,2024</p>
                    <p className='uppercase'>where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos laudantium fuga nam? Accusantium, expedita corrupti recusandae quae itaque, voluptatem saepe eveniet corporis deserunt incidunt officiis doloribus cum minima quidem. Iure quod quae placeat. Officiis ullam deserunt nisi, dolore pariatur accusantium at ipsam assumenda ipsa, quo nemo, iste harum consequuntur consectetur.\</p>
                    <button className='btn btn-outline border-0 border-b-4'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;