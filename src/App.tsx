import React from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import CreateRoutes from 'router';
import { useSelector } from 'react-redux';
import { RootReducerType } from 'modules';
import { Toaster } from 'react-hot-toast';
import { ContextModal } from 'components/common/Modal';
import TopBtn from 'components/common/TopBtn';
import Header from 'components/layout/header/Header';
import Footer from 'components/layout/header/footer/Footer';

function AppContent() {
  const { open } = useSelector((state: RootReducerType) => state.modal);
  const location = useLocation();

  const hideHeaderPaths = ['/'];
  const shouldHideHeader = hideHeaderPaths.includes(location.pathname);

  return (
    <>
      {!shouldHideHeader && <Header />}
      <CreateRoutes />
      {open && <ContextModal />}
      <TopBtn />
      <Toaster
        toastOptions={{
          style: {
            border: 'none',
            background: '#3F424A',
            color: '#fff',
          },
        }}
      />
      {!shouldHideHeader && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
