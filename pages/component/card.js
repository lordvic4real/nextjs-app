// import pix from "../../component/pages/public/juice.jpg"
const Card = () => (
  <div className="card">
    <div className="front">
      <img src="../../public/juice.jpg" alt="Avatar" className="card-image" />
      <div className="container">
        <h3>
          Vitamin Juice <span className="price">$24.99</span>
        </h3>
        <p>
          Need a jump on your vitamins while drinking? Tired of popping the
          pills? Drink our vitamin enhanced juice, available in several
          flavours.
        </p>
      </div>
    </div>
    <style jsx>
      {`
        .card {
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          transition: 0.6s;
          width: 30%;
          height: 480px;
          background-color: white;
          margin: 5px 5px 5px 5px;
          border-radius: 10px;
          cursor: pointer;
          transform-style: preserve-3d;
        }

        .front {
          backface-visibility: hidden;
          position: absolute;
          top: 0;
          left: 0;
          height: 480px;
        }

        .price {
          color: red;
          font-weight: 800;
          font-size: 35px;
          text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.42);
        }

        .container {
          padding: 2px 16px;
          background-color: white;
          border-radius: 0 0 10px 10px;
        }

        .card-image {
          width: 100%;
          border-radius: 10px 10px 0 0;
        }
      `}
    </style>
  </div>
);

export default Card;
