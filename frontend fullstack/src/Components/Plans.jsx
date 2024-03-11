
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const offerList = [
    {
      price: "₹ 1499",
      validity: "2 Months",
      subscription: "Disney Hotstar",
      benefits: "Truly Unlimited",
      link: "#",
    },
    {
      price: "₹ 999",
      validity: "1 Month",
      subscription: "Amazon Prime",
      benefits: "High-Speed Internet",
      link: "#",
    },
    {
        price: "₹ 1499",
        validity: "2 Months",
        subscription: "Disney Hotstar",
        benefits: "Truly Unlimited",
        link: "#",
      },
      {
        price: "₹ 999",
        validity: "1 Month",
        subscription: "Amazon Prime",
        benefits: "High-Speed Internet",
        link: "#",
      },
    // Add more offers as needed
];

// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 2,
//   slidesToScroll: 1
// };

const Plans = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    const amountx= 250
    var options = {
      key: "rzp_test_gs53Ffayhc0t6X",
      key_secret: "QqLcxJhbf5IjkKpnAfQIrjvd",
      amount: amountx*100,
      currency: "INR",
      name: "RechargeNow",
      description: "for testing purpose",
      handler: function (response) {
        alert(response.razorpay_payment_id)
      },
      prefill: {
        name: "DEEPAK",
        email: "deepakprabu1234@gmail.com",
        contact: "8754988838"
      },
      notes: {
        address: "Sri krishna college of Engineering and Technology"
      },
      theme: {
        color: "#3399cc"
      }
    }

    var pay = new window.Razorpay(options)
    pay.open()
  }
  return (
    <div className='flex flex-col'>
      <div className="py-4">
        <h1 className="text-2xl font-bold text-white">Popular Plans</h1>
      </div>
      <div className="flex gap-2 text-gray-900">
        {/* <Slider {...settings}> */}
          {offerList.map((offer, index) => (
            <div key={index} className="inline-block">
              <div className=" border-2 rounded-xl p-2 w-60  mt-2 flex flex-col white:bg-gray-900">
                <div className="flex justify-between py-2">
                  <div>
                    <h1 className="text-2xl font-bold text-[#01c293]">{offer.price}</h1>
                  </div>
                  <div className="flex flex-col">
                    <h1>Validity:</h1>
                    <h1>{offer.validity}</h1>
                  </div>
                </div>
                <div className="py-1">
                  <a href={offer.link} className="text-blue-600">View Details</a>
                </div>
                <div className="flex py-2 justify-between">
                  <div>
                    <h1>Validity: <br /> {offer.validity}</h1>
                  </div>
                  <div>
                    <h1>Benefits :<br /> {offer.benefits}</h1>
                  </div>
                </div>
                <div className="py-2">
                  <h1>Subscriptions:</h1>
                  <h1>{offer.subscription}</h1>
                </div>
                <div className="py-4 w-full justify-center items-center mx-auto">
                  {/* <div>
                    <button className="border px-[25%] py-1 bg-blue-600 hover:bg-blue-700 rounded-2xl">Recharge</button>
                  </div> */}
                  <div className="py-4 w-full justify-center items-center mx-auto">
                {/* <Link to={`/plan/view/${index}`} className="border px-[25%] py-1 bg-blue-600 hover:bg-blue-700 rounded-2xl">
                  Recharge
                </Link> */}
                <button onClick={(e) => handleSubmit(e)} className="border px-[25%] py-1 bg-blue-600 hover:bg-blue-700 rounded-2xl">
                  Recharge
                </button>
              </div>
                </div>
              </div>
            </div>
          ))}
        {/* </Slider> */}
      </div>
    </div>
  );
};


Plans.propTypes = {
  links: PropTypes.array.isRequired, // Or use PropTypes.arrayOf(PropTypes.shape({ ... })) for specific structure
};

export default Plans;