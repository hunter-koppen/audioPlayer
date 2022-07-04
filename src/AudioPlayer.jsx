import { Component, createElement } from "react";

import { H5AudioPlayer } from "./components/H5AudioPlayer";
import "./ui/AudioPlayer.css";

export class AudioPlayer extends Component {
    render() {
        return <H5AudioPlayer url={this.props.url} file={this.props.file}/>;
    }
}
