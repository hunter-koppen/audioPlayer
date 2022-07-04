import { Component, createElement } from "react";

import { H5AudioPlayer } from "./components/H5AudioPlayer";

export class AudioPlayer extends Component {
    render() {
        return (
            <H5AudioPlayer
                url={this.props.url}
                file={this.props.file}
                autoPlay={this.props.autoPlay}
                loop={this.props.loop}
            />
        );
    }
}
