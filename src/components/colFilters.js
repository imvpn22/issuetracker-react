import React from 'react';

const ColFilters = (props) => <div className="col-filter">
      <button
        className = {'btn ' + (props.filters.showFilters ? 'btn-success' : 'btn-default')}
        onClick={() => props.updateFilter('showFilters')}>
        Column Filters
      </button>

      <span className={'filters ' + (!props.filters.showFilters ? 'hidden' : '')}>
        <label className={props.filters.description ? 'active-filter' : ''}>
          Description
          <input type="checkbox"
            checked={props.filters.description}
            onClick={() => props.updateFilter('description')}/>
        </label>

        <label className={props.filters.severity ? 'active-filter' : ''}>
          Severity
          <input type="checkbox"
            checked={props.filters.severity}
            onClick={() => props.updateFilter('severity')}/>
        </label>

        <label className={props.filters.status ? 'active-filter' : ''}>
          Status
          <input type="checkbox"
            checked={props.filters.status}
            onClick={() => props.updateFilter('status')}/>
        </label>

        <label className={props.filters.createdDate ? 'active-filter' : ''}>
          Created Date
          <input type="checkbox"
            checked={props.filters.createdDate}
            onClick={() => props.updateFilter('createdDate')}/>
        </label>

        <label className={props.filters.resolvedDate ? 'active-filter' : ''}>
          Resolved Date
          <input type="checkbox"
            checked={props.filters.resolvedDate}
            onClick={() => props.updateFilter('resolvedDate')}/>
        </label>
      </span>

    </div>;

export default ColFilters;
