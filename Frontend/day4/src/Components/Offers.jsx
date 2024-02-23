import '../assets/Css/offer.css'

const Offers= () => {
  const cards = [
    {
      title:'BSNL',
      description: '',
      image: 'https://res.cloudinary.com/dloadmcdu/image/upload/v1708598427/recharge/bsnl_xc17e6.jpg'
    },
    {
      title: 'AIRTEL',
      description: '',
      image: 'https://res.cloudinary.com/dloadmcdu/image/upload/v1708598448/recharge/air_bdzfvd.svg'
    },
    {
      title: 'JIO',
      description: '',
      image: 'https://res.cloudinary.com/dloadmcdu/image/upload/v1708598441/recharge/jio_eyplnt.png'
    },
    {
      title: 'BSNL',
      description: '',
      image: 'https://res.cloudinary.com/dloadmcdu/image/upload/v1708598427/recharge/bsnl_xc17e6.jpg'
    },
    {
      title: 'JIO',
      description: '',
      image: 'https://res.cloudinary.com/dloadmcdu/image/upload/v1708598441/recharge/jio_eyplnt.png'
    },
    {
      title: 'AIRTEL',
      description: '',
      image: 'https://res.cloudinary.com/dloadmcdu/image/upload/v1708598448/recharge/air_bdzfvd.svg'
    },
  ];
  
  return (
    <div className="cards-containercc">
      {cards.map((card, index) => (
        <div key={index} className="cardcc">
          {card.image && <img src={card.image} alt={card.title} />}
          <div className="card-contentcc">
            <button>{card.title}</button>
            <p>{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Offers;