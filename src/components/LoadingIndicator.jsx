export default function LoadingIndicator({ text = "Loading..." }) {
  return (
    <div className="flex justify-center py-8">
      <span className="text-blue-400 text-2xl animate-pulse">{text}</span>
    </div>
  );
}
