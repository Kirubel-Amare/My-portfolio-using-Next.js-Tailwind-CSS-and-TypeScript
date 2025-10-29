import { CheckCircle } from 'lucide-react';

interface SuccessMessageProps {
  title: string;
  message: string;
}

export const SuccessMessage = ({ title, message }: SuccessMessageProps) => {
  return (
    <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
      <div>
        <p className="text-green-800 font-medium">{title}</p>
        <p className="text-green-700 text-sm">{message}</p>
      </div>
    </div>
  );
};