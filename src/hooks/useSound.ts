"use client";

import { useCallback, useRef } from 'react';

// Frequencies for our synthesized sounds
const SOUNDS = {
    click: {
        freq1: 600,
        freq2: 1200,
        type: 'sine' as OscillatorType,
        duration: 0.1,
        volume: 0.1,
    },
    hover: {
        freq1: 300,
        freq2: 400,
        type: 'sine' as OscillatorType,
        duration: 0.05,
        volume: 0.03,
    },
};

export function useSound() {
    const audioCtxRef = useRef<AudioContext | null>(null);

    const initAudio = () => {
        if (!audioCtxRef.current) {
            audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
        }
        if (audioCtxRef.current.state === 'suspended') {
            audioCtxRef.current.resume();
        }
    };

    const playSynthesizedSound = useCallback((type: 'click' | 'hover') => {
        try {
            initAudio();
            const ctx = audioCtxRef.current;
            if (!ctx) return;

            const { freq1, freq2, type: oscType, duration, volume } = SOUNDS[type];

            // Create oscillator and gain node
            const osc = ctx.createOscillator();
            const gainNode = ctx.createGain();

            osc.type = oscType;

            // Quick sweep for a "click" or "tick" feel
            osc.frequency.setValueAtTime(freq1, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(freq2, ctx.currentTime + duration);

            // Envelope to make it sound percussive and short without clicking/popping
            gainNode.gain.setValueAtTime(0, ctx.currentTime);
            gainNode.gain.linearRampToValueAtTime(volume, ctx.currentTime + 0.01);
            gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

            osc.connect(gainNode);
            gainNode.connect(ctx.destination);

            osc.start(ctx.currentTime);
            osc.stop(ctx.currentTime + duration);

        } catch (e) {
            console.warn("Audio play failed:", e);
        }
    }, []);

    const playClick = useCallback(() => playSynthesizedSound('click'), [playSynthesizedSound]);
    const playHover = useCallback(() => playSynthesizedSound('hover'), [playSynthesizedSound]);

    return { playClick, playHover };
}
