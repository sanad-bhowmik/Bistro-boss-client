import React from 'react';
import FoorCard from '../../../components/SectionTitle/FoodCard/FoorCard';

const OrderTab = ({items}) => {
    return (
        <div className='grid md:grid-cols-3 gap-10'>
            {
                items.map(item => <FoorCard
                    key={item._id}
                    item={item}
                ></FoorCard>)
            }
        </div>
    );
};

export default OrderTab;