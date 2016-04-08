import React from 'react';

export default class ProcessExpressionButton extends React.Component {
    constructor(props) {
       super(props);

        this.state = {
            data: null
        };
    }
    componentDidMount() {
        this.setState({data: this.props.data});
    }
    onClickProcessExpressionButton (event) {
        this.props.processExpressionFunction();
    }
    render () {
        var btnClass = "btn-primary";
        var text = "Destroy Brackets";
        var disabledButton = false;
        var done = this.state.data != null ? this.state.data.done : false;
        var error = this.state.data != null ? this.state.data.error : '';
        var errorText = this.state.data != null ? this.state.data.errorText : '';
        if (done) {
            disabledButton = true;
            btnClass = "btn-success";
            text = "Complete";
        } else if (error) {
            disabledButton = true;
            btnClass = "btn-danger";
            text = errorText;
        }

        return (
            <button
                disabled={disabledButton}
                className={"btn btn-lg btn-block btn-sm " + btnClass}
                type="submit"
                onClick={this.onClickProcessExpressionButton.bind(this)}
                >
                <span className="glyphicon glyphicon-cog" aria-hidden="true"></span>
                {text}
            </button>
        );
    }
}