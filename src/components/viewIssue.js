import React from 'react';
import Moment from 'moment';

import { BASE_URL } from '../config';

const API_URL = `${BASE_URL}/issues`;

class ViewIssue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      issue: {}
    }
  }

  componentDidMount() {

    let id = this.props.location.pathname.split('/')[2];

    fetch(`${API_URL}/${id}`).then(res => res.json())
    .then(issue => {
      this.setState({ issue });
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <div className='container'>

        <div className='issue-card form form-horizontal'>
            <div className='form-group center'>
              <h5>Issue Details</h5>
            </div>

            <div className='form-group'>
              <span className='col-sm-4'> Description </span>
              <span className='col-sm-8'>{this.state.issue.description}</span>
            </div>

            <div className='form-group'>
              <span className='col-sm-4'> Severity </span>
              <span className='col-sm-8'>{this.state.issue.severity}</span>
            </div>

            <div className='form-group'>
              <span className='col-sm-4'> Status </span>
              <span className='col-sm-8'>{this.state.issue.status}</span>
            </div>

            <div className='form-group'>
              <span className='col-sm-4'> Created Date </span>
              <span className='col-sm-8'>
                {Moment(this.state.issue.createdDate).format('Do MMM YYYY')}
              </span>
            </div>

            <div className='form-group'>
              <span className='col-sm-4'> Resolved Date </span>
              <span className='col-sm-8'>
                {Moment(this.state.issue.resolvedDate).format('Do MMM YYYY')}
              </span>
            </div>

            <div className='form-group'>
              <span className='col-sm-4'>
                <a href={'/issue/' + this.state.issue._id + '/edit'}>
                  <button className='btn btn-primary'> Edit </button>
                </a>
              </span>
              <span className='col-sm-offset-6 col-sm-8'>
                <a href={'/'}>
                  <button className='btn btn-danger'> Home </button>
                </a>
              </span>
            </div>

          </div>
      </div>
    )
  }
}

export default ViewIssue;
