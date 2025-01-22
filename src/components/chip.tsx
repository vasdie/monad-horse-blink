interface ChipProps {
  text: string;
}

export function Chip({ text }: ChipProps) {
  return (
    <p className="text-[14px] border text-green-400 border-green-800 rounded-[10px] px-2 py-1 mt-4 mb-2  inline-block bg-opacity-10 bg-green-500">
      {text}
    </p>
  );
}
