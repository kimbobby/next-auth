import { getSession } from "@/lib/getSession";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default async function layout({ children }: { children: ReactNode }) {
  const session: any = await getSession();
  if (!session) redirect("/login");
  if (session.user?.role !== "admin") redirect("/");
  return <>{children}</>;
}
