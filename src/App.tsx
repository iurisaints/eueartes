import { Card } from "./components/Card";
import { Chrome } from "./components/Chrome";
import {
  About,
  Contact,
  Hero,
  Materials,
  Partners,
  Products,
  Timeline,
} from "./components/Sections";
import { useDeck } from "./useDeck";

const cards = [
  { id: "capa", node: <Hero /> },
  { id: "sobre", node: <About /> },
  { id: "historia", node: <Timeline /> },
  { id: "pecas", node: <Products /> },
  { id: "materiais", node: <Materials /> },
  { id: "parceiros", node: <Partners /> },
  { id: "contato", node: <Contact /> },
];

export default function App() {
  useDeck();

  return (
    <>
      <a className="skip" href="#sobre">
        Ir para o conteúdo
      </a>
      <Chrome />
      <main className="deck">
        {cards.map((card, index) => (
          <Card key={card.id} id={card.id} index={index + 1}>
            {card.node}
          </Card>
        ))}
      </main>
    </>
  );
}
