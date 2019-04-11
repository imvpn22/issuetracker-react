import React from 'react';
import Moment from 'moment';

import ColFilters from './colFilters';

class Issues extends React.Component {
  render() {
    return (
      <div className='container'>

        <div className='issues-header'>
          <div className='issues-heading'>Issues List</div>
          <div className='search-box'>
            <input type='text'
              placeholder='Search for issues'
              value={this.props.queryText}
              onChange={e => this.props.handleQuery(e)}
              required={true}
              autoFocus={true}/>
            <button type='submit' value='Search'>
                <i className={(this.props.isSearching ?
                  'fas fa-circle-notch fa-spin' : 'fas fa-search')}></i>
            </button>
          </div>
        </div>

        <ColFilters
          filters={this.props.filters}
          updateFilter={this.props.updateFilter}
        />

        <table className='table table-bordered table-hover'>
        <tbody>
        <tr>
          <th> S.N. </th>
          <th className={!this.props.filters.description ? 'hidden' : ''}> Description </th>
          <th className={!this.props.filters.severity ? 'hidden' : ''}> Severity </th>
          <th className={!this.props.filters.status ? 'hidden' : ''}> Status </th>
          <th className={!this.props.filters.createdDate ? 'hidden' : ''}> Created Date </th>
          <th className={!this.props.filters.resolvedDate ? 'hidden' : ''}> Resolved Date </th>
          <th> View </th>
          <th> Edit </th>
          <th> Delete </th>
        </tr>

        {this.props.issues.length > 0 ? this.props.issues.map((issue, index) => (
          <tr key={issue._id}>
            <td> {index + 1} </td>
            <td className={!this.props.filters.description ? 'hidden' : ''}>
              {issue.description}
            </td>
            <td className={!this.props.filters.severity ? 'hidden' : ''}>
              {issue.severity}
            </td>
            <td className={!this.props.filters.status ? 'hidden' : ''}>
              {issue.status}
            </td>
            <td className={!this.props.filters.createdDate ? 'hidden' : ''}>
              {Moment(issue.createdDate).format('Do MMM YYYY')}
            </td>
            <td className={!this.props.filters.resolvedDate ? 'hidden' : ''}>
              {Moment(issue.resolvedDate).format('Do MMM YYYY')}
            </td>
            <td>
              <a href={'/issue/' + issue._id + '/view'}>
                <button className='btn btn-primary'>
                  View
                </button>
              </a>
             </td>
             <td>
              <a href={'/issue/' + issue._id + '/edit'}>
                <button className='btn btn-info'>
                  Edit
                </button>
              </a>
             </td>
             <td>
              <button className='btn btn-danger'
                onClick={() => this.props.deleteIssue(issue._id)}>
                Delete
              </button>
             </td>
          </tr>
        )) :
          <tr className='center'>
            <td className='no-issue' colSpan='9'> No data to show !!! </td>
          </tr>
         }

         </tbody>
        </table>
      </div>
     )
  }
}

export default Issues;
