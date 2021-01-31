import React, { Component } from 'react';

import { connect } from 'react-redux';
import {
  fetchPopularMedia,
  fetchGenreList,
  fetchNowPlayingMedia,
  fetchTopRatedMedia,
} from '../actions';

import MediaList from './MediaList';

class LandingPage extends Component {
  componentDidMount() {
    //*call action creators to fetch movies or tv-shows//

    console.log(this.props);
    const media = this.props.showMediaList ? 'movie' : 'tv';

    this.props.fetchGenreList(media);
    this.props.fetchPopularMedia(media);
    this.props.fetchNowPlayingMedia(media);
    this.props.fetchTopRatedMedia(media);
  }

  componentDidUpdate(prevProps) {
    //*call action creators to fetch movies or tv-shows//

    if (prevProps.showMediaList !== this.props.showMediaList) {
      const media = this.props.showMediaList ? 'movie' : 'tv';

      this.props.fetchGenreList(media);
      this.props.fetchPopularMedia(media);
      this.props.fetchNowPlayingMedia(media);
      this.props.fetchTopRatedMedia(media);
    }
  }

  renderHeader = () => {
    if (this.props.showMediaList) {
      return 'Movies';
    } else {
      return 'TV Shows';
    }
  };

  renderList = () => {
    if (this.props.searchRequest) {
      return (
        <MediaList
          heading={`${this.renderHeader()} Search Result`}
          mediaList={this.props.searchResult}
          fullGenreList={this.props.fullGenreList}
        />
      );
    } else if (!this.props.searchRequest) {
      return (
        <>
          <MediaList
            heading={`Popular ${this.renderHeader()}`}
            mediaList={this.props.popular}
            fullGenreList={this.props.fullGenreList}
          />
          <hr />
          <MediaList
            heading={`Now Playing ${this.renderHeader()}`}
            mediaList={this.props.nowPlaying}
            fullGenreList={this.props.fullGenreList}
          />
          <hr />
          <MediaList
            heading={`Top Rated ${this.renderHeader()}`}
            mediaList={this.props.topRated}
            fullGenreList={this.props.fullGenreList}
          />
        </>
      );
    }
  };

  render() {
    return (
      <div className='ui container' style={{ marginTop: '4rem' }}>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    popular: state.movies.popular,
    nowPlaying: state.movies.nowPlaying,
    topRated: state.movies.nowPlaying,
    fullGenreList: state.movies.fullGenreList,
    showMediaList: state.movies.movieBtnClick,
    searchResult: state.movies.searchResult,
    searchRequest: state.movies.searchRequest,
  };
};

export default connect(mapStateToProps, {
  fetchPopularMedia,
  fetchGenreList,
  fetchNowPlayingMedia,
  fetchTopRatedMedia,
})(LandingPage);
