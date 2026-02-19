import { RouterProvider } from "react-router-dom";
import mainRouter from "routes";
import GlobalStyle from "style/global.style";
import { Provider } from "react-redux";
import store from "store";
import AudioPlayer from "components/custom/audio";
import { useEffect, useRef, useState } from "react";
import SealYellow from "assets/image/seal-yellow.png";

const INTRO_VIDEO_SRC = `${process.env.PUBLIC_URL || ""}/Start.mp4`;
const LOADER_DURATION_MS = 4000;
const LOADER_FINISH_POLISH_MS = 320;

type TransitionPhase = "intro" | "loader" | "app";

function App() {
  const [phase, setPhase] = useState<TransitionPhase>("intro");
  const [loaderProgress, setLoaderProgress] = useState(0);
  const [loaderComplete, setLoaderComplete] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Ensure intro video starts playing when shown
  useEffect(() => {
    if (phase !== "intro") return;
    const video = videoRef.current;
    if (video) {
      video
        .play()
        .catch(() => {
          // Autoplay might be blocked; user can hit Skip if needed
        });
    } else {
      const t = setTimeout(() => {
        if (videoRef.current) {
          videoRef.current
            .play()
            .catch(() => {
              /* ignore */
            });
        }
      }, 100);
      return () => clearTimeout(t);
    }
  }, [phase]);

  // Loader progress and transition into app
  useEffect(() => {
    if (phase !== "loader") return;

    let rafId = 0;
    let doneTimer: ReturnType<typeof setTimeout> | undefined;
    const startedAt = performance.now();
    setLoaderProgress(0);
    setLoaderComplete(false);

    const animateProgress = (now: number) => {
      const elapsed = now - startedAt;
      const raw = Math.min(100, (elapsed / LOADER_DURATION_MS) * 100);
      const next = Math.round(raw);

      setLoaderProgress((prev) => (prev === next ? prev : next));

      if (elapsed < LOADER_DURATION_MS) {
        rafId = requestAnimationFrame(animateProgress);
        return;
      }

      setLoaderProgress(100);
      setLoaderComplete(true);
      doneTimer = setTimeout(() => setPhase("app"), LOADER_FINISH_POLISH_MS);
    };

    rafId = requestAnimationFrame(animateProgress);

    return () => {
      cancelAnimationFrame(rafId);
      if (doneTimer) clearTimeout(doneTimer);
    };
  }, [phase]);

  const handleIntroEnded = () => setPhase("loader");

  const handleSkipIntro = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setPhase("loader");
  };

  return (
    <div className="App">
      <GlobalStyle />
      {phase !== "app" ? (
        <div className="intro-transition-root">
          <div className="intro-video-overlay">
            <video
              ref={videoRef}
              src={INTRO_VIDEO_SRC}
              autoPlay
              muted
              playsInline
              onEnded={handleIntroEnded}
            />
          </div>
          {phase === "intro" && (
            <button
              type="button"
              className="intro-skip-button"
              onClick={handleSkipIntro}
            >
              Skip
            </button>
          )}
          {phase === "loader" && (
            <div
              className={`post-video-loader ${
                loaderComplete ? "is-complete" : ""
              }`}
            >
              <div className="post-video-loader__seal-wrap">
                <img
                  src={SealYellow}
                  alt="seal loader"
                  className="post-video-loader__seal"
                />
              </div>
              <div className="post-video-loader__percent">
                <span>{loaderProgress}%</span>
                <span
                  aria-hidden="true"
                  className="post-video-loader__sparkle"
                />
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="portfolio-shell">
          <Provider store={store}>
            <RouterProvider router={mainRouter} />
          </Provider>
          {/* Audio kept but disabled by default, and no popup */}
          <AudioPlayer isEnableSong={false} />
        </div>
      )}
    </div>
  );
}

export default App;

