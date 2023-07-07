import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import TestimonialCard from './CardInfo/TestimonialCard';

export default function TestimonialCarousel() {
    return (
        <Carousel infiniteLoop={true} autoPlay={true} interval={5000} showStatus={false}>
            <TestimonialCard name="Emily Thompson" description="This is the best restaurant I've ever been to! The Mediterranean food here is absolutely outstanding!" />
            <TestimonialCard name="Daniel Reynolds" description="The cozy vibes and delicious food at this place are unparalleled. My taste buds were in heaven!" />
            <TestimonialCard name="Sophia Roberts" description="I've tried many Mediterranean restaurants before, but none of them can match the flavor and texture of the dishes at this extraordinary restaurant." />
            <TestimonialCard name="Oliver Davis" description="Great food, friendly staff, and a cozy atmosphere make this place the perfect spot to have a wonderful dining experience with your loved ones." />
            <TestimonialCard name="Ava Walker" description="After a late night shift, the food at this restaurant refreshed me like nothing else. It's my go-to place for a delicious meal after work!" />
            <TestimonialCard name="Ethan Anderson" description="Coming here after a long flight from the East Coast was the best decision. The food tasted incredibly delicious and made my journey even more memorable!" />
            <TestimonialCard name="Isabella Martinez" description="The food at this place is fire! If you live in Chicago, you must give this restaurant a try. You won't be disappointed!" />
            <TestimonialCard name="Liam Wilson" description="This restaurant served as a perfect dinner for me after a long night of studying. I can't wait to order from here again. Highly recommended!" />
        </Carousel>
    )
}