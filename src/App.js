import Banner from "./components/Banner/Banner";
import AppRouter from "./router/AppRouter";
import "./App.css"

function App() {
  return (
    <div id="main-wrapper">
      <Banner/>
      <AppRouter/>
    </div>
  );
}

export default App;
