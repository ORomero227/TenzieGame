import Dice from "./Dice";

function DiceBoard() {
  return (
    <div className="mt-10 flex justify-center">
      <div className="grid grid-cols-5 grid-rows-2 gap-6">
        <Dice diceNumber={1} />
        <Dice diceNumber={2} />
        <Dice diceNumber={3} />
        <Dice diceNumber={6} />
        <Dice diceNumber={1} />
        <Dice diceNumber={3} />
        <Dice diceNumber={4} />
        <Dice diceNumber={2} />
        <Dice diceNumber={6} />
        <Dice diceNumber={5} />
      </div>
    </div>
  );
}

export default DiceBoard;
