import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  title: string;
  message: string;
}

export const ErrorMessage = ({ title, message }: ErrorMessageProps) => {
  return (
    <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
      <div>
        <p className="text-red-800 font-medium">{title}</p>
        <p className="text-red-700 text-sm">{message}</p>
      </div>
    </div>
  );
};