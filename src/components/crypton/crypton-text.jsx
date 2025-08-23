export default function CryptonText({ hero }) {
  const textSize = hero ? 'text-6xl' : 'text-4xl';
  return (
    <p className={`font-semibold ${textSize} text-white`}>
      <span className="font-extrabold text-blue-500">ک</span>
      <span className="font-semibold">ریپتون</span>
    </p>
  );
}
