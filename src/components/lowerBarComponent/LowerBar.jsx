import React, { Component } from "react"
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import { Dropdown } from 'react-native-material-dropdown';
// import Button from '@material-ui/core/Button'
// import TextField from '@material-ui/core/TextField';
import { getMethod } from '../../service/httpService.jsx';
// import { Dropdown } from "react-native-material-dropdown";
import './lowerbar.css';


export default class LowerBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            displayMenu: false,
          };
     
       this.showDropdownMenu = this.showDropdownMenu.bind(this);
       this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
     
     };
     
     showDropdownMenu(event) {
         event.preventDefault();
         this.setState({ displayMenu: true }, () => {
         document.addEventListener('click', this.hideDropdownMenu);
         });
       }
     
       hideDropdownMenu() {
         this.setState({ displayMenu: false }, () => {
           document.removeEventListener('click', this.hideDropdownMenu);
         });
     
       }
       searchHandler = (event) => {
        let search = event.target.value;
        console.log("searching for", search);
        if (search.toString().length >= 1) {
            const newData = this.state.books.filter(item => {
                return (
                    item.bookTitle.toLowerCase().indexOf(search.toLowerCase()) > -1 ||
                    item.authorName.toLowerCase().indexOf(search.toLowerCase()) > -1
                );
            })
            this.setState({
                isSearching: true,
                filterArray: newData,
                filterArrayCount: newData.length
            })
            console.log("filter array", this.state.filterArray);
        }
        else {
            this.setState({
                isSearching: false
            })
        }
    }
    sortingHandler=(event)=>{
      const selection = event.target.value;
      let books = this.state.books;
      if (selection === "Price: low to high")
      {
          function compare(a, b){
          let comparison = 0
          if(a.bookPrice<b.bookPrice){
              comparison=-1
          }
              return comparison
          }
          this.setState({
              books: books.sort(compare)
          })
      }
      else{
          function compare(a, b){
              let comparison = 0
              if(a.bookPrice > b.bookPrice){
                  comparison=-1
              }
                  return comparison
              }
              this.setState({
                  books: books.sort(compare)
              })
      }
  }

    render() {
        return (
            <p>
                <div >
                    <Toolbar>
                        <Typography edge="start" variant="h6">
                            Books <Typography variant="caption" style={{ color: 'grey' }} gutterBottom>({this.props.data} items)</Typography>
                        </Typography>
                        <div className="dropdown" style = {{ marginLeft: '60%',background:"white",width:"200px"}} >
         
         {/* <div className="button" onClick={this.showDropdownMenu}> Sort by relevance </div> */}

                                <div class="sort-by-div">
                                    <select onChange={this.sortingHandler} className="select-bar">
                                        <option >Sort By</option>
                                        <option>Price: high to low</option>
                                        <option>Price: low to high</option>
                                        <option>Newest arrivals</option>
                                    </select>
                                </div>

       </div>
             </Toolbar>
                </div>
            </p>
        )
    }

}