type DiceProps = {
  diceNumber: number;
};

function Dice({ diceNumber }: DiceProps) {
  return (
    <button className="size-14 bg-white shadow-lg rounded-md font-inter font-normal text-2xl text-center p-2">
      {diceNumber}
    </button>
  );
}

export default Dice;
