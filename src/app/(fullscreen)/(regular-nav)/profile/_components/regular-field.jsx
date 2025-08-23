export default function RegularField({ title, content }) {
  return (
    <li>
      <span className="font-bold text-blue-400">{title}: </span>
      <span>{content}</span>
    </li>
  );
}
