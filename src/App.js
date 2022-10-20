import { RouterProvider } from "react-router-dom";
import UserContext from "./contexts/user-context";
import { router } from "./router";

function App() {
  return (
    <div className='App'>
      <UserContext>
        <RouterProvider router={router} />
      </UserContext>
    </div>
  );
}

export default App;
