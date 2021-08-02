import React, {Component} from 'react'

class Clock extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {date: new Date()};
    // }
    state = {date: new Date()};

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

    tick() {
        this.setState({
            date: new Date(),
        })
    }

    render() {
        return (
            <div>
                <h1 className='heading'>
                    <span className='text'>
                        {/*{new Date().toLocaleString(this.props.local)}*/}
                        {this.state.date.toLocaleString(this.props.local)}
                    </span>
                </h1>
            </div>
        )
    }
}

export default Clock;