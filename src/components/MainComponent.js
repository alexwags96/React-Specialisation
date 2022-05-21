import { Component } from "react";
import Home from "./HomeComponent";
import Menu from "./MenuComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import DishDetail from "./DishdetailComponent";

import {
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import { connect } from "react-redux";
import {
  postComment,
  fetchComments,
  fetchDishes,
  fetchPromos,
  fetchLeaders,
  postFeedback,
} from "../redux/ActionCreators";
import { actions } from "react-redux-form";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
    feedbackAdd: state.feedbackAdd,
  };
};

const mapDispatchToProps = (dispatch) => ({
  postComment: (dishId, rating, author, comment) =>
    dispatch(postComment(dishId, rating, author, comment)),
  fetchDishes: () => {
    dispatch(fetchDishes());
  },
  resetFeedbackForm: () => {
    dispatch(actions.reset("feedback"));
  },
  fetchComments: () => {
    dispatch(fetchComments());
  },
  fetchPromos: () => {
    dispatch(fetchPromos());
  },
  fetchLeaders: () => {
    dispatch(fetchLeaders());
  },
  postFeedback: (
    firstname,
    lastname,
    telnum,
    email,
    agree,
    contactType,
    message
  ) =>
    dispatch(
      postFeedback(
        firstname,
        lastname,
        telnum,
        email,
        agree,
        contactType,
        message
      )
    ),
});

class Main extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
          dishesLoading={this.props.dishes.isLoading}
          dishesErrMess={this.props.dishes.errMess}
          promotion={
            this.props.promotions.promotions.filter(
              (promo) => promo.featured
            )[0]
          }
          promosLoading={this.props.promotions.isLoading}
          promosErrMess={this.props.promotions.errMess}
          leader={
            this.props.leaders.leaders.filter((leader) => leader.featured)[0]
          }
          leadersLoading={this.props.leaders.isLoading}
          leadersErrMess={this.props.leaders.errMess}
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
        {/* <TransitionGroup>
          <CSSTransition
            // key={() => Location()}
            classNames="page"
            timeout={300}
          > */}

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
                dishes={this.props.dishes.dishes}
                isLoading={this.props.dishes.isLoading}
                errMess={this.props.dishes.errMess}
                comments={this.props.comments.comments}
                postComment={this.props.postComment}
              />
            }
          />
          <Route
            exact
            path="/contactus"
            element={
              <Contact
                resetFeedbackForm={this.props.resetFeedbackForm}
                postFeedback={this.props.postFeedback}
              />
            }
          />
          <Route
            exact
            path="/aboutus"
            element={
              <About
                leaders={this.props.leaders.leaders}
                leadersLoading={this.props.leaders.isLoading}
                leadersErrMess={this.props.leaders.errMess}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        {/* </CSSTransition>
        </TransitionGroup> */}
        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
