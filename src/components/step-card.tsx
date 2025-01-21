import { Chip } from "@/components/chip";

interface StepCardProps {
  step: string;
  headline: string;
  text: string;
}

export function StepCard({ step, headline, text }: StepCardProps) {
  return (
    <div className="py-4">
      <Chip text={step} />
      <h2 className="text-xl font-bold text-white">{headline}</h2>
      <p className="text-gray-400">{text}</p>
    </div>
  );
}
