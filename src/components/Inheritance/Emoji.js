import React, {Component} from 'react';

class Emoji extends Component {

    addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;

    render(override) {
        let text = 'I Am AddEmoji Component 🤑';
        if (override) text = override;
        return (
            <div>
                <h2>{text}</h2>
            </div>
        );
    }
}

export default Emoji;