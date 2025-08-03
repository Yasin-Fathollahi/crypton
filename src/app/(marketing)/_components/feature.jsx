export default function Feature({ Icon, title, description }) {
  return (
    <figure className="flex flex-col items-center p-4">
      <div className="pb-6">
        <Icon size="32" />
      </div>
      <h3 className="pb-2 font-bold">{title}</h3>
      <p className="text-center text-slate-500 text-sm">{description}</p>
    </figure>
  );
}
