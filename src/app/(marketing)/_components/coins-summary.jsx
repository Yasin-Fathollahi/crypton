import CoinsTable from '@/components/coins/coins-table';
export default function CoinsSummary() {
  return (
    <section className="p-32">
      <h2 className="text-3xl">قیمت لحظه ای رمز ارز ها</h2>
      <CoinsTable limit={10} />
    </section>
  );
}
