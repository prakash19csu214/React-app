import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardBody,
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
            <p><b> -- {comment.author}, {new Intl.DateTimeFormat ('en-US', {year: 'numeric' , month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</b></p>
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
      <div className="container">
        <div className="row">
        <div className="col-12 col-md-5 m-1">{dishItem}</div>
        <div className="col-12 col-md-5 m-1">{dishComments}</div>
      </div>
      </div>
      
    );
  }
}
export default DishDetailsComponent;
