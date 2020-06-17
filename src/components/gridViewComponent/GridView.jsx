import React, { Component } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import BookCard from '../Bookcart/BookCart';

const useStyles = createMuiTheme({
    root: {
        flexGrow: 1,
    }
});

class GridView extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <MuiThemeProvider theme={useStyles}>
                <div className={useStyles.root} style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                    {this.props.data.map(o => (
                        <BookCard data={o} function={this.props.function} />
                    ))}
                </div>
            </MuiThemeProvider>
        );
    }
}


export default GridView;