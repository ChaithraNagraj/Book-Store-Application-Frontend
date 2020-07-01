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
    for (let index = 1; index <= Math.ceil(this.props.totalPosts / this.props.postsPerPage); index++) {
        pageNumbers.push(index);
    }

    return (
        <nav className="pagination-nav" id='pagination'>
            <ul className='pagination'style={{marginTop:'100%'}}>
                {
                    pageNumbers.map(number => (
                        <li key={number} className='page-item'>
                            <a onClick={() => this.paginate(number)} className='page-link'>
                                {number}
                            </a>
                        </li>
                    ))}
            </ul>
        </nav>
    );
}
}
export default Pagination;