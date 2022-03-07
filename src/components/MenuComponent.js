import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle,} from "reactstrap";


  // componentDidMount(){
  //   console.log("Menu component did mount invoked");
  // }

  function MenuDishItem({dish, onClick}){
    return(
    <Card key={dish.id}
    onClick={() => onClick(dish.id)}>
    <CardImg width="100%" object src={dish.image} alt={dish.name} />
    <CardImgOverlay body className="ml-5">
      <CardTitle heading>{dish.name}</CardTitle>
    </CardImgOverlay>
    </Card>
    );
  }

  const Menu = (props) => {
    const menu = props.dishes.map((dish) => {
      return (
        <div  className="col-12 col-md-5 mt-5">
          <MenuDishItem dish={dish} onClick={props.onClick}/>
        </div>
      );
    }
  );

    return (
      <div className="container">
        <div className="row">
        {menu}
        </div>
      </div>
    );
  }
    

export default Menu;
