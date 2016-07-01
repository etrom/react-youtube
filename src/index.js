//es6 const = constant (never going to re assign)
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';
const API_KEY = "AIzaSyAle2knQUeiPLwqMvzYc_lhEnpwhnoUgPU";


// create a new component, should produce html
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('cat videos');
  }

  videoSearch(search) {
    YTSearch({key:API_KEY, term: search }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
      //this.setState({videos:videos});
    });
  }

  render() {
    const videoSearch = _.debounce((search) => { this.videoSearch(search) }, 500);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}/>
      </div>
    );
  }
}


// take components html and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
