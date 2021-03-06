import React from 'react';
import './main.css';
import './artist-icon.css';
import PlaylistIcon from './playlist-icon';
import ArtistogramIcon from './artistogram-icon';
import { addEmptyHex } from './empty-hex';
import { connect } from 'react-redux';

export class List extends React.Component {
  render() {
    const listType = `${this.props.listType}s`;
    let dataSource;
    if(listType === 'playlists') {
        dataSource = this.props.savedPlaylists;
    } else if(listType === 'artistograms') {
        dataSource = this.props.savedArtistograms;
    }
    const listItems = dataSource.map(listItem => {
        if(dataSource === this.props.savedPlaylists) {
          return (
            <PlaylistIcon imageUrl={listItem.imageUrl} artistName={listItem.name} className="hexagon" linkType={this.props.linkType} />
          )
      } else {
        return (
          <ArtistogramIcon imageUrl={listItem.imageUrl} artistName={listItem.name} className="hexagon" linkType={this.props.linkType} />

        )
      }
    });
    addEmptyHex(listItems);
    return (
      <section className={listType}>
    <h2><div class="title-container">{listType}</div></h2>
    <ul id="grid" class="clear">
      {listItems}
    </ul>
  </section>
    )
  }
}

const mapStateToProps = (state, props) => ({
  savedPlaylists: state.savedPlaylists,
  savedArtistograms: state.savedArtistograms
});

export default connect(mapStateToProps)(List);
