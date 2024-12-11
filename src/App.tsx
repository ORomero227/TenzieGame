import "./App.css";

function App() {
  return (
    <main className="p-4 md:p-0 max-w-full">
      <section className="md:max-w-xl h-[400px] mx-auto my-36 p-10 rounded-xl bg-[#f5f5f5]">
        <h1 className="text-[#2b283a] font-karla tracking-tighter text-center font-semibold text-3xl">
          Tenzies
        </h1>
        <p className="mt-3 mx-auto font-inter font-normal text-base text-center text-[#4A4E74]">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
      </section>
    </main>
  );
}

export default App;
