import { Route, Routes } from "react-router-dom";
import { LoginForm } from "./components/LoginForm";
import { SignupForm } from "./components/SignupForm";
import Forgetpassword from "./components/Forgetpassword";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/forgetpassword" element={<Forgetpassword />} />
      </Routes>
    </>
  );
}

export default App;
