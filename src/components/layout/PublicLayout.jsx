import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function PublicLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}