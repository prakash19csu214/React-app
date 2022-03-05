import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  CardText,
  CardBody,
  Media,
} from "reactstrap";

class DishDetailsComponent extends Component {
  constructor(props) {
    super(props);
  }

  renderDish(dish) {
    if (dish != null) {
      return (
        <Card>
          <CardImg width="100%" object src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div></div>;
    }
  }

  renderComments(comments) {
    if (comments == null) {
      <div></div>;
    } else {
      const cmmnt = comments.map((comment) => {
        return (
          <li key={comment.id}>
            <p><b> -- {comment.author}, {comment.date}</b></p>
            <p>{comment.comment}</p>
          </li>
        );
      });

      return(
        <div>
          <h4>Comments</h4>
          <ul className="list-unstyled">
        {cmmnt}
          </ul>
        </div>
      )
    }
  }

  render() {
    const dish = this.props.selectedDish;
    if(dish==null){
      return(
      <div></div>
      );}
    const dishComments = this.renderComments(dish.comments);
    const dishItem = this.renderDish(dish);
    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">{dishItem}</div>
        <div className="col-12 col-md-5 m-1">{dishComments}</div>
      </div>
    );
  }
}
export default DishDetailsComponent;
