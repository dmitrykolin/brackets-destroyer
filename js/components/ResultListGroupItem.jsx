import React from 'react';

export default class ResultListGroupItem extends React.Component {
    onItemClick (event) {
        event.preventDefault();
        var item = event.target;
        var expression = item.getAttribute("data-expression");
        this.props.changeInputExpressionFunction(expression);
    }
    render () {
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
                onClick={this.onItemClick.bind(this)}
                data-expression={this.props.item.text}
                >
                <span dangerouslySetInnerHTML={{__html: viewText}}/>
                <span className="badge">{this.props.index}</span>
            </a>
        );
    }
}