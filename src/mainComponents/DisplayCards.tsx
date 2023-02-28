import React, { useState } from "react";

export default function DisplayCards() {
  const [cards, setCards] = useState<React.ReactNode[]>([]);

  return (
    <div className="main-screen">
      <div className={"cards"} data-testid={"cards-section"}>
        {cards}
      </div>
    </div>
  );
}
