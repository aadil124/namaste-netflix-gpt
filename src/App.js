import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./Redux/appStore";

function App() {
  console.log(appStore);
  return (
    <div>
      <Provider store={appStore}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
