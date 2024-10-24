import Navbar from "@/components/Navbar";
import "./globals.css";
import Header from "@/components/Header";


export const metadata = {
  title: "Intelipod 2.O",
  description: "Intelipod 2.O Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen">
      <div class="relative h-full w-full bg-slate-950">
        <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
        <Navbar />
        <Header />
        <main className=" ">
          {children}
        </main>
        </div></div>
      </body>

    </html>
  );
}
