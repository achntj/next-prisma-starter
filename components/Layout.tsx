import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
  <div className="bg-slate-50 prose">
    <div className="max-w-[750px] mx-auto flex flex-col min-h-screen">
    <Header />
    <div className="px-4 text-gray-700 flex-grow p-10">{props.children}</div>
    <Footer />
    </div>
  </div>
);

export default Layout;
