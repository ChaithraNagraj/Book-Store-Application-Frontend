import React, { Component } from 'react';
// import logo from '../logo.svg';
import Container from '@material-ui/core/Container';
import GridView from '../gridViewComponent/GridView';
export class BookCard extends Component {
    render() {
        return (
            <Container maxWidth="lg">
                <div className="card-container" >
                    {
                        this.props.books.map((ele) => {
                            return (
                                <div className="book-card-div" key={ele.bookID}>
                                    <img src={ ele.bookImage } className="App-logo" />
                                    <div className="book-item-info">
                                        <div className="book-title-div">
                                            <h4 id="book-title-by-id" >{ele.bookTitle}</h4>
                                        </div>
                                        <div className="author-name-div">
                                            <p>{ele.authorName}</p>
                                        </div>
                                        <div className="book-price-div">
                                            <p>₹ {ele.bookPrice}/-</p>
                                        </div>
                                    </div>
                                    <div className="button-div">
                            
                            {
                             this.props.clickedId.includes(ele.bookID)?
                             <>
                                <button className="added-bag-button" 
                                onClick={()=>{this.props.cartCounter(ele.bookID, ele.numOfCopies)}}
                                disabled={this.props.disableButton} 
                                >
                                   Added To Bag
                                </button>
                                </>
                            :<>
                            <button className="add-bag-button" 
                            onClick={()=>{this.props.cartCounter(ele.bookID,ele.numOfCopies)}}
                            >
                                Add To Bag
                            </button>
                            
                            <button className="wishlist-button">Wishlist</button>
                            </>
                            }
                            
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </Container>
           
        );
    }
}
export default BookCard;