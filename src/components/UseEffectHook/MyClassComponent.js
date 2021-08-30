import React, {Component} from 'react';

class MyClassComponent extends Component {
    state = {
        count: 0,
        date: new Date(),
    }

    tick = () => {
        console.log('Time TikTik');
        this.setState({
            date: new Date()
        })
    }

    componentDidMount() {
        const {count} = this.state;
        document.title = `clicked ${count} Times`;
        this.interval = setInterval(this.tick, 1000);
        console.log(`Did Mount ${count}`);
    }

    componentDidUpdate() {
        const {count} = this.state;
        document.title = `Clicked ${count} Times`;
        // console.log(`Component Did Update ${count}`);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    addClick = () => {
        this.setState(({count}) => ({
            count: count + 1
        }));
    }

    render() {
        const {date} = this.state;
        return (
            <div>
                <p>Time: {date.toLocaleTimeString()}</p>
                <p>
                    <button type='button' onClick={this.addClick}>Click</button>
                </p>
            </div>
        );
    }
}

export default MyClassComponent;
