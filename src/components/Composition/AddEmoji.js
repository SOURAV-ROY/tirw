import {Component} from 'react';

class AddEmoji extends Component {

    addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;

    render() {
        // let text = 'I Am AddEmoji Component 🤩';

        return this.props.children({addEmoji: this.addEmoji});
    }
}

export default AddEmoji;