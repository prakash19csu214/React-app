import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import '../App.css';
import Header from './HeaderComponent';
import DishDetailsComponent from './DishDetailsComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import { COMMENTS } from '../shared/comments';
import { Switch, Route, Redirect } from 'react-router-dom';
class Main extends Component{

  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS 
    };
  }

  render() {

  const HomePage = () => {
    return(
      <Home dish={this.state.dishes.filter((dish)=> dish.featured)[0]} 
      promotion={this.state.promotions.filter((promo)=> promo.featured)[0]} 
      leader={this.state.leaders.filter((leader)=> leader.featured)[0]} />
    );
  }

  const DishWithId = ({match}) => {
    return(
      <DishDetailsComponent dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
      comments = {this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
      />
    )
  }

  const AboutUs = () => {
    return(
      <About leaders={this.state.leaders} />
    );
  }

  return (
    <div>   
      <Header />
      <Switch>
        <Route path= "/home" component={HomePage} />
        <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
        {/* exact used to prevent switch from confusion with other menu links */}
        <Route path="/menu/:dishId" component={DishWithId} />
        <Route exact path="/contactus" component={Contact} />
        <Route exact path="/aboutus" component={AboutUs} />
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </div>
  );
  }
}

export default Main;
