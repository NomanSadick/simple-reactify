import { useRef, useState } from "react";

const Content = () => {
  const [displayText, setDisplayText] = useState("");
  const [displayedText, setDisplayedText] = useState("");
  const textareaRef = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setDisplayedText(displayText);
  };

  const handleChange = (e) => {
    setDisplayText(e.target.value);
  };

  const handleResetClick = () => {
    setDisplayText("");
    setDisplayedText("");
    textareaRef.current.value = "";
  };

  return (
    <div className="p-4">
      <form onSubmit={handleFormSubmit} className="flex flex-col">
        <textarea
          ref={textareaRef}
          value={displayText}
          onChange={handleChange}
          className="border border-gray-300 rounded p-2 mb-2"
          placeholder="Enter some text..."
        />
        <div className="flex">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          >
            Display Text
          </button>
          <button
            type="button"
            onClick={handleResetClick}
            className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded ml-2"
          >
            Reset
          </button>
        </div>
      </form>
      {displayedText && (
        <p className="mt-4 border border-gray-300 rounded p-2">{displayedText}</p>
      )}
    </div>
  );
};

export default Content;
