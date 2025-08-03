export default function CryptonLogo({ nav }) {
  let content = (
    <div className="border-8 border-blue-500 rounded-full w-18 h-18 relative">
      <p className="text-5xl font-extrabold text-blue-500 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-2/5">
        C
      </p>
    </div>
  );

  if (nav) {
    content = (
      <div className="border-6 border-blue-500 rounded-full w-12 h-12 relative">
        <p className="text-3xl font-extrabold text-blue-500 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-2/5">
          C
        </p>
      </div>
    );
  }
  return content;
}
