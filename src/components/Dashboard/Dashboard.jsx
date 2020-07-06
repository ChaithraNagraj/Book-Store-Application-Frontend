import React, { Component } from 'react';
import Header from '../header/Header';
import DisplayBooks from '../Book/DisplayBooks';
import Footer from '../Footer/Footer';
import { AddCartRequestMethod, getCartAddedCountRequestMethod } from '../../services/CartServices';
import {getAllBooksRequestMethod,getBookByPriceAsc,getBookByPriceDesc,getBookByAuthorName, getBookCountRequestMethod} from '../../services/BookServices';
import Abcart from '../cart/Abcart';
// import MyCart from '../cart/Cart';
import { AddWishlistRequestMethod } from '../../services/wishlistServics';
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
//     cartCount=(res)=>{
//         this.setState({ cartCount:res.data.data.cartBooks.totalBooksInCart});

//    }

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
        const selection =event.target.value;
        let books= this.state.books
        console.log(selection);
        if(selection,toString() == "price: low to high"){    
        const cartCountRes = getBookByPriceAsc();
            cartCountRes.then(
                res => {
                    this.setState({
                        book: res.data.data
                    }) 
                }
            )
           
        }

       else{
          const response = getBookByPriceDesc();
                const booksDesc = getBookByPriceDesc();
                booksDesc.then(
                    res => {
                        this.setState({
                            books: res.data.data
                        }) 
                    }
                )
           
    }
  }
    
    addToBagClickHandler = (clickedID) => {
        let cartCount = this.state.cartCount;
        let clickedid = this.state.clickedId;
        clickedid.push(clickedID);
        console.log(clickedID);
        //console.log(window.sessionStorage.getItem("email"));
        this.setState({
            cartCount: cartCount + 1,
            clickedId: [...clickedid],
            addToBagBtnText: "Added to bag"
        })
        var cart = {
            // Book_ID: clickedID,
            bookId: clickedID,
        
            // SelectBookCount: bookAvailable
        }
        console.log(cart)
        const response = AddCartRequestMethod(cart);
        response.then(res => {
            console.log(res.data);
        })
    }
    
    addToWishlistClickHandler = (clickedID) => {
        let wishlistCount = this.state.wishlistCount;
        let clickedid = this.state.clickedId;
        // clickedid.push(clickedID);
        console.log(clickedID);
        //console.log(window.sessionStorage.getItem("email"));
        this.setState({
            wishlistCount: wishlistCount + 1,
            clickedId: [...clickedid],
            WishlistBtnText: "Added to wishlist"
        })
        var wishlist = {
            // Book_ID: clickedID,
            bookId: clickedID,
        
            // SelectBookCount: bookAvailable
        }
        console.log(wishlist)
        const response = AddWishlistRequestMethod(wishlist);
        response.then(res => {
            console.log(res.data);
        })
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