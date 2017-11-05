import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { RoundShape } from "react-placeholder/lib/placeholders";

class Image extends Component {
  componentDidMount() {
    this.props.Loaded();
  }
  render() {
    const { loaded, avatar } = this.props;
    return <img class="x" style={{ display: !loaded ? "none" : "inline-block" }} src={avatar.replace(/\/(s[0-9]*)/gi, re => (re = "/s200"))} />;
  }
}

const Avatar = inject(({ store }) => ({
  avatar: store.session.imageUrl,
  fullname: store.session.fullname,
  loaded: store.loaded,
  setLoaded: store.setLoaded
}))(
  observer(({ avatar, fullname, loaded, setLoaded }) => (
    <div class="card_avatar">
      {!loaded ? <RoundShape class="show-loading-animation give-style" color="#f0f0f0" /> : null}
      <Image Loaded={setLoaded} avatar={avatar} loaded={loaded} />
    </div>
  ))
);

export default Avatar;
