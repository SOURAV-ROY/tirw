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
        // const {change, local, show, enable} = this.props;
        const {change, local, show} = this.props;
        // if (!enable) return null;
        return (
            <div>
                <button type='button' onClick={() => change(local)}>
                    {local === 'bn-BD' ? 'Change Clock' : 'ঘড়ি পরিবর্তন করুন'}
                </button>
                {show && <p>Hello</p>}
            </div>
        );
    }
}

export default Button;