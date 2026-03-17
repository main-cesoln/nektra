export default function FormSuccessMessage({
  heading,
  message,
}: {
  heading: string;
  message: string;
}) {
  return (
    <div className="text-center py-12">
      <div className="w-16 h-16 rounded-full bg-accent-green/20 flex items-center justify-center mx-auto mb-4">
        <span className="text-accent-green text-2xl">&#10003;</span>
      </div>
      <h3 className="font-heading text-xl font-bold text-white mb-2">{heading}</h3>
      <p className="text-gray-400">{message}</p>
    </div>
  );
}
