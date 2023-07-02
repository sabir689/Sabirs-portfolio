import React, { useState, useEffect } from 'react';

const TypingAnimation = ({ fixedWord, changingWords, delay }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isTyping) {
        const word = changingWords[currentWordIndex];
        const wordLength = word.length;

        if (currentWord.length === wordLength) {
          setIsTyping(false);
          setTimeout(() => {
            setIsTyping(true);
            setCurrentWord('');
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % changingWords.length);
          }, delay);
        } else {
          setCurrentWord(word.substring(0, currentWord.length + 1));
        }
      } else {
        if (currentWord.length === 0) {
          setIsTyping(true);
        } else {
          setCurrentWord(currentWord.substring(0, currentWord.length - 1));
        }
      }
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentWordIndex, currentWord, changingWords, delay, isTyping]);

  return (
    <div className="text-2xl">
      {fixedWord} {currentWord}
    </div>
  );
};

export default TypingAnimation;
