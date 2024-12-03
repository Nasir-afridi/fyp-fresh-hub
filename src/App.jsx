import AppRoutes from "./app-routes";
import TopNav from "./components/nav/index";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <TopNav />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
