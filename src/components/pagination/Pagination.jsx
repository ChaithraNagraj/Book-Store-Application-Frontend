import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

class Pagination extends Component {
    paginate=(pageNumber) =>{
        console.log("page number", pageNumber);

        this.props.paginateNumber(pageNumber)
    }

    render() {
        const pageNumbers = [];
        let i = 0;
        for (i = 1; i <= Math.ceil(this.props.totalPosts / this.props.postsPerPage); i++) {
            pageNumbers.push(i);
        }

        return (

<div>
        <IconButton color="primary" component="span" >
          <KeyboardArrowLeftIcon onClick={()=>this.props.decfunction()}/>
        </IconButton>
        {pageNumbers.map(o => (
          <Button color="black" className="buttonFocus"
            onClick={() => this.handleClick(o)}>{o}</Button>
        ))}
        <IconButton color="primary" component="span" style={{ border: '2px' }}>
          <KeyboardArrowRightIcon onClick={()=> this.props.incfunction()}/>
        </IconButton>
      </div>
    )
  }
}

export default Pagination;