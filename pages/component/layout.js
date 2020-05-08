import Header from "./header.js";
import Head from "next/head";

const Layout = (props) => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    {props.children}
    {/* <Footer /> */}
    <style jsx>
      {`
        .container {
          margin-right: 5%;
          margin-left: 5%;
        }
      `}
    </style>
  </div>
);

export default Layout;
