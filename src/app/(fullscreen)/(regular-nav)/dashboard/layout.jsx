export default function DashboardLayout({ globalCoinsData, userSpecificData }) {
  return (
    <main>
      <section>{userSpecificData}</section>
      <section>{globalCoinsData}</section>
    </main>
  );
}
