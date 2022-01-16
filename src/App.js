import "./assets/css/main.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Card from "./components/Card";
import data from "./data";
function App() {
  const articles = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <div className="app">
      <Header />
      <div className="container">{articles}</div>
      <Footer />
    </div>
  );
}

export default App;
