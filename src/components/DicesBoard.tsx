import { useState } from "react";
import Dice from "./Dice";
import { DiceObject } from "../interfaces/dice";
import { nanoid } from "nanoid";

function DiceBoard() {
  const [dice, setDice] = useState<DiceObject[]>(() => generateAllNewDice());

  const gameWon =
    dice.every((die) => die.isHeld) &&
    dice.every((die) => die.value === dice[0].value);

  function generateAllNewDice() {
    return new Array<DiceObject>(10)
      .fill({ id: "", value: 0, isHeld: false })
      .map(() => ({
        id: nanoid(),
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
      }));
  }

  function rollDice() {
    if (!gameWon) {
      setDice((oldDice) =>
        oldDice.map((die) =>
          die.isHeld
            ? die
            : { ...die, value: Math.ceil(Math.random() * 6), isHeld: false }
        )
      );
    } else {
      setDice(generateAllNewDice());
    }
  }

  function hold(id: string) {
    setDice((oldDice) =>
      oldDice.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die
      )
    );
  }

  return (
    <section className="md:max-w-xl h-[400px] mx-auto my-36 p-10 rounded-xl bg-[#f5f5f5]">
      <h1 className="text-[#2b283a] font-inter tracking-tighter text-center font-semibold text-3xl">
        {gameWon ? "Congrats You Won!" : "Tenzie"}
      </h1>
      <p className="mt-3 mx-auto font-inter font-normal text-base text-center text-[#4A4E74]">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="pt-8 pb-7 flex justify-center">
        <div className="grid grid-cols-5 grid-rows-2 gap-6">
          {dice.map((dice) => (
            <Dice
              diceNumber={dice.value}
              isHeld={dice.isHeld}
              key={dice.id}
              hold={() => hold(dice.id)}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <button
          onClick={rollDice}
          className="font-inter rounded-md shadow-md text-sm w-48 px-6 py-3 text-white bg-[#5035FF]"
        >
          {gameWon ? "New Game" : "Roll"}
        </button>
      </div>
    </section>
  );
}

export default DiceBoard;
