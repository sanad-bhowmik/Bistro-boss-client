import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import img from '../../../assets/home/review.png'


const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className="my-20">
            <SectionTitle subHeading="What Our Client Say" heading="Testimonials" />
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="my-16 mx-24 flex flex-col items-center">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <img className="h-[100px] w-[100px] mt-[48px] mb-[40px]" src={img} alt="" />
                            <p className="py-8">{review.details}</p>
                            <h3 className="text-2xl text-orange-400">{review.name}</h3>

                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>

    );
};

export default Testimonials;