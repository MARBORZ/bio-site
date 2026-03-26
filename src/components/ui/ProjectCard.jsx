import { useRef, useState } from "react";


function ProjectCard({ project, variant }) {
  if (!project) return null;
  const [canHover, setHover] = useState(window.matchMedia("(hover: hover) and (pointer: fine)").matches)
  const isPlanned = variant === "planned";

  const cardRef = useRef(null);
  const glow = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!canHover) return;

    const rect = cardRef.current.getBoundingClientRect();
    const targetX = e.clientX - rect.left;
    const targetY = e.clientY - rect.top;

    glow.current.x += (targetX - glow.current.x) * 0.15;
    glow.current.y += (targetY - glow.current.y) * 0.15;

    cardRef.current.style.setProperty("--glow-x", `${glow.current.x}px`);
    cardRef.current.style.setProperty("--glow-y", `${glow.current.y}px`);
  };

  const { title, slug, description, stack = [] } = project;
  const cardClass = `project-card project-card--${variant}`;

  return (
    <a href={`https://github.com/MARBORZ/${slug}`} className={`${isPlanned ? "project-card--disabled" : ""}`}>
        <article 
          ref={cardRef}
          className={cardClass}
          onMouseMove={isPlanned ? undefined : handleMouseMove}
        >
        <div className="project-card__text">
          <h4 className="project-card__title">{title}</h4>

          <p className="project-card__description">
            {description}
          </p>
        </div>

        {stack.length > 0 && (
          <ul className="project-card__stack">
            {stack.map((tech) => (
              <li
                key={tech}
                className="project-card__stack-item"
              >
                {tech}
              </li>
            ))}
          </ul>
        )}
      </article>
    </a>
  );
}

export default ProjectCard;
