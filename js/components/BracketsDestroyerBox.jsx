import React from 'react';
import ExpressionInput from './ExpressionInput.jsx';
import DestroyerProgress from './DestroyerProgress.jsx';
import ProcessExpressionButton from './ProcessExpressionButton.jsx';
import ResultListGroup from './ResultListGroup.jsx';

export default class BracketsDestroyerBox extends React.Component {

    constructor(props) {
       super(props);
       this.state = {
        data: null,
        version: ''
       };
    }
    componentDidMount() {
       this.resetState();
    }
    resetState () {
        this.setState(
            {
                data: this.props.bracketsDestroyerService.data,
                version: this.props.bracketsDestroyerService.version
            }
        );
    }
    processExpression = () => {
        this.props.bracketsDestroyerService.breakBrackets();
        this.resetState();
    }
    changeInputExpression = (newExpression) => {
        this.props.bracketsDestroyerService.initialize(newExpression);
        this.resetState();
    }
    render() {
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
}