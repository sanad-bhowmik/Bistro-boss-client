import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')

    return (
        <section className='mb-16'>
            <SectionTitle heading="From Our Menu" subHeading="Popular Items" />
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <button className='btn btn-outline border-0 border-b-4 text-2xl h-[ 64px] w-[236px] mt-[48px] mb-[130px] ml-[542px]'>View Full Menu</button>
        </section>
    );
};

export default PopularMenu;