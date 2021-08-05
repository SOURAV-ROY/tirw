import React, {Component} from 'react'
import Button from './Button';

class Clock extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         date: new Date(),
    //         local: 'bn-BD'
    //     };
    //     this.handleClick = this.handleClick.bind(this);
    // }

    state = {
        date: new Date(),
        local: 'bn-BD'
    };

    componentDidMount() {
        this.clockTimer = setInterval(() => {
            // this.setState({
            //     date: new Date(),
            // })
            this.tick();
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    // handleClick = (event) => {
    handleClick = (local) => {
        // event.preventDefault();
        // console.log(this);
        this.setState({
            // local: 'en-US'
            local
        });
        console.log('The button was clicked by handleClick');
    }

    tick() {
        this.setState({
            date: new Date(),
        })
    }

    render() {
        console.log('Clock component render');
        const {date, local} = this.state;
        // const {local} = this.props;
        return (
            <div>
                <h1 className='heading'>
                    <span className='text'>
                        {/*{new Date().toLocaleString(this.props.local)}*/}
                        {/*{this.state.date.toLocaleString(this.props.local)}*/}
                        {/*{date.toLocaleString('bn-BD')}*/}
                        {date.toLocaleString(local)}
                    </span>
                    <p>{this.props.local} Bangladesh</p>
                    {/*<button onClick={this.handleClick}>Click Here</button>*/}
                    {/*<button onClick={this.handleClick.bind(this, 'en-US')}>Click Here</button>*/}
                    {/*<button onClick={() => this.handleClick('en-US')}>Click Here</button>*/}
                    <Button change={this.handleClick} local='en-US'>Click Here</Button>
                </h1>
            </div>
        )
    }
}

export default Clock;