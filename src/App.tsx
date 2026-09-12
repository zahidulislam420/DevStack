import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechnologyGrid } from './components/Technologies';
import { YourStack } from './components/YourStack';
import { Footer } from './components/Footer';
import { ToastContainer } from './components/UI';
import { useTechnologies } from './hooks/useTechnologies';
import { useStack } from './hooks/useStack';

function AppContent() {
  const { technologies, loading, error } = useTechnologies();
  const { stack, addToStack, removeFromStack, removeAll, isInStack } = useStack();

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-white">
        <div className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-pink-500 border-t-transparent" />
          <p className="text-gray-600">Loading technologies...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-white">
        <div className="p-6 text-center">
          <p className="mb-4 text-red-500">Failed to load technologies</p>
          <p className="text-sm text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        <Hero />

        <div className="mx-auto w-full max-w-[1320px] px-4 pb-20 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-8">
            <TechnologyGrid
              technologies={technologies}
              onAddToStack={addToStack}
              isInStack={isInStack}
            />
            <div className="mt-8 lg:mt-0">
              <YourStack
                stack={stack}
                onRemove={removeFromStack}
                onRemoveAll={removeAll}
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
