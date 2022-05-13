import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import Dishdetail from "../components/DishdetailComponent";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDish: null,
    };
    console.log("Menu Component constructor is invoked");
  }

  componentDidMount() {
    console.log("Menu Component componentDidMount is invoked");
  }

  onDishSelected(dish) {
    this.setState({ selectedDish: dish });
  }

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card onClick={() => this.onDishSelected(dish)}>
            <CardImg
              width="100%"
              object
              src={dish.image}
              alt={dish.name}
            ></CardImg>
            <CardImgOverlay>
              <CardTitle heading>
                <strong>{dish.name}</strong>
              </CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    console.log("Menu Component render is invoked");

    return (
      <div className="container">
        <div className="row">{menu}</div>
        <Dishdetail dish={this.state.selectedDish} />
      </div>
    );
  }
}

export default Menu;
