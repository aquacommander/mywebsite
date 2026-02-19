import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { heartPulse } from '../animation/animation.style';
import Icon from 'components/basic/icon';

interface AudioPlayerProps {
    isEnableSong: Boolean
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ isEnableSong }) => {

    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        if (!audioRef.current) return;

        if (isEnableSong) {
            audioRef.current
                .play()
                .then(() => setIsPlaying(true))
                .catch(() => {
                    setIsPlaying(false);
                });
            return;
        }

        audioRef.current.pause();
        setIsPlaying(false);
    }, [isEnableSong]);

    const togglePlay = () => {
        if (!audioRef.current) return;

        setIsPlaying((prevIsPlaying) => {
            if (prevIsPlaying) {
                audioRef.current?.pause();
                return false;
            }

            audioRef.current
                ?.play()
                .catch(() => {
                    setIsPlaying(false);
                });
            return true;
        });
    };

    return (
        <Community>
            <audio autoPlay ref={audioRef}>
                <source src="./song.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
            <button onClick={togglePlay}>
                {isPlaying ? <Icon icon={'pause'} /> : <Icon icon={'play'} />}
            </button>
        </Community>
    );
};

export const Community = styled.div`
    display: flex;
    width: 3rem;
    height: 3rem;
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    border-radius: 40rem;
    align-items: center;
    justify-content: center;
    z-index: 9;
    animation: ${heartPulse} 1s infinite;
    box-shadow: 0 0 0 2em transparent;

    button {
        display:flex;
        align-items: center;
        justify-content: center;
    }
`;

export default AudioPlayer;
