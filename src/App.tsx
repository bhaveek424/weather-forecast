import Header from './components/Header';
import InfoPanel from './components/InfoPanel';
import ContextProvider from './context';

function App() {
  return (
    <ContextProvider>
      <Header />
      <div className="w-full">
        <main className="w-full max-w-7xl mx-auto p-5 md:px-[100px] ">
          <InfoPanel />
        </main>
      </div>
    </ContextProvider>
  );
}

export default App;
