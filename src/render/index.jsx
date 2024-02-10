import Routes from "./routes.jsx";
import ErrorBoundary from "./components/ErrorBoundary";

const App = () => {

  return (
    <ErrorBoundary>
          <Routes />
    </ErrorBoundary>
  );
};

export default App;
