import { Component } from "react";
import Home from "./HomeComponent";
import Menu from "./MenuComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import DishDetail from "./DishdetailComponent";

import { Routes, Route, Navigate } from "react-router-dom";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.props.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    };

    // const DishWithId = () => {
    //   let params = useParams();
    //   return (
    //     <DishDetail
    //       dish={
    //         this.props.dishes.filter(
    //           (dish) => dish.id === parseInt(params.dishId, 10)
    //         )[0]
    //       }
    //       comments={
    //         this.props.comments.filter(
    //           (comment) => comment.dishId === parseInt(params.dishId, 10)
    //         )
    //       }
    //     />
    //   );
    // };

    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={HomePage()} />
          <Route
            exact
            path="/menu"
            element={<Menu dishes={this.props.dishes} />}
          />
          <Route
            path="/menu/:dishId"
            element={
              <DishDetail
                dishes={this.props.dishes}
                comments={this.props.comments}
              />
            }
          />
          <Route exact path="/contactus" element={<Contact />} />
          <Route
            exact
            path="/aboutus"
            element={<About leaders={this.props.leaders} />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Main);
