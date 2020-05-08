const Header = () => (
  <div className="bg">
    <h1>Author quiz app with next.js</h1>
    <p>Select the book written by the author shown</p>
    <style jsx>
      {`
        h1 {
          font-size: 40px;
          font-weight: bold;
        }
        p {
          font-size: 20px;
          font-weight: 400;
        }
        .bg {
          background-color: papayawhip;
          hieght: 300px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}
    </style>
    ;
  </div>
);

export default Header;
