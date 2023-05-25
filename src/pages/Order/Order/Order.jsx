import { useState } from 'react';
import order from '../../../assets/shop/banner2.jpg';
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import FoorCard from '../../../components/SectionTitle/FoodCard/FoorCard';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


const Order = () => {
    const categories = ['salad','pizza', 'soup','desserts', 'drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();

    const desserts = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const drinks = menu.filter(item => item.category === 'drinks')
    return (
        <div>
             <Helmet>
                <title>Bistro Boss | Order</title>
            </Helmet>
            <Cover img={order} title="Order Food" />
            <Tabs defaultIndex={tabIndex} onSelect={(index) => console.log(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soups</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel> <OrderTab items={salad}></OrderTab> </TabPanel>
                <TabPanel> <OrderTab items={pizza}></OrderTab> </TabPanel>
                <TabPanel> <OrderTab items={soup}></OrderTab> </TabPanel>
                <TabPanel> <OrderTab items={desserts}></OrderTab> </TabPanel>
                <TabPanel> <OrderTab items={drinks}></OrderTab> </TabPanel>

            </Tabs>
        </div>
    );
};

export default Order;