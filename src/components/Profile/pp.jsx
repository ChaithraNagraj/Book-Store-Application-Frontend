import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import { Card, Snackbar, IconButton } from "@material-ui/core";
import Registration from '../user/Registration';
import Login from '../user/Login';
import "./profile.css";
class profile extends  Component {
    constructor(props) {
        super(props)
        this.state = {
   SignUp:"",
   Login:  ""  
}
    }

    // onClickSignupHandler () {
    //     //  this.props.history.push('../../Registration')
    //     // window.location.assign('./Registration');

    //         }
    onClickSignupHandler = () => {
        let doesShowRegistration
    }

            wishListIconClickedHandler = () => {
                let doesShowWishListComponent = this.state.ShowWishListComponent;
                this.setState({
                    ShowWishListComponent: !doesShowWishListComponent
                })
            }
        
    
            onClickLoginpHandler () {
                // this.props.history.push('../../Login')
                // window.location.assign('./Login');

                   }
       
    







                   render() {

return (
            <>
                
                {
                    // this.state.showMyCartComponent ?<MyCart />
                    this.state.showMyCartComponent ?<Abcart />
                        : this.state.ShowWishListComponent ? 
                        <Wishlist
                            wishlist={this.state.wishlist}
                        /> :
                        <>
                            <DisplayBooks
                                books={this.state.isSearching ? this.state.filterArray :currentPosts}
                                bookCount={this.state.isSearching ? this.state.filterArrayCount : this.state.bookCount}
                                TotalCount={this.state.books.length}
                                onChangePaginationHandler={this.onChangePaginationHandler}
                                addToBagClickHandler={this.addToBagClickHandler}
                                addToWishlistClickHandler={this.addToWishlistClickHandler}
                                clickedId={this.state.clickedId}
                                addToBagBtnText={this.state.addToBagBtnText}
                                sortByRelevanceHandler={this.sortByRelevanceHandler}
                            />
                            <Pagination postsPerPage={this.state.postsPerPage}
                                totalPosts={this.state.books.length}
                                paginateNumber={this.paginate} />
                        </>
                }

                <Footer />
            </>
        )

    }
}

export default withRouter(Dashboard);