import { Component, createElement } from "react";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export class H5AudioPlayer extends Component {
    state = {
        filepath: null
    };

    componentDidMount() {
        // If the url is set we use that as a audio source
        if (this.props.url) {
            this.setState({
                filepath: this.props.url
            });
        }
    }

    componentDidUpdate() {
        // Check if widget has loaded the file data
        const file = this.props.file;
        if (file && file.status === "available") {
            if (this.state.filepath !== file.value.uri) {
                this.setState({
                    filepath: file.value.uri
                });
            }
        }
    }

    render() {
        return (
            <AudioPlayer
                autoPlay
                src={this.state.filepath}
                // other props here
            />
        );
    }
}
