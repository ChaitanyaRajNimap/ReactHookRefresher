import "./App.css";
import ClassUseEffectIncorrectDep from "./components/ClassUseEffectIncorrectDep";
import UseEffectIncorrectDep from "./components/UseEffectIncorrectDep";
// import UseEffectCleanup from "./components/UseEffectCleanup";
// import UseEffectOnce from "./components/UseEffectOnce";
// import ClassUseEffectOnce from "./components/ClassUseEffectOnce";
// import ClassUseEffect from "./components/ClassUseEffect";
// import UseEffect from "./components/UseEffect";
// import UseEffectCondRend from "./components/UseEffectCondRend";
// import UseStateWithArr from "./components/UseStateWithArr";
// import UseStateWithObj from "./components/UseStateWithObj";
// import ClassUseHook from "./components/ClassUseHook";
// import UseState from "./components/UseState";

function App() {
  return (
    <div className="App">
      {/* <ClassUseHook />
      <UseState /> */}
      {/* <UseStateWithObj /> */}
      {/* <UseStateWithArr /> */}
      {/* <ClassUseEffect /> */}
      {/* <UseEffect /> */}
      {/* <UseEffectCondRend /> */}
      {/* <ClassUseEffectOnce /> */}
      {/* <UseEffectOnce /> */}
      {/* <UseEffectCleanup /> */}
      <ClassUseEffectIncorrectDep />
      <UseEffectIncorrectDep />
    </div>
  );
}

export default App;
