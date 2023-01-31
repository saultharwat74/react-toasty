import { useState } from "react";
import "./App.css";
import { Toasty } from "./components";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <Toasty
        onClose={() => setOpen(false)}
        isOpen={open}
        message={"Hey"}
        type={"success"}
        color={"#fff"}
      />
      <button
        onClick={() => {
          setOpen(true);
        }}
        className={
          "rounded-md border border-slate-300 hover:border-slate-400 p-3 text-base text-slate-300 hover:text-slate-400 "
        }
      >
        Show Toast
      </button>
    </div>
  );
}

export default App;
