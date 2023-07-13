import { useRef, useState } from "react";

const Content = () => {
    const [displayText, setDisplayText] = useState('');
    const [displayedText, setDisplayedText] = useState('');
    const textareaRef = useRef(null);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setDisplayedText(displayText);
    };

    const handleChange = (e) => {
        setDisplayText(e.target.value);
    };

    const handleResetClick = () => {
        setDisplayText('');
        setDisplayedText('');
        textareaRef.current.value = '';
    };
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <textarea ref={textareaRef} value={displayText} onChange={handleChange} />
                <button type="submit">Display Text</button>
                <button type="button" onClick={handleResetClick}>Reset</button>
            </form>
            {displayedText && <p>{displayedText}</p>}
        </div>
    );
};

export default Content;