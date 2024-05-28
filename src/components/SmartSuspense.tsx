// @ts-nocheck
import { Suspense, useCallback, useEffect, useRef, useState } from "react";

const PromiseThrower = () => {
  throw new Promise(() => {});
};

const FallbackDelayer = ({
  fallback,
  fallbackDelayMs = void 0,
  onShowFallback,
}) => {
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    if (fallbackDelayMs) {
      const timeoutId = setTimeout(() => {
        setShowFallback(true);
        onShowFallback();
      }, fallbackDelayMs);

      return () => {
        clearInterval(timeoutId);
      };
    } else {
      setShowFallback(true);
      onShowFallback();
    }
  }, [fallbackDelayMs, onShowFallback]);

  return showFallback ? fallback : null;
};

export const SmartSuspense = ({
  children,
  fallback,
  fallbackDelayMs = 0,
  fallbackMinDurationMs = 0,
}) => {
  const [isWaitingFallbackMinDurationMs, setIsWaitingFallbackMinDurationMs] =
    useState(false);

  const timeoutIdRef = useRef(undefined);

  const startWaitingFallbackMinDurationMs = useCallback(() => {
    setIsWaitingFallbackMinDurationMs(true);

    timeoutIdRef.current && clearInterval(timeoutIdRef.current);
    timeoutIdRef.current = setTimeout(() => {
      setIsWaitingFallbackMinDurationMs(false);
    }, fallbackMinDurationMs);
  }, [fallbackMinDurationMs]);

  useEffect(() => {
    return () => timeoutIdRef.current && clearInterval(timeoutIdRef.current);
  }, []);

  return (
    <Suspense
      fallback={
        <FallbackDelayer
          fallback={fallback}
          fallbackDelayMs={fallbackDelayMs}
          onShowFallback={startWaitingFallbackMinDurationMs}
        />
      }
    >
      {isWaitingFallbackMinDurationMs && <PromiseThrower />}
      {children}
    </Suspense>
  );
};
