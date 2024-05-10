export default function MealDetailsPage({ params }) {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>Random Page</h1>
      <h1 style={{ color: "white", textAlign: "center" }}>{params.mealSlug}</h1>
    </main>
  );
}
