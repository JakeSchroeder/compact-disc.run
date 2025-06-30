export function SafariWarning() {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center">
      <div className="">WarningIcon</div>
      <h2>Safari is not recommended.</h2>
      <p>
        There are a number of outstanding webkit issues that make dedicated FPS style games impossible to play
        correctly.
      </p>
    </div>
  );
}
