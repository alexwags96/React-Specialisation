import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

function Rendercard({ item }) {
  return (
    <Card>
      <CardImg src={item.image} alt={item.name} />
      <CardBody>
        <CardTitle>
          <strong>{item.name}</strong>
        </CardTitle>
        {item.designation ? (
          <CardSubtitle>{item.designation}</CardSubtitle>
        ) : null}
        <CardText>{item.description}</CardText>
      </CardBody>
    </Card>
  );
}

function Home(props) {
  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col-12 col-md m-1">
          <Rendercard item={props.dish} />
        </div>
        <div className="col-12 col-md m-1">
          <Rendercard item={props.promotion} />
        </div>
        <div className="col-12 col-md m-1">
          <Rendercard item={props.leader} />
        </div>
      </div>
      <h4>{props.dish.name}</h4>
    </div>
  );
}

export default Home;
