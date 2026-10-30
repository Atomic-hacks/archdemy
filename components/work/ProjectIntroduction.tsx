"use client";
import { useRef, useState, type KeyboardEvent } from "react";
import type { Project } from "@/lib/projects";

export default function ProjectIntroduction({ project }: { project: Project }) {
  const [tab, setTab] = useState(0);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const facts = [
    { label: "Client", value: project.client },
    { label: "Location", value: project.location },
    { label: "Size", value: project.size },
    { label: "Completed", value: project.completed },
    { label: "Scope", value: project.scopeDetail ?? project.service },
    { label: "Structure", value: project.structure },
    { label: "Facade", value: project.facade },
    { label: "Contractor", value: project.contractor },
  ].filter((f) => f.value);
  const keydown = (event: KeyboardEvent) => {
    let next = tab;
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") next = 1 - tab;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = 1;
    else return;
    event.preventDefault();
    setTab(next);
    buttons.current[next]?.focus();
  };
  return (
    <section
      id="project-introduction"
      className="site-gutter project-introduction"
    >
      <div
        role="tablist"
        aria-label="Project information"
        className="editorial-tabs"
        onKeyDown={keydown}
      >
        {["Introduction", "Details"].map((label, index) => (
          <button
            ref={(element) => {
              buttons.current[index] = element;
            }}
            key={label}
            id={`project-tab-${index}`}
            type="button"
            role="tab"
            aria-selected={tab === index}
            aria-controls={`project-panel-${index}`}
            tabIndex={tab === index ? 0 : -1}
            onClick={() => setTab(index)}
          >
            {label}
          </button>
        ))}
      </div>
      <div
        id="project-panel-0"
        role="tabpanel"
        aria-labelledby="project-tab-0"
        tabIndex={0}
        hidden={tab !== 0}
        className="project-tab-content"
      >
        <h2>{project.intro}</h2>
        <p className="project-overview">{project.overview}</p>
      </div>
      <div
        id="project-panel-1"
        role="tabpanel"
        aria-labelledby="project-tab-1"
        tabIndex={0}
        hidden={tab !== 1}
        className="project-tab-content project-facts"
      >
        <h2>Project details</h2>
        <dl>
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
