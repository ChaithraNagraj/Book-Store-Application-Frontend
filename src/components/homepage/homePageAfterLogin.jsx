
import React from 'react';
import ToolBar from '../headerbar/headerAfterLogin';
import Footer from "../Footer/Footer";
import CustomPaginationActionsTable from '../paginationComponent/Pagination';
import LowerBar from '../lowerBarComponent/LowerBar';
import { getMethod } from '../../service/httpService.jsx';
import BookCard from '../BookCart/BookCart';
class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            books: [],
            currentPage: 1,
            todosPerPage:3,
            bookState: true,
            orderState: false,
            finalPage: false,
            selectedbook: {},
            maxNumOfPage:1,
            orderId: 0
        }
        this.setbooks = this.setbooks.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.setPageNumber = this.setPageNumber.bind(this);
        
    }

    // componentDidMount() {
    //     this.getAllBooks();
    // }
    componentWillMount() {
        this.setState({
            books: [
                {
                    id: 1,
                    title: "Don't Make Me to think",
                    author: "Steven King",
                    price: 150,
                    image:"../../dontMakeMeThink"
                },
                 {
                    id: 2,
                    title: "Java for Beginners",
                    author: "kalpesh mali",
                    price: 250,
                    image:""
                },
                {
                    id: 3,
                    title: "The girl Room 205",
                    author: "Durjoydat",
                    price: 219,
                    image:""
                },
                {
                    id: 4,
                    title: "Half Girlfiend",
                    author: "Chetha bagath",
                    price: 165,
                    image:""
                },
                {
                    id: 5,
                    title: "The wish i could tell you",
                    author: "Durjoy Datta",
                    price: 170,
                    image:""
                },



            ]
        });
    }

    
    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    setbooks(newbooks) {
        this.setState({
            books: newbooks.data,
        })
    }

    setPageNumber(pageNumber) {
        this.setState({
            currentPage: pageNumber,
        })
    }

    

    getAllBooks = () => {
        let path = {
            path: "books"
        }
        getMethod(path).then((res) => {
            this.setState({ books: res.data.data });
            this.setState({
                maxNumOfPage: Math.ceil(this.state.books.length / this.state.todosPerPage)
            })
        }).catch((err) => {
            console.log(err);
        })
    }

    render() {
        const { currentPage, todosPerPage } = this.state;
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = this.state.books.slice(indexOfFirstTodo, indexOfLastTodo);

        return (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <ToolBar function={this.setbooks} />
                <div style={{ minHeight: '573px' }}>
                    <div style={this.state.bookState ? { display: 'block' } : { display: 'none' }}>
                        <div style={{ width: '74%', margin: 'auto', marginTop: '6%' }}>
                            <LowerBar data={this.state.books.length} function={this.setbooks} />
                            {/* <BookCard
                             books={currentTodos}
                            cartCounter={this.cartCountHandler} 
                            //books={this.state.books} text={this.state.text} 
                            bookCount={this.state.isSearching ? this.state.filterArrayCount : this.state.bookCount}
                            books={this.state.isSearching ? this.state.filterArray : currentTodos}
                            showWishlist={this.state.showWishlist} 
                            disableButton={this.state.disableButton} 
                            clickedId={this.state.clickedId} 
                            /> */}
<div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            {
                                this.state.books.map(books => {
                                    return(
                                        <div>
                                        <div>
                                            <div className="book-details-div">

                                            <div className="img-book">
                                                                <img src={"books.image"} className="order-logo" />
                                              </div>
                                                
                                            {/* <CardActionArea >
                    <div className="bookImage">
                        <img alt="" width="100px" height="130px" />
                    </div>
                </CardActionArea> */}
                <div className="aligncontentbesidepic">
                                    <div >
                                        
                                                <h4 className="h4-div">{books.title}</h4>

                                            </div>
                                            <div className="author-name-div">
                                                <p>{books.author}</p>

                                            </div>
                                            <div className="book-price-div">
                                                <p>Rs.{books.price}</p>
                                            </div>
                                            <div className="quantity-div">
                                                {/* <button className="minus-btn" onClick={this.substractQuantity}><RemoveRoundedIcon className="icon" /></button> */}

                                                {/* <div className="input-type">
                                                    {this.state.quantity}
                                                </div> */}
                                                {/* <input type="text"  className="input-type"> */}

                                                {/* <button className="" onClick={this.addQuantity}><AddRoundedIcon className="icon" /></button> */}
                                                {/* <button className="" onClick={() => this.removeFromCart(books.cartId)} >Remove</button> */}
                                            </div>
                                        </div>   
                         </div>               
                                            {/* <div className="bookButtons">
                    <Button variant="outlined" style={{ backgroundColor: '#A03037', color: 'white', width: '40%', height: '10%', fontSize: '10px' }} onClick={() => this.buyBook(this.props.data)}>buynow</Button>
                </div> */}
               <button className="add-bag-button" style={{ backgroundColor: '#A52A2A', color: 'white', width: '20%', height: '10%', fontSize: '10px' }}
                            // onClick={()=>{this.props.cartCounter(ele.bookID,ele.numOfCopies)}}
                            >
                                ADD TO BAG
                            </button>

         <button className="wishlist-button" style={{  width: '10%', height: '20%', fontSize: '10px' }}
                            > WISHLIST</button>


                                        </div>

                                    </div>
                                    )
                                })
                            }
                        </div>

                        </div>
                        </div>
                        <div>
                        

                        </div>
                        
                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3%', marginTop: '2%' }}>
                            <CustomPaginationActionsTable perPage={this.state} function={this.setPageNumber}
                                incfunction={this.incrementCurrentPageNumber}
                                decfunction={this.decrementCurrentPageNumber}
                            />
                            
                        </div>
                    </div>
                   
                
                        

                   
                     

                    <div style={this.state.orderState ? { display: 'block' } : { display: 'none' }}>
                    </div>
                    <div style={this.state.finalPage ? { display: 'block' } : { display: 'none' }}>
                    </div>
                </div>
                
                <Footer />
            </div>
        );
    }

}
    
export default Home;