import React from 'react';
import { Icon } from '@iconify/react';
import Button from '@site/src/components/utilities/Button';

interface DownloadCardProps {
  title: string;
  subtitle: string;
  icon: string;
  path: string;
}

const DownloadCard = ({ title, subtitle, icon, path }: DownloadCardProps): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-between rounded-lg bg-gray-50 p-4 shadow-xl dark:bg-gray-700 dark:shadow-none lg:p-8">
      <div className="mb-6 flex w-full flex-col items-center gap-4 text-center">
        <Icon icon={icon} className="text-6xl text-purple-700 dark:text-purple-500" />
        <div>
          <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-gray-100">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{subtitle}</p>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <Button as="link" text="Download" path={path} />
      </div>
    </div>
  );
};

export default DownloadCard;
