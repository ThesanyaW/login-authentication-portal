import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AccessTokenPage } from './pages/AccessTokenPage';
import { LoginPage } from './pages/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/access-token" element={<AccessTokenPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;