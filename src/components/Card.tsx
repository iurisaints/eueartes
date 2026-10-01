import type { ReactNode } from "react";

type CardProps = {
  id: string;
  index: number;
  children: ReactNode;
};

export function Card({ id, index, children }: CardProps) {
  return (
    <section className="layer" id={id} style={{ zIndex: index }}>
      <div className="sheet" data-sheet>
        {children}
        <div className="shade" aria-hidden="true" />
      </div>
    </section>
  );
}
