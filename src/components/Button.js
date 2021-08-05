import React, {Component} from 'react';

class Button extends Component {
    // Should not use *************************
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        const {change: currentChange, local: currentLocal} = this.props;
        const {change: nextChange, local: nextLocal} = nextProps;

        return !(currentChange === nextChange && currentLocal === nextLocal);
        // return currentChange !== nextChange;
        // if (currentChange === nextChange && currentLocal === nextLocal) {
        //     return false;
        // }
        // return true;
    }

    render() {
        console.log('Button component render')
        const {change, local} = this.props;
        return (
            <div>
                <button type='button' onClick={() => change(local)}>Click Here</button>
            </div>
        );
    }
}

export default Button;