import { getSession } from "@/lib/getSession";

export default async function Home() {
  const session = await getSession();
  return (
    <>
      <h1>home page</h1>
      <h1>{JSON.stringify(session, null, 2)}</h1>
    </>
  );
}
