import React from 'react';
import Moment from 'moment';

import { BASE_URL } from '../config';

const API_URL = `${BASE_URL}/issues`;

class NewIssue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      issue: {}
    }
  }

  handleDescriptionChange = (event) => {
    let issue = this.state.issue;
    issue.description = event.target.value;
    this.setState({ issue });
  };

  handleSeverityChange = (event) => {
    let issue = this.state.issue;
    issue.severity = event.target.value;
    this.setState({ issue });
  };

  handleStatusChange = (event) => {
    let issue = this.state.issue;
    issue.status = event.target.value;
    this.setState({ issue });
  };

  handleCreatedDateChange = (event) => {
    let issue = this.state.issue;
    issue.createdDate = event.target.value;
    this.setState({ issue });
  };

  handleResolvedDateChange = (event) => {
    let issue = this.state.issue;
    issue.resolvedDate = event.target.value;
    this.setState({ issue });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    let issue = this.state.issue;

    fetch(`${API_URL}`, {
        method: 'post',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(issue)
      }
    ).then(res => res.json())
    .then(newIssue => {
      this.props.history.push(`/issue/${newIssue._id}/view`);
    }).catch(err => {
      console.log(err);
    });

  };

  render() {
    return (
      <div className='container'>

        <form
          className='form form-horizontal new-issue-form issue-card'
          onSubmit={e => this.handleSubmit(e)}>

          <div className='form-group'>
            <h4>New Issue</h4>
          </div>

          <div className='form-group'>
            <label className='control-label col-sm-3' htmlFor='description'>
              Description
            </label>
            <textarea
              rows='4'
              className='col-sm-9'
              required
              id='description'
              value={this.state.issue.description}
              onChange={e => this.handleDescriptionChange(e)}
              placeholder='Enter Description of the Issue'
             />
          </div>

          <div className='form-group'>
            <label className='control-label col-sm-3' htmlFor='severity'>
              Severity
            </label>
            <select
              className='col-sm-9'
              required
              id='severity'
              value={this.state.issue.severity}
              onChange={e => this.handleSeverityChange(e)}>
              <option value=''>Select an option</option>
              <option value='Critical'>Critical</option>
              <option value='Major'>Major</option>
              <option value='Minor'>Minor</option>
             </select>
          </div>

          <div className='form-group'>
            <label className='control-label col-sm-3' htmlFor='status'>
              Status
            </label>
            <select
              className='col-sm-9'
              required
              id='status'
              value={this.state.issue.status}
              onChange={e => this.handleStatusChange(e)}>
              <option value=''>Select an option</option>
              <option value='Open'>Open</option>
              <option value='In Progress'>In Progress</option>
              <option value='Closed'>Closed</option>
             </select>
          </div>

          <div className='form-group'>
            <label className='control-label col-sm-3' htmlFor='createdDate'>
              Created Date
            </label>
            <input
              type='date'
              className='col-sm-9'
              required
              id='createdDate'
              value={Moment(this.state.issue.createdDate).format('YYYY-MM-DD')}
              onChange={e => this.handleCreatedDateChange(e)}
             />
          </div>

          <div className='form-group'>
            <label className='control-label col-sm-3' htmlFor='resolvedDate'>
              Resolved Date
            </label>
            <input
              type='date'
              className='col-sm-9'
              required
              id='resolvedDate'
              value={Moment(this.state.issue.resolvedDate).format('YYYY-MM-DD')}
              onChange={e => this.handleResolvedDateChange(e)}
             />
          </div>

          <div className='form-group'>
            <span className='col-sm-4'>
              <button className="btn btn-primary" type='submit'>
                Create
              </button>
            </span>
          </div>
        </form>
        <span className='col-sm-offset-6 col-sm-8'>
          <a href={'/'}>
            <button className='btn btn-danger'> Home </button>
          </a>
        </span>

      </div>
    )
  }
}

export default NewIssue;
