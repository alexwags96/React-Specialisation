import React, { useState } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link, useParams } from "react-router-dom";
import CommentForm from "./CommentForm";

function RenderDish({ dish }) {
  return (
    <div className="col-12 col-md-5 m-1">
      <Card>
        <CardImg width="100%" object src={dish.image} alt={dish.name}></CardImg>
        <CardBody>
          <CardTitle heading>
            <strong>{dish.name}</strong>
          </CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

function RenderComments({ comments }) {
  if (comments != null) {
    return (
      <div className="col-12 col-md-5 m-1">
        <h4>Comments </h4>
        <ul class="list-unstyled">
          {comments.map((comment) => {
            return (
              <li key={comment.id}>
                <p>{comment.comment} </p>
                <p>-- {comment.author}</p>
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }).format(new Date(Date.parse(comment.date)))}
              </li>
            );
          })}
        </ul>
        <CommentForm />
      </div>
    );
  } else {
    return <div></div>;
  }
}

const DishDetail = (props) => {
  let params = useParams();
  const dishParam = props.dishes.filter((dish) => dish.id == params.dishId)[0];
  // console.log(dishParam);
  const commentsParam = props.comments.filter(
    (comment) => comment.dishId == params.dishId
  );
  // console.log(commentsParam);
  if (dishParam != null) {
    return (
      // <div>{params.dishId}</div>
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{dishParam.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Menu</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <RenderDish dish={dishParam} />
          <RenderComments comments={commentsParam} />
        </div>
      </div>
    );
  } else return <div></div>;
};

export default DishDetail;
