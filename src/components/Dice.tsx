type DiceProps = {
  diceNumber: number;
  isHeld: boolean;
  hold: () => void;
};

function Dice({ diceNumber, isHeld, hold }: DiceProps) {
  const background = isHeld ? "bg-[#59E391]" : "bg-white";
  return (
    <button
      onClick={hold}
      aria-pressed={isHeld}
      aria-label={`Die with value ${diceNumber}, ${
        isHeld ? "held" : "not held"
      }`}
      className={`size-14 ${background} shadow-lg rounded-md font-inter font-normal text-2xl text-center p-2`}
    >
      {diceNumber}
    </button>
  );
}

export default Dice;
