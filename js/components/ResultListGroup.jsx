import React from 'react';
import ResultListGroupItem from './ResultListGroupItem.jsx';

export default class ResultListGroup extends React.Component {
    render () {
        var t = this;
        var expressionPhases = this.props.data != null ? this.props.data.expressionPhases : [];
        var itemNodes = expressionPhases.map(function(expressionPhase, index) {
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
}