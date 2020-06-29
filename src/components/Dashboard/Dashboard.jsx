import React, { Component } from 'react';
import Header from '../header/Header';
import DisplayBooks from '../Book/DisplayBooks';
import Footer from '../Footer/Footer';
import { AddCartRequestMethod, getCartAddedCountRequestMethod } from '../../services/CartServices';
import {getAllBooksRequestMethod,getBookByAuthorName, getBookCountRequestMethod} from '../../services/BookServices';
import MyCart from '../cart/MyCart';
import Abcart from '../cart/Abcart'
import Pagination from '../pagination/Pagination';
import {withRouter } from 'react-router-dom';
import Wishlist from '../cart/Wishlist';
import { responsiveFontSizes } from '@material-ui/core';

class Dashboard extends Component {

    state = {
        books: [],
        bookCount: 0,
        cartCount: 0,
        wishlistCount: 0,
        clickedId: [],
        addToBagBtnText: "Add to Bag",
        showMyCartComponent: false,
        filterArray: [],
        isSearching: false,
        filterArrayCount: 0,
        currentPage: 1,
        postsPerPage: 6,
        wishlist:[],
        ShowWishListComponent:false
    }
    
 componentDidMount() {
     this.getAllBooksRequestMethod();
     }

      getAllBooksRequestMethod = () => {
        let path = {
            path: "books"
        }
        getAllBooksRequestMethod(path).then((res) => {
            this.setState({ books: res.data.data });
            this.setState({
                maxNumOfPage: Math.ceil(this.state.books.length / this.state.todosPerPage)
            })
        }).catch((err) => {
            console.log(err);
        })
    }
    getCartAddedCountRequestMethod=()=> {
        let path={
            path:"books"
        }
        getCartAddedCountRequestMethod(path).then((res) => {
            this.setState({ books:res.data.data});
            this.setState({
            maxNumOfPage: Math.ceil(this.state.books.length / this.state.todosPerPage)
            })
        }).catch((err) => {
            console.log(err); 
        })
    }    // componentDidMount() {
    //     Promise.all([getAllBooksRequestMethod(), getBookCountRequestMethod(), getCartAddedCountRequestMethod()])
    //         .then(([getallBookResult, countBookResult,cartCountResult]) => {
    //             this.setState({
    //                 books: getallBookResult.data,
    //                    bookCount: countBookResult.data,
    //                 cartCount : cartCountResult.data
    //             })

    //         })
    // }


    paginate = (pageNumber) => {
        this.setState({
            currentPage: pageNumber
        })
        console.log("pagenumber after", this.state.currentPage);
    }


    cartIconClickedHandler = () => {
        let doesShowMyCartComponent = this.state.showMyCartComponent;
        this.setState({
            showMyCartComponent: !doesShowMyCartComponent
        })
    }

    wishListIconClickedHandler = () => {
        let doesShowWishListComponent = this.state.ShowWishListComponent;
        this.setState({
            ShowWishListComponent: !doesShowWishListComponent
        })
    }

    searchHandler = (event) => {
        let search = event.target.value;
        if (search.toString().length >= 1) {
            const newData = this.state.books.filter(item => {
                return (
                    item.bookName.toLowerCase().indexOf(search.toLowerCase()) > -1 ||
                    item.authorName.toLowerCase().indexOf(search.toLowerCase()) > -1
                );
            })
            this.setState({
                isSearching: true,
                filterArray: newData,
                filterArrayCount: newData.length
            })
        }
        else {
            this.setState({
                isSearching: false
            })
        }
    }

    sortByRelevanceHandler=(event)=>{
      const selection = event.target.value; 
      let books = this.state.books
      console.log(selection);
      if(selection.toString() === "price: low to high")
      {
        function compare(a, b) {
            let comparison = 0;
            if (a.price < b.price) {
              comparison = -1;
            } 
            return comparison;
          }
          this.setState({
            books:books.sort(compare)
            })
      }
      else{
        function compare(a, b) {
            let comparison = 0;
            if (a.price > b.price) {
              comparison = -1;
            }
            return comparison;
          }
          this.setState({
            books:books.sort(compare)
            })

      }
      
      
    }

    addToBagClickHandler = (clickedID, bookAvailable) => {
        let cartCount = this.state.cartCount;
        let clickedidArray = this.state.clickedId;
        clickedidArray.push(clickedID);
        console.log(clickedID);
        //console.log(window.sessionStorage.getItem("email"));
        this.setState({
            cartCount: cartCount + 1,
            clickedId: [...clickedidArray],
            addToBagBtnText: "Added to bag"
        })
        var cart = {
            Book_ID: clickedID,
            SelectBookCount: bookAvailable
        }
        const response = AddCartRequestMethod(cart);
        response.then(res => {
            console.log(res.data);
        })
    }

    addToWishlistClickHandler = async (clickedID) => {
        let wishlistCount = this.state.wishlistCount;
        let result = this.state.books.filter(ele=>{
            return ele.bookID == clickedID
        })
      await  this.setState({
            wishlistCount: wishlistCount + 1,
            wishlist : [...result]
        })
        console.log(this.state.wishlist)
    }
        render() {
        const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
        const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
        const currentPosts = this.state.books.slice(indexOfFirstPost, indexOfLastPost);
        return (
            <>
                <Header
                    cartCount={this.state.cartCount}
                    wishlistCount={this.state.wishlistCount}
                    cartIconClickedHandler={this.cartIconClickedHandler}
                    searchHandler={this.searchHandler}
                    wishListIconClickedHandler={this.wishListIconClickedHandler}
                />
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