import React, { Component } from 'react';
import axios from 'axios';
import Gallery from '../components/Gallery';

class GalleryContainer extends Component {
  state = {
    photos: [],
    error: false,
    loading: true
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(resp => this.setState({
        photos: resp.data.slice(0,20), // Limit fake data only to 20 items.
        loading: false,
        error: false
      }))
      .catch(err => this.setState({loading: false, error: true}))
  }
  render() { 
    return <Gallery {...this.state} />
  }
}
 
export default GalleryContainer;