import CoinsTable from '@/components/coins/table/coins-table';
export default function CoinsSummary({ limit, isHome, page, searchParams }) {
  return (
    <section className="pt-32 px-32 pb-24">
      <h2 className="text-3xl font-bold">قیمت لحظه ای رمز ارز ها</h2>
      <CoinsTable
        limit={limit}
        isHome={isHome}
        page={page}
        searchParams={searchParams}
      />
    </section>
  );
}
