import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);
  }

  renderDish(dish) {
    if (dish != null) {
      const commentsDish = dish.comments.map((comment) => {
        return (
          <div key={indexedDB}>
            <ul class="list-unstyled">
              <li>
                {comment.comment} <br /> <br />
                -- {comment.author},{" "}
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }).format(new Date(Date.parse(comment.date)))}
              </li>
            </ul>
          </div>
        );
      });
      return (
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5 m-1">
              <Card>
                <CardImg
                  width="100%"
                  object
                  src={dish.image}
                  alt={dish.name}
                ></CardImg>
                <CardBody>
                  <CardTitle heading>
                    <strong>{dish.name}</strong>
                  </CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
              </Card>
            </div>
            <div className="col-12 col-md-5 m-1">
              <h4>Comments </h4>
              {commentsDish}
            </div>
          </div>
        </div>
      );
    } else {
      <div></div>;
    }
  }

  render() {
    // console.log(this.props.dish.comments[this.props.dish.id].author);
    return this.renderDish(this.props.dish);
  }
}

export default DishDetail;
