import "./App.css";
import { Banner } from "./components/Banner";
import DownloadAppSection from "./components/DownloadAppSection ";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import InfoMember from "./components/InfoMember";
import LikeToDo from "./components/LikeToDo";
import MemberList from "./components/MemberList";
import { NavigationBar } from "./components/NavigationBar ";

function App() {
  return (
    <div className="App">
      <Header />
      <NavigationBar />
      <Banner />
      <InfoMember />
      <LikeToDo />
      <MemberList />
      <DownloadAppSection />
      <Footer />
    </div>
  );
}

export default App;
