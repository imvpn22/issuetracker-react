import React from 'react';

import { BASE_URL } from '../config';

const API_URL = `${BASE_URL}/threads`;

class NewThread extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      tags: ''
    }
  }

  handleTitleChange = (event) => {
    this.setState({title: event.target.value});
  };

  handleDescriptionChange = (event) => {
    this.setState({description: event.target.value});
  };

  handleTagsChange = (event) => {
    this.setState({tags: event.target.value});
  };

  handleSubmit = (event) => {
    event.preventDefault();

    let thread = {
      title: this.state.title,
      description: this.state.description,
      tags: this.state.tags.split(',')
    }

    fetch(API_URL, {
        method: 'post',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(thread)
      }
    ).then(res => res.json())
    .then(thread => {
      this.props.history.push('/');
    }).catch(err => {
      console.log(err);
    });

  };

  render() {
    return (
      <div className='container'>

        <form
          className='form form-horizontal new-thread-form'
          onSubmit={e => this.handleSubmit(e)}>

          <div className='form-group'>
            <h4>New Thread</h4>
          </div>

          <div className='form-group'>
            <label className='control-label col-sm-3' htmlFor='title'>
              Title
            </label>
            <input
              className='col-sm-9'
              required
              type='text'
              id='title'
              value={this.state.title}
              onChange={e => this.handleTitleChange(e)}
              placeholder='Enter Title of the Thread'
            />
          </div>

          <div className='form-group'>
            <label className='control-label col-sm-3' htmlFor='description'>
              Description
            </label>
            <textarea
              className='col-sm-9'
              required
              id='description'
              value={this.state.description}
              onChange={e => this.handleDescriptionChange(e)}
              placeholder='Enter Description of the Thread'
             />
          </div>

          <div className='form-group'>
            <label className='control-label col-sm-3' htmlFor='tags'>
              Tags
            </label>
            <input
              className='col-sm-9'
              required
              type='text'
              id='tags'
              value={this.state.tags}
              onChange={e => this.handleTagsChange(e)}
              placeholder='Enter Tags (Comma separated)'
            />
          </div>

          <div className='form-group'>
           <button className="btn btn-primary" type='submit' value='Create'> Create </button>
          </div>
        </form>

      </div>
    )
  }
}

export default NewThread;
