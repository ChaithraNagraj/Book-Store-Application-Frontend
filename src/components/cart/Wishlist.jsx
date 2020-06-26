import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import bookImage from '../../assets/book.jpg';

class Wishlist extends Component {
    render() {
        return (
            <>
                {
                    this.props.wishlist.map(ele => {
                        return (
                            <div className='my-cart-main-div'>
                            <div className='order-summary-div'>
                                <Typography variant="h5">Wishlist</Typography>
                                <div className='book-image-details-div'>
                                    <div className='book-image-div'>
                                        {/* <img id='img-cart' src={ele.bookImage} alt='error' /> */}
                                        <img className='img' id='img-book' src={bookImage}/>

                                    </div>
                                    <div className='book-details-div'>
                                        <Typography variant="h5" >{ele.bookTittle}</Typography>
                                        <Typography>{ele.authorName}</Typography>
                                        <Typography>₹ {ele.price}</Typography>
                                    </div>
                                </div>
                            </div>
                            </div>
                        )
                    })

                }

            </>
        )
    }
}
export default Wishlist