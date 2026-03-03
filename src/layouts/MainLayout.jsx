import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <div style={{ minHeight: "80vh", padding: "2rem", backgroundColor: "#f5f6fa" }}>
        {children}
      </div>
      <Footer />
    </>
  );
}

export default MainLayout;