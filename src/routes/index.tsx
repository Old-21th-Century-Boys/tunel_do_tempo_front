import Home from '@Pages/Home';
import { Route, Routes } from 'react-router-dom';

const RouteController = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default RouteController;
