import Emoji from './Emoji';

class Text extends Emoji {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        const decodeText = this.addEmoji('Love React', '😍');
        return (super.render(decodeText));
    }
}

export default Text;