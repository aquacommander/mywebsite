import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { heartPulse } from '../animation/animation.style';
import Icon from 'components/basic/icon';

/** True on any touch-capable device (phones, tablets) */
const isTouchDevice = () =>
    typeof window !== 'undefined' &&
    ('ontouchstart' in window || navigator.maxTouchPoints > 0);

// Absolute path so it resolves correctly on every route (/frontend, /backend, etc.)
const SONG_SRC = `${process.env.PUBLIC_URL || ''}/song.mp3`;

const AudioPlayer: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [showHint, setShowHint] = useState<boolean>(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    // Show "tap to play" nudge on mobile after the page settles
    useEffect(() => {
        if (!isTouchDevice()) return;
        const t = setTimeout(() => setShowHint(true), 1500);
        return () => clearTimeout(t);
    }, []);

    const togglePlay = () => {
        const audio = audioRef.current;
        if (!audio) return;

        setShowHint(false);

        if (isPlaying) {
            audio.pause();
            setIsPlaying(false);
        } else {
            audio.play()
                .then(() => setIsPlaying(true))
                .catch(() => setIsPlaying(false));
        }
    };

    return (
        <>
            {/* Audio element lives outside the button — no event interference */}
            <audio ref={audioRef} preload="none">
                <source src={SONG_SRC} type="audio/mpeg" />
            </audio>

            {showHint && (
                <MobileHint onClick={togglePlay}>
                    🎵 Tap to play music
                </MobileHint>
            )}

            <PlayerButton
                onClick={togglePlay}
                aria-label={isPlaying ? 'Pause music' : 'Play music'}
                $isPlaying={isPlaying}
            >
                <Icon icon={isPlaying ? 'pause' : 'play'} />
            </PlayerButton>
        </>
    );
};

const fadeInUp = keyframes`
    from { opacity: 0; transform: translateY(6px); }
    to   { opacity: 1; transform: translateY(0); }
`;

/** Nudge pill — only visible on touch devices */
export const MobileHint = styled.button`
    position: fixed;
    bottom: 5.8rem;
    right: 1rem;
    background: rgba(0, 0, 0, 0.75);
    border: 1px solid rgba(255, 255, 255, 0.22);
    border-radius: 2rem;
    padding: 0.45rem 1rem;
    color: #fff;
    font-size: 0.78rem;
    letter-spacing: 0.04em;
    z-index: 20;
    cursor: pointer;
    backdrop-filter: blur(8px);
    white-space: nowrap;
    animation: ${fadeInUp} 0.3s ease both;

    @media (hover: hover) and (pointer: fine) {
        display: none;
    }
`;

/** Circular play/pause button — always visible, works on all devices */
export const PlayerButton = styled.button<{ $isPlaying: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.2rem;
    height: 3.2rem;
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.6);
    background: rgba(3, 169, 244, 0.85);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    color: #fff;
    cursor: pointer;
    z-index: 99999;
    ${({ $isPlaying }) => $isPlaying && css`
        animation: ${heartPulse} 1.2s infinite;
    `}
    box-shadow: 0 4px 20px rgba(3, 169, 244, 0.6), 0 2px 8px rgba(0,0,0,0.4);
    transition: background 0.2s ease, transform 0.15s ease;

    svg {
        width: 1.4rem;
        height: 1.4rem;
    }

    &:hover {
        background: rgba(3, 169, 244, 1);
        transform: scale(1.1);
    }

    &:active {
        transform: scale(0.95);
    }

    @media (hover: none) and (pointer: coarse) {
        width: 3.6rem;
        height: 3.6rem;
        bottom: 1.5rem;
        right: 1.5rem;
    }
`;

export default AudioPlayer;
