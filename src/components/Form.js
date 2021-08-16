import React, {Component} from 'react';

class Form extends Component {
    state = {
        title: 'React Form',
        text: 'React Is Awesome',
        library: 'React',
        isAwesome: true,
    }
    handleChange = (event) => {
        // console.log(event.target.value);
        // this.setState({
        //     [event.target.name]: event.target.value
        // });
        if (event.target.type === 'text') {
            this.setState({
                title: event.target.value
            });
        } else if (event.target.type === 'textarea') {
            this.setState({
                text: event.target.value
            });
        } else if (event.target.type === 'select-one') {
            this.setState({
                library: event.target.value
            });
        } else if (event.target.type === 'checkbox') {
            this.setState({
                isAwesome: event.target.checked
            });
        } else {
            console.log(event.target.type);
            console.log('Nothing Changed !!!');
        }

    }

    handleSubmit = (e) => {
        const {title, text, library, isAwesome} = this.state;
        e.preventDefault()
        console.log(title, text, library, isAwesome);
    }

    render() {
        const {title, text, library, isAwesome} = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2>Form Handle</h2>
                    <input
                        name='title'
                        type="text"
                        value={title}
                        onChange={this.handleChange}
                        placeholder="Enter The Value"
                    />
                    <p>{title}</p>
                    <hr/>

                    <textarea
                        name="text"
                        value={text}
                        onChange={this.handleChange}
                    />
                    <hr/>

                    <select value={library} onChange={this.handleChange}>
                        <option value="React">React</option>
                        <option value="Vue">Vue</option>
                        <option value="Angular">Angular</option>
                    </select>
                    <p>{library}</p>
                    <hr/>

                    <input type="checkbox" checked={isAwesome} onChange={this.handleChange}/>
                    <hr/>
                    <input type="submit" value='Submit'/>
                </form>
            </div>
        );
    }
}

export default Form;