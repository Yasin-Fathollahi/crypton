export default function ProfileLayout({ favorites, profile }) {
  return (
    <main>
      <section>{profile}</section>
      <section>{favorites}</section>
    </main>
  );
}
