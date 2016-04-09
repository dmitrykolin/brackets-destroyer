import React from 'react';

export default class DestroyerProgress extends React.Component {
    constructor(props) {
       super(props);
    }
    render() {
        var progress = 0;
        if (this.props.data) {
            progress = this.props.data.progress;
        }
        return (
            <div className="progress">
                <div
                    className="progress-bar progress-bar-info progress-bar-striped"
                    role="progressbar"
                    aria-valuenow={progress}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{width: progress + '%'}}
                    >
                    {progress}%
                </div>
            </div>
        );
    }
}