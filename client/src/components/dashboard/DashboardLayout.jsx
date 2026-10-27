import { useState } from "react";
import DashboardSidebar from "./DashboardSidebar.jsx";
import DashboardTopbar from "./DashboardTopbar.jsx";

export default function DashboardLayout({ go, role = "student", title, subtitle, children }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  return <div className="min-h-[calc(100vh-80px)] bg-[#f4f8fc] text-[#172b4d]"><div className="mx-auto flex max-w-[1600px]"><DashboardSidebar go={go} role={role} mobileOpen={mobileOpen} closeMobile={() => setMobileOpen(false)} /><div className="min-w-0 flex-1"><DashboardTopbar go={go} role={role} onMenu={() => setMobileOpen(true)} /><main className="px-4 py-6 sm:px-6 lg:px-8 lg:py-8"><div className="mb-7"><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#008b83]">{role === "admin" ? "TekLight administration" : "Student workspace"}</p><h1 className="mt-2 text-2xl font-bold tracking-tight text-[#102b46] sm:text-3xl">{title}</h1>{subtitle && <p className="mt-2 max-w-3xl text-sm leading-6 text-[#65758b]">{subtitle}</p>}</div>{children}</main></div></div></div>;
}
