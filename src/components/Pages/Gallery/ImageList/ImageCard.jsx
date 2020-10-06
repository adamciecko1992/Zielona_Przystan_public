import React, { Component } from "react";

class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 6);
    this.setState({ spans });
  };

  render() {
    const { url, description } = this.props;
    return (
      <div
        style={{ gridRowEnd: `span ${this.state.spans}` }}
        onClick={this.props.handleClick}
      >
        <img ref={this.imageRef} alt={description} src={url} />
      </div>
    );
  }
}

export default ImageCard;
