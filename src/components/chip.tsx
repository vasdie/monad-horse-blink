interface ChipProps {
  text: string;
}

export function Chip({ text }: ChipProps) {
  return (
    <p className="text-lg border text-green-400 border-green-800 rounded-full px-4 py-1 mt-4 mb-2 inline-block shadow-[0_0_15px_rgba(34,197,94,0.5)] bg-opacity-10 bg-green-500">
      {text}
    </p>
  );
}
