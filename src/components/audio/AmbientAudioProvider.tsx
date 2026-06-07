"use client";

import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { gsap } from "@/lib/gsap";

const AUDIO_SRC = "/bg-music.mp3";
const STORAGE_KEY = "ambient-audio-enabled";
const TARGET_VOLUME = 0.08;

type AmbientAudioContextValue = {
  enabled: boolean;
  toggle: () => void;
  setEnabled: (enabled: boolean) => void;
};

const AmbientAudioContext = createContext<AmbientAudioContextValue | null>(null);

export function AmbientAudioProvider({ children }: { children: ReactNode }) {
  const [enabled, setEnabledState] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const volumeTweenRef = useRef<gsap.core.Tween | null>(null);
  const enabledRef = useRef(false);
  const hasInteractedRef = useRef(false);
  const hasLoadedPreferenceRef = useRef(false);

  const ensureAudio = useCallback(() => {
    if (audioRef.current) {
      return audioRef.current;
    }

    const audio = new Audio(AUDIO_SRC);
    audio.loop = true;
    audio.preload = "auto";
    audio.volume = 0;
    audioRef.current = audio;
    audio.load();

    return audio;
  }, []);

  const stopTween = useCallback(() => {
    volumeTweenRef.current?.kill();
    volumeTweenRef.current = null;
  }, []);

  const fadeIn = useCallback(async () => {
    const audio = ensureAudio();
    stopTween();

    audio.volume = 0;

    try {
      await audio.play();
    } catch {
      return;
    }

    volumeTweenRef.current = gsap.to(audio, {
      volume: TARGET_VOLUME,
      duration: 1.5,
      ease: "power2.out",
      overwrite: true,
    });
  }, [ensureAudio, stopTween]);

  const fadeOut = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    stopTween();

    volumeTweenRef.current = gsap.to(audio, {
      volume: 0,
      duration: 1,
      ease: "power2.inOut",
      overwrite: true,
      onComplete: () => {
        audio.pause();
      },
    });
  }, [stopTween]);

  const setEnabled = useCallback(
    (nextEnabled: boolean) => {
      enabledRef.current = nextEnabled;
      setEnabledState(nextEnabled);
      localStorage.setItem(STORAGE_KEY, nextEnabled ? "true" : "false");

      if (nextEnabled) {
        hasInteractedRef.current = true;
        void fadeIn();
      } else {
        fadeOut();
      }
    },
    [fadeIn, fadeOut],
  );

  const toggle = useCallback(() => {
    setEnabled(!enabledRef.current);
  }, [setEnabled]);

  useEffect(() => {
    const savedPreference = localStorage.getItem(STORAGE_KEY);
    const shouldRestore = savedPreference === "true";

    enabledRef.current = shouldRestore;
    hasLoadedPreferenceRef.current = true;

    if (!shouldRestore) {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      setEnabledState(true);
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const handleFirstInteraction = () => {
      if (hasInteractedRef.current) {
        return;
      }

      hasInteractedRef.current = true;
      ensureAudio();

      if (enabledRef.current && hasLoadedPreferenceRef.current) {
        void fadeIn();
      }
    };

    window.addEventListener("pointerdown", handleFirstInteraction, { once: true, passive: true });
    window.addEventListener("keydown", handleFirstInteraction, { once: true });

    return () => {
      window.removeEventListener("pointerdown", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
      stopTween();
      audioRef.current?.pause();
    };
  }, [ensureAudio, fadeIn, stopTween]);

  const value = useMemo(
    () => ({
      enabled,
      toggle,
      setEnabled,
    }),
    [enabled, toggle, setEnabled],
  );

  return <AmbientAudioContext.Provider value={value}>{children}</AmbientAudioContext.Provider>;
}

export function useAmbientAudio() {
  const context = useContext(AmbientAudioContext);

  if (!context) {
    throw new Error("useAmbientAudio must be used inside AmbientAudioProvider.");
  }

  return context;
}
