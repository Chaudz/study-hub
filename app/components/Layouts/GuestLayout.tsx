import Footer from "./components/Footer";
import Header from "./components/Header";

interface Props {
  children: React.ReactNode;
}

const GuestLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen w-full mx-auto overflow-x-hidden">
      <Header />
      <main className="flex-grow pt-20">{children}</main>
      <Footer />
    </div>
  );
};

export default GuestLayout;
