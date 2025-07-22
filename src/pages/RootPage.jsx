import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function RootPage() {
  return (
    <>
      <div className="min-h-screen w-full bg-gradient-to-r from-[#112D60] to-[#B6C0C5] text-white">
        {/* <Header /> */}
        <Outlet />
        {/* <Footer /> */}
      </div>
    </>
  );
}
