import React from "react";
import CommentForm from "./ContactFormComponent";
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardBody,
  Breadcrumb,
  BreadcrumbItem
} from "reactstrap";
import Link from "react-router-dom/Link";


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
          <CommentForm />
        </div>
      )
    }
  }

  const DishDetailsComponent = (props) => {
    // console.log("dish component render method invoked");
    return (
      <div className="container">
        <div className="row">
        <Breadcrumb>
            <BreadcrumbItem>
              <Link to='/home'>Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link to='/menu'>Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>
              {props.dish.name}
            </BreadcrumbItem>
          </Breadcrumb>
        <div className="col-12">
          <h3>{props.dish.name}</h3>
          <hr />
        </div>
        <div className="col-12 col-md-5 m-1">
        <RenderDish dish={props.dish}/>
        </div>
        <div className="col-12 col-md-5 m-1">
        <RenderComments comments={props.comments}/>
        </div>
      </div>
      </div>
    
    );
  }
export default DishDetailsComponent;
