import React, { Component } from 'react'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";



export class AddBook extends Component {
constructor(props) {
    super(props)

    this.state = {
         bookTitle : "",
         bookAuthor:"",
         bookCode:"",
         bookDescription:"",
         bookImage:""
    }
}
handlebookName = (event) => {
    this.setState({
        bookTitle : event.target.value
    })
}
handlebookAuthor=(event) =>{
    this.setState({
        bookAuthor :event.target.value
    })
}
handlebookDescription = (event) =>{
    this.setState({
        bookDescription : event.target.value
    })
}
handlebookCode =(event) =>{
    this.setState({
        bookCode:event.target.value
    })
}


    render() {
        return (
            <div className="flexDiv">
                <div className="flexDiv">
                        <TextField
                          id="outlined-name-input"
                             label="bookTitle"
                             placeHolder="write booktitle here"
                            name="name"
                            autoComplete="name"
                            margin="dense"
                            variant="filled"
                            value={this.state.bookTitle}
                            onChange={this.handlebookTitle}
                        />
                        </div>
                        <div>
                        <TextField
                          id="outlined-name-input"
                             label="bookAuthor"
                            name="name"
                            autoComplete="name"
                            margin="dense"
                            variant="filled"
                            value={this.state.bookAuthor}
                            onChange={this.handlebookAuthor}
                        />
                        </div>
                        <div>
                        <TextField
                          id="outlined-name-input"
                             label="bookCode"
                            name="name"
                            autoComplete="name"
                            margin="dense"
                            variant="filled"
                            value={this.state.bookCode}
                            onChange={this.handlebookCode}
                        />
                        </div>
                        <div>
                        <TextField
                          id="outlined-name-input"
                             label="bookDescription"
                            name="name"
                            autoComplete="name"
                            margin="dense"
                            variant="filled"
                            value={this.state.bookDescription}
                            onChange={this.handlebookDescription}
                        />
                        </div>
                        <div>
                        <TextField
                          id="outlined-name-input"
                             label="bookName"
                            name="name"
                            autoComplete="name"
                            margin="dense"
                            variant="filled"
                            value={this.state.bookName}
                            onChange={this.handlebookName}
                        />
                        </div>
                        <div>
                             <Button 
                                 variant="outlined"
                                 color="secondary"
                                 onClick={this.handleSubmit}
                            >
                                 Add Book
                            </Button>
                        </div>

            </div>
        )
    }
}

export default AddBook;
