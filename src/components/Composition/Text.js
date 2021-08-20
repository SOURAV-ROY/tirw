export default function Text({addEmoji, addBracket}) {
    let text = 'I am Independent Text 🙂🐎';
    if (addEmoji) {
        text = addEmoji(text, '😎');
    }
    if (addBracket) {
        text = addBracket(text);
    }
    return <div>{text}</div>;
    // return <div>{addEmoji ? addEmoji(text, '😎') : text}</div>;
}