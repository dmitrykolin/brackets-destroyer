var bracketsDestroyerService = require('js/brackets-destroyer-service.js');

var defaultExpression = "5 * (1 + sin(2))";

bracketsDestroyerService.initialize(defaultExpression);

var destroyerData = bracketsDestroyerService.data;

window.destroyerData = destroyerData;

var ExpressionInput = React.createClass({
    getInitialState: function() {
        return {data: this.props.data};
    },
    handleChange: function(event) {
        event.preventDefault();
        var value = event.target.value;
        this.props.changeInputExpressionFunction(value);
    },
    handleEnter: function(event) {
        this.props.processExpressionFunction();
    },
    handleKeyPress: function(event) {
        if (event.charCode === 13) {
            this.handleEnter(event);
        }
    },
    render: function() {
        return (
            <div className="input-group expression-input-group">
                <span className="input-group-addon">Input Expression</span>
                <div>
                    <input
                        type="text"
                        className="form-control"
                        placeholder={this.state.data.defaultExpression}
                        value={this.state.data.currentExpression}
                        required="required"
                        autoFocus="true"
                        onChange={this.handleChange}
                        onKeyPress={this.handleKeyPress}
                    />
                </div>
            </div>
        );
    }
});

var DestroyerProgress = React.createClass({
    getInitialState: function() {
        return {data: this.props.data};
    },
    render: function() {
        return (
            <div className="progress">
                <div
                    className="progress-bar progress-bar-info progress-bar-striped"
                    role="progressbar"
                    aria-valuenow={this.state.data.progress}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{width: this.state.data.progress + '%'}}
                    >
                    {this.state.data.progress}%
                </div>
            </div>
        );
    }
});

var ProcessExpressionButton = React.createClass({
    getInitialState: function() {
        return {data: this.props.data};
    },
    onClickProcessExpressionButton: function (event) {
        this.props.processExpressionFunction();
    },
    render: function () {
        var btnClass = "btn-primary";
        var text = "Destroy Brackets";
        var disabledButton = false;
        if (this.state.data.done) {
            disabledButton = true;
            btnClass = "btn-success";
            text = "Complete";
        } else if (this.state.data.error) {
            disabledButton = true;
            btnClass = "btn-danger";
            text = this.state.data.errorText;
        }

        return (
            <button
                disabled={disabledButton}
                className={"btn btn-lg btn-block btn-sm " + btnClass}
                type="submit"
                onClick={this.onClickProcessExpressionButton}
                >
                <span className="glyphicon glyphicon-cog" aria-hidden="true"></span>
                {text}
            </button>
        );
    }
});

var ResultListGroupItem = React.createClass({
    onItemClick: function (event) {
        event.preventDefault();
        var item = event.target;
        var expression = item.getAttribute("data-expression");
        this.props.changeInputExpressionFunction(expression);
    },
    render: function () {
        var activeClass = "";
        if (this.props.item.active) {
            activeClass = "active";
        }
        var viewText;
        if (this.props.item.pickedBracketsView) {
            viewText = this.props.item.pickedBracketsView;
        } else {
            viewText = this.props.item.text;
        }
        return (
            <a
                href="#"
                className={"list-group-item " + activeClass}
                onClick={this.onItemClick}
                data-expression={this.props.item.text}
                >
                <span dangerouslySetInnerHTML={{__html: viewText}}/>
				<span className="badge">{this.props.index}</span>
			</a>
        );
    }
});

var ResultListGroup = React.createClass({
    render: function () {
        var t = this;
        var itemNodes = this.props.data.expressionPhases.map(function(expressionPhase, index) {
          return (
            <ResultListGroupItem item={expressionPhase} index={index} key={index} changeInputExpressionFunction={t.props.changeInputExpressionFunction}>
            </ResultListGroupItem>
          );
        });
        return (
            <div className="list-group">
                {itemNodes}
            </div>
        );
    }
});

var BracketsDestroyerBox = React.createClass({
    getInitialState: function() {
        return {data: this.props.data,
            version: this.props.version
        };
    },
    resetState: function () {
        this.setState(
            {
                data: this.props.data,
                version: this.props.version
            }
        );
    },
    processExpression: function () {
        bracketsDestroyerService.breakBrackets();
        this.resetState();
    },
    changeInputExpression: function (newExpression) {
        bracketsDestroyerService.initialize(newExpression);
        this.resetState();
    },
    render: function() {
        return (
            <div className="destroyer-component">
                <h2>Brackets Destroyer [{this.state.version}]</h2>
                <ExpressionInput data={this.state.data} changeInputExpressionFunction={this.changeInputExpression} processExpressionFunction={this.processExpression}/>
                <DestroyerProgress data={this.state.data}/>
                <ProcessExpressionButton data={this.state.data} processExpressionFunction={this.processExpression}/>
                <ResultListGroup data={this.state.data} changeInputExpressionFunction={this.changeInputExpression}/>
            </div>
        );
    }
});

ReactDOM.render(
    <BracketsDestroyerBox data={destroyerData} version={bracketsDestroyerService.version}/>,
    document.getElementById('destroyerContainer')
);