import React, { useEffect } from 'react';
import { Howl } from 'howler';

const BackgroundMusic = () => {
  useEffect(() => {
    // Create a new Howl instance with the audio file URL
    const bgMusic = new Howl({
      src: ['/sounds/bg_music.mp3'],
      loop: true, // Set loop to true for repeating the audio
    });

    // Start the music when the component mounts
    bgMusic.play();

    // Clean up to stop the music when the component unmounts
    return () => {
      bgMusic.stop();
    };
  }, []);

  return null; // Since this component handles the music, no need to render anything
};

export default BackgroundMusic;
