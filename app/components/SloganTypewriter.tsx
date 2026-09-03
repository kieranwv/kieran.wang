"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

const LINE_FIRST = "The design is not just what it looks like and feels like.";
const LINE_LAST = "The design is how it works.";
const TOTAL = LINE_FIRST.length + LINE_LAST.length;
const START_DELAY_MS = 280;
const LINE_GAP_MS = 420;
const LINE_FIRST_MS = 44;
const LINE_LAST_MS = 62;

function TypedLine({
  text,
  typed,
  caret,
}: {
  text: string;
  typed: number;
  caret: boolean;
}) {
  const rootRef = useRef<HTMLSpanElement>(null);
  const caretRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const mark = caretRef.current;
    if (!root || !mark) return;

    const positionCaret = () => {
      const chars = root.querySelectorAll<HTMLElement>(".slogan-ch");
      const atEnd = typed >= chars.length;
      const target = chars[atEnd ? chars.length - 1 : typed];
      if (!target) return;

      const rootBox = root.getBoundingClientRect();
      const box = target.getBoundingClientRect();
      const caretGap = typed > 0 ? Math.max(1, Math.round(box.height * 0.04)) : 0;
      const x = Math.round((atEnd ? box.right : box.left) - rootBox.left) + caretGap;
      const y = Math.round(box.top - rootBox.top + box.height * 0.14);

      mark.style.transform = `translate(${x}px, ${y}px)`;
      mark.style.height = `${Math.round(box.height * 0.72)}px`;
    };

    positionCaret();
    const observer = new ResizeObserver(positionCaret);
    observer.observe(root);
    return () => observer.disconnect();
  }, [caret, typed]);

  const words = text.match(/\S+\s*/g) ?? [text];

  return (
    <span className="slogan-type" ref={rootRef}>
      {words.map((word, wordIndex) => {
        const wordOffset = words.slice(0, wordIndex).join("").length;

        return (
          <span className="slogan-word" key={`${word}-${wordIndex}`}>
            {[...word].map((character, characterIndex) => {
              const index = wordOffset + characterIndex;
              return (
                <span key={index} className={`slogan-ch${index < typed ? " is-typed" : " is-pending"}`}>
                  {character}
                </span>
              );
            })}
          </span>
        );
      })}
      <span className={`slogan-caret${caret ? " is-on" : ""}`} ref={caretRef} aria-hidden="true" />
    </span>
  );
}

export function SloganTypewriter() {
  const [typed, setTyped] = useState(0);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const reducedMotionTimer = window.setTimeout(() => {
        setTyped(TOTAL);
        setComplete(true);
      }, 0);
      return () => window.clearTimeout(reducedMotionTimer);
    }

    let cancelled = false;
    let timer = 0;
    let current = 0;

    const tick = () => {
      if (cancelled) return;
      current += 1;
      setTyped(current);
      if (current >= TOTAL) {
        setComplete(true);
        return;
      }
      const pause = current === LINE_FIRST.length;
      const onLastLine = current > LINE_FIRST.length;
      timer = window.setTimeout(tick, pause ? LINE_GAP_MS : onLastLine ? LINE_LAST_MS : LINE_FIRST_MS);
    };

    timer = window.setTimeout(tick, START_DELAY_MS);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, []);

  const firstTyped = Math.min(typed, LINE_FIRST.length);
  const lastTyped = Math.max(typed - LINE_FIRST.length, 0);
  const caretOnFirst = typed < LINE_FIRST.length || (typed === LINE_FIRST.length && !complete);
  const caretOnLast = typed > LINE_FIRST.length || complete;

  return (
    <span className={`slogan-copy${complete ? " is-complete" : ""}`}>
      <noscript>
        <style>{".slogan-ch.is-pending{opacity:1}.slogan-caret{display:none}"}</style>
      </noscript>
      <span className="slogan-line slogan-line-first">
        <TypedLine text={LINE_FIRST} typed={firstTyped} caret={caretOnFirst} />
      </span>
      <span className="slogan-line slogan-line-last">
        <TypedLine text={LINE_LAST} typed={lastTyped} caret={caretOnLast && !caretOnFirst} />
      </span>
    </span>
  );
}
