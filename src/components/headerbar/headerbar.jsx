import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import MenuBookTwoToneIcon from '@material-ui/icons/MenuBookTwoTone';
import { getMethod } from '../../service/httpService';
import Icon from "@material-ui/core/Icon";
// import "./css/headerBar";
// import "./headerBar.scss";
export default class ToolBar extends Component {

  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleGoToHome = this.handleGoToHome.bind(this);
  }

  handleChange(value) {
    this.setState({ value: value.target.value });
    this.search()
  }

  handleGoToHome(event) {
    // this.props.history.push('/')
    window.location.reload(false);

  }

  search() {
    let path = {
      path: 'searchBook?field=' + this.state.value
    }
    getMethod(path).then((res) => {
      this.props.function(res.data)
    })
      .catch((err) => {
        console.log(err);
      })
  }

  componentDidMount() {
    this.search();
  }

  render() {
    return (
      <div>
        <AppBar position="static" style={{ backgroundColor: ' #008060', position: 'fixed', top: '0' }}>
          <Toolbar>
            <Icon
              edge="start"
              color="inherit"
              aria-label="open drawer"
              style={{ marginLeft: '12%' }}
              onClick={() => this.handleGoToHome()}
            >
              <MenuBookTwoToneIcon />
            </Icon>
            <Typography onClick={() => this.handleGoToHome()}  style={{ marginLeft: '1%' }} variant="h6" noWrap>
              Bookstore    
            </Typography>
          
            <div className="searchBar">
              <SearchIcon style={{ color: '#ffffff', margin: '1%' }} />
              <InputBase
                placeholder="Type author, book name, subject, keyword..."
                style={{ width: '100%',color: '#ffffff' }}
                value={this.state.value} onChange={(value) => this.handleChange(value)}
              />
            </div>

          </Toolbar>
        </AppBar>
      </div >
    );
  }
}
