import { Component, createElement } from "react";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export class H5AudioPlayer extends Component {
    state = {
        filepath: null
    };

    componentDidUpdate() {
        const { file, url } = this.props;
        if (url && url.status === "available" && url.value) {
            if (this.state.filepath !== url.value) {
                this.setState({
                    filepath: url.value
                });
            }
        } else if (file && file.status === "available") {
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
                autoPlay={this.props.autoPlay}
                autoPlayAfterSrcChange={false}
                loop={this.props.loop}
                src={this.state.filepath}
            />
        );
    }
}
