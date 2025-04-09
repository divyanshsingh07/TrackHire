import { Outlet, useLocation } from "react-router-dom";
import Header from "@/components/header";
import Footer from "@/components/footer";

const AppLayout = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:6rem_4rem] dark:bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)]"></div>
      <Header />
      <main className={`flex-1 ${!isAuthPage ? "pt-24" : ""}`}>
        <div className="container mx-auto px-4">
          <Outlet />
        </div>
      </main>
      {!isAuthPage && <Footer />}
    </div>
  );
};

export default AppLayout;
