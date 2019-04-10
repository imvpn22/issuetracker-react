import React, { Component } from 'react';
import './App.css';
import Issues from './components/issues';

import { BASE_URL } from './config';

const API_URL = `${BASE_URL}/issues`;

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      issues: [],
      isSearching: false,
      queryText: ''
    }
  }

  componentDidMount() {
    // Get Issues from API
    this.getIssues();
  }

  getIssues = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(issues => {
        this.setState({issues});
      }).catch(err => {
        console.log(err);
      });
  };

  deleteIssue = (id) => {
    fetch(`${API_URL}/${id}`, {
      method: 'delete'
    }).then(res => res.json())
      .then(res => {
        console.log(res);

        let issues = this.state.issues;
        issues = issues.filter(issue => issue._id !== id);
        this.setState({issues});

      }).catch(err => {
        console.log(err);
      });
  };

  handleQuery = (event) => {
    event.preventDefault();

    this.setState({
      queryText: event.target.value
    }, () => { this.searchIssues(); });


  };

  searchIssues = () => {
    this.setState({ isSearching: true });
    let query = this.state.queryText;
    fetch(`${API_URL}?q=${query}`)
      .then(res => res.json())
      .then(issues => {
        this.setState({
          issues: issues,
          isSearching: false
        });
      }).catch(err => {
        this.setState({ isSearching: false });
      });
  };

  render() {
    return (
      <div className="container">
        <Issues
          issues={this.state.issues}
          deleteIssue={this.deleteIssue}
          isSearching={this.state.isSearching}
          handleQuery={this.handleQuery}
          queryText={this.state.queryText}
        />
        {/*<a href='/new-issue' className='add-issue-btn'>
            <i className="fas fa-plus"></i>
        </a>*/}
      </div>
    );
  }
}

export default App;
