import React from "react";
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardBody,
} from "reactstrap";


  // constructor(props) {
  //   super(props);
  // }  We dont need this here

  // componentDidMount(){
  //   console.log("Dish component did mount invoked");
  // }

  // componentDidUpdate(){
  //   console.log("dish component did update invoked");
  // }

  function RenderDish({dish}) {
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

  function RenderComments({comments}) {
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

  const DishDetailsComponent = (props) => {
    // console.log("dish component render method invoked");
    if(props.selectedDish==null){
      return(
      <div></div>
      );}
    else{
    return (
      <div className="container">
        <div className="row">
        <div className="col-12 col-md-5 m-1">
        <RenderDish dish={props.selectedDish}/>
        </div>
        <div className="col-12 col-md-5 m-1">
        <RenderComments comments={props.selectedDish.comments}/>
        </div>
      </div>
      </div>
    
    );
  }
}
export default DishDetailsComponent;