import React, { useState } from 'react';

/**
 * Clickable step-by-step timeline. The progress line fills up to the active step
 * and the panel below shows the details of that step.
 */
export const Stepper = ({ steps, label }) => {
  const [active, setActive] = useState(0);
  const current = steps[active];
  const progress = steps.length > 1 ? active / (steps.length - 1) : 0;

  return (
    <div className="stepper">
      <div
        className="stepper-track"
        role="group"
        aria-label={label}
        style={{ '--n': steps.length, '--p': progress }}
      >
        <div className="stepper-line" aria-hidden="true">
          <div className="stepper-line-fill" />
        </div>
        {steps.map((step, i) => (
          <button
            key={step.label}
            type="button"
            className={`stepper-step${i === active ? ' is-active' : ''}${i < active ? ' is-done' : ''}`}
            aria-current={i === active ? 'step' : undefined}
            onClick={() => setActive(i)}
          >
            <span className="stepper-dot">{i + 1}</span>
            <span className="stepper-label">{step.label}</span>
          </button>
        ))}
      </div>

      <div className="stepper-panel" key={active} aria-live="polite">
        <span className="stepper-when">{current.when}</span>
        <h4>{current.title}</h4>
        <p>{current.text}</p>
        {current.meta && <span className="stepper-meta">{current.meta}</span>}
      </div>
    </div>
  );
};

/**
 * Cards that open and close on click. One card is open at a time.
 */
export const ReasonCards = ({ reasons }) => {
  const [open, setOpen] = useState(0);

  return (
    <div className="why-grid">
      {reasons.map((reason, i) => {
        const isOpen = open === i;
        return (
          <div key={reason.title} className={`why-card${isOpen ? ' is-open' : ''}`}>
            <button
              type="button"
              className="why-head"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : i)}
            >
              <span className="why-num">{i + 1}</span>
              <span>{reason.title}</span>
              <span className="why-icon" aria-hidden="true">+</span>
            </button>
            <div className="why-body">
              <div>
                <p>{reason.text}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
