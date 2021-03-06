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
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";
import { Fade, FadeTransform, Stagger } from "react-animation-components";


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
        <FadeTransform in 
          transformProps={{
            exitTransform: 'scale(0.5) translateY(-50%)'
          }}>
        <Card>
          <CardImg width="100%" object src={baseUrl + dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
        </FadeTransform>
      );
    } else {
      return <div></div>;
    }
  }

  function RenderComments({comments, postComment, dishId}) {
    if (comments == null) {
      <div></div>;
    } else {
      const cmmnt = comments.map((comment) => {
        
        return (
          <Fade in>
          <li key={comment.id}>
            <p><b> -- {comment.author}, {new Intl.DateTimeFormat ('en-US', {year: 'numeric' , month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</b></p>
            <p>{comment.comment}</p>
          </li>
          </Fade>
        );
      
      });

      return(
        <div>
          <h4>Comments</h4>
          <Stagger in>{
          <ul className="list-unstyled">
            
        {cmmnt}
          </ul>}
          </Stagger>
          
          <CommentForm dishId={dishId} postComment={postComment}/>
        </div>
      )
    }
  }
  

  const DishDetailsComponent = (props) => {
    // console.log("dish component render method invoked");
    if (props.isLoading) {
      return(
        <div className="container">
          <div className="row">
            <Loading />
          </div>
        </div>
      );
    }
    else if (props.errMess) {
      return(
        <div className="container">
          <div className="row">
            <h4>{props.errMess}</h4>
          </div>
        </div>
      );
    }
    else if(props.dish!=null)
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
        <RenderComments comments={props.comments}
        postComment={props.postComment}
        dishId={props.dish.id}
           />
        </div>
      </div>
      </div>
    
    );
  }
export default DishDetailsComponent;
