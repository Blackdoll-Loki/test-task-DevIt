import React, { useState } from 'react';

const CensoredText = ({ badWords, children }) => {
  const words = children.split(' ');

  const censorWord = word => {
    if (badWords.includes(word.toLowerCase())) {
      return '*'.repeat(word.length);
    }
    return word;
  };

  const [clickedWord, setClickedWord] = useState(null);

  return (
    <div>
      {words.map((word, index) => (
        <span key={index}>
          <span
            onClick={() => setClickedWord(word)}
            style={{ cursor: 'pointer' }}
          >
            {clickedWord === word ? word : censorWord(word)}
          </span>
          {index !== words.length - 1 && ' '}
        </span>
      ))}
    </div>
  );
};

export default CensoredText;
