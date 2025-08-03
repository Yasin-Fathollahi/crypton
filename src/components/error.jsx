export default function ErrorBox({ title, description }) {
  return (
    <div className="px-8 py-4 bg-rose-600/50 rounded-xl flex flex-col items-center gap-4 text-white/80 ">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-white/60">{description}</p>

      <button className="mt-2 px-6 py-2 bg-white text-black rounded-full border-3 border-solid border-gray-700/90 font-semibold text-sm hover:cursor-pointer hover:scale-105 transition-all duration-300 ">
        تلاش دوباره
      </button>
    </div>
  );
}
