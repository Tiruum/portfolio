import React, { useEffect, useState } from 'react';

interface ScrambleTextProps {
    text: string;
    duration?: number; // in milliseconds
    interval?: number; // in milliseconds
    chars?: string; // custom set of characters for scrambling
    revealOrder?: 'leftToRight' | 'rightToLeft' | 'random'; // order of reveal
    case?: 'uppercase' | 'lowercase'; // case of the characters
    repeat?: number; // number of repeats, -1 for infinite
    repeatDelay?: number; // delay between repeats in milliseconds
}

const ScrambleText: React.FC<ScrambleTextProps> = ({
                                                       text,
                                                       duration = 2000,
                                                       interval = 50,
                                                       chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
                                                       revealOrder = 'leftToRight',
                                                       case: charCase = 'uppercase',
                                                       repeat = 0,
                                                       repeatDelay = 500,
                                                   }) => {
    const [scrambledText, setScrambledText] = useState<string>('');
    const [repeatCount, setRepeatCount] = useState<number>(0);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        let delayTimeoutId: NodeJS.Timeout;
        let currentText = new Array(text.length).fill('').map(() => getRandomChar(chars));
        let currentIndex = revealOrder === 'rightToLeft' ? text.length - 1 : 0;

        setScrambledText(currentText.join(''));

        const revealNextChar = () => {
            if (
                (revealOrder === 'leftToRight' && currentIndex >= text.length) ||
                (revealOrder === 'rightToLeft' && currentIndex < 0)
            ) {
                clearTimeout(timeoutId);

                if (repeat === -1 || repeatCount < repeat) {
                    delayTimeoutId = setTimeout(() => {
                        setRepeatCount(repeatCount + 1);
                        restartScramble();
                    }, repeatDelay);
                }

                return;
            }

            currentText[currentIndex] = text[currentIndex];
            setScrambledText(currentText.join(''));

            if (revealOrder === 'leftToRight') {
                currentIndex++;
            } else if (revealOrder === 'rightToLeft') {
                currentIndex--;
            } else if (revealOrder === 'random') {
                currentIndex = getRandomIndex(text.length, currentIndex);
            }

            timeoutId = setTimeout(revealNextChar, interval);
        };

        const restartScramble = () => {
            currentText = new Array(text.length).fill('').map(() => getRandomChar(chars));
            currentIndex = revealOrder === 'rightToLeft' ? text.length - 1 : 0;
            setScrambledText(currentText.join(''));
            revealNextChar();
        };

        revealNextChar();

        return () => {
            clearTimeout(timeoutId);
            clearTimeout(delayTimeoutId);
        };
    }, [text, duration, interval, chars, revealOrder, repeatCount, repeat, repeatDelay]);

    const getRandomChar = (characters: string): string => {
        const randomIndex = Math.floor(Math.random() * characters.length);
        return charCase === 'uppercase'
            ? characters[randomIndex].toUpperCase()
            : characters[randomIndex].toLowerCase();
    };

    const getRandomIndex = (length: number, currentIndex: number): number => {
        let newIndex = Math.floor(Math.random() * length);
        while (newIndex === currentIndex) {
            newIndex = Math.floor(Math.random() * length);
        }
        return newIndex;
    };

    return <span>{scrambledText}</span>;
};

export default ScrambleText;