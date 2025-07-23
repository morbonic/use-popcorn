import { useState } from "react";
import { WatchedSummary } from "./components/watched/WatchedSummary";
import { WatchedList } from "./components/watched/WatchedList";

export function WatchedBox({ watched }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && (
        <>
          <WatchedSummary watched={watched} />

          <WatchedList watched={watched} />
        </>
      )}
    </div>
  );
}
