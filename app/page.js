import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
      </h1>
      <h1 style={{ color: "white", textAlign: "center" }}>
        <Link href="/meals">Meals Page</Link>
      </h1>
      <h1 style={{ color: "white", textAlign: "center" }}>
        <Link href="/meals/share">ShareMeals Page</Link>
      </h1>
      <h1 style={{ color: "white", textAlign: "center" }}>
        <Link href="/community">Community Page</Link>
      </h1>
      <h1 style={{ color: "white", textAlign: "center" }}>
        <Link href="/meals/slug">Community Page</Link>
      </h1>
    </main>
  );
}
