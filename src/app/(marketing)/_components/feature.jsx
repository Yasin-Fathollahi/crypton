export default function Feature({ Icon, title, description }) {
  return (
    <figure className="flex flex-col items-center p-4 text-sm">
      <div className="pb-6">
        <Icon size="32" />
      </div>
      <h3 className="pb-2 font-semibold">{title}</h3>
      <p className="text-center text-gray-400">{description}</p>
    </figure>
  );
}
