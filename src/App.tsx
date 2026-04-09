import AppRoutes from '@/routes/AppRoutes';
import ErrorBoundary from '@/components/ErrorBoundary';
import Navbar from '@/components/Navbar';

function App() {
  return (
    <ErrorBoundary>
      <Navbar />
      <div className="mt-0">
        <AppRoutes />
      </div>
    </ErrorBoundary>
  );
}

export default App;
