import React from "react";
// import { bindActionCreators } from "redux";
// import { initStore, intialCards, addItem } from "../store";
// import withRedux from "next-redux-wrapper";
import Layout from "./component/layout";
import Card from "./component/card";
import data from "../data/data.json";

export default class Home extends React.Component {
  static async getInitialProps() {
    // return { cards: data };
  }
  render() {
    return (
      <Layout>
        <div className="Grid">
          {this.props.cards.map((card) => {
            <Card key={card.id} />;
          })}
        </div>

        <style jsx>{`
          html,
          body {
            margin: 0;
            padding: 0;
            font-family: sans-serif;
            text-align: center;
            background: linear-gradient(
                rgba(0, 0, 0, 0.25),
                rgba(0, 0, 0, 0.25)
              ),
              url("/static/background.jpg") no-repeat center center fixed;
            background-size: cover;
          }

          .Grid {
            margin: 5%;
            display: flex;
            flex-flow: row;
            flex-wrap: wrap;
          }

          .static-logo {
            height: 150px;
            position: fixed;
            margin-left: auto;
            margin-right: auto;
            top: 20px;
            left: 0;
            right: 0;
            z-index: 99;
          }

          .App-header {
            height: 150px;
            padding: 20px;
            color: white;
          }
        `}</style>
      </Layout>
    );
  }
}
