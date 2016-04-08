import React from 'react';

export default class ExpressionInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null
        };
    }
    componentDidMount() {
       this.setState({data: this.props.data});
    }
    handleChange = (event) => {
        event.preventDefault();
        var value = event.target.value;
        this.props.changeInputExpressionFunction(value);
    }
    handleEnter = (event) => {
        this.props.processExpressionFunction();
    }
    handleKeyPress = (event) => {
        if (event.charCode === 13) {
            this.handleEnter(event);
        }
    }
    render() {
        var defaultExpression = '';
        var currentExpression = '';
        if (this.props.data) {
            defaultExpression = this.props.data.defaultExpression;
            currentExpression = this.props.data.currentExpression;
        }
        return (
            <div className="input-group expression-input-group">
                <span className="input-group-addon">Input Expression</span>
                <div>
                    <input
                        type="text"
                        className="form-control"
                        placeholder={defaultExpression}
                        value={currentExpression}
                        required="required"
                        autoFocus="true"
                        onChange={this.handleChange}
                        onKeyPress={this.handleKeyPress}
                    />
                </div>
            </div>
        );
    }
}