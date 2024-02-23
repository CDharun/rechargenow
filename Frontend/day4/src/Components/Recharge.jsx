import '../assets/Css/recharge.css'

function Recharge() {
  return (
    <div className="container">
      <div className="service-tabs">
        <button className="active">Mobile</button>
      </div>
      <div className="input-field">
        <label htmlFor="jio-number">Mobile Number:</label>
        <input type="text" id="jio-number" name="jio-number" />
      </div>
      <div className="input-field">
        <label htmlFor="operator">Select Operator:</label>
        <select id="operator" name="operator">
          <option value="Jio">Jio</option>
          <option value="Airtel">Airtel</option>
          <option value="Vodafone">Vodafone</option>
          <option value="Idea">Idea</option>
        </select>
      </div>
      <div className="input-field">
        <button>Recharge</button>
      </div>
      <div className="promotional-message">
        Recharge with a ₹2999 plan for a year full of digital delights.
      </div>
      <div className="app-interface">
        <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1708412561/recharge/phone_gif_othmbz.gif" alt="App Interface" />
      </div>
    </div>
  );
}

export default Recharge;