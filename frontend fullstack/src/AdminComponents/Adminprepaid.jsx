// import React from 'react';
import Admincard from './Template/Admincard';

const initialOfferList = [
    {
      id: 1,
      price: "₹ 500",
      validity: "8 Months",
      subscription: "Disney Hotstar",
      benefits: "Truly Unlimited",
      link: "#",
    },
    {
      id: 2,
      price: "₹ 2990",
      validity: "6 Month",
      subscription: "Amazon Prime",
      benefits: "High-Speed Internet",
      link: "#",
    },
];

const Adminprepaid = () => {
    return (
        <div>
            <Admincard offerlists={initialOfferList} />
        </div>
    );
}

export default Adminprepaid;