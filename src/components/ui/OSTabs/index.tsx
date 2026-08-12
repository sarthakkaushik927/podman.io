import React from 'react';
import { Icon } from '@iconify/react';
import { OperatingSystem } from '@site/src/hooks/useOSDetection';

interface OSTabsProps {
  selectedOS: OperatingSystem;
  onSelect: (os: OperatingSystem) => void;
}

const OSTabs = ({ selectedOS, onSelect }: OSTabsProps): JSX.Element => {
  const tabs: { id: OperatingSystem; label: string; icon: string }[] = [
    { id: 'windows', label: 'Windows', icon: 'fa-brands:windows' },
    { id: 'mac', label: 'macOS', icon: 'fa-brands:apple' },
    { id: 'linux', label: 'Linux', icon: 'fa-brands:linux' },
  ];

  return (
    <div className="mx-auto mb-12 flex max-w-lg justify-center rounded-full bg-gray-200 p-2 shadow-inner dark:bg-gray-900">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onSelect(tab.id)}
          className={`flex flex-1 items-center justify-center gap-2 rounded-full py-3 text-sm font-bold transition-all duration-300 md:text-base ${
            selectedOS === tab.id
              ? 'bg-white text-purple-700 shadow-md dark:bg-gray-700 dark:text-purple-400'
              : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200'
          }`}
        >
          <Icon icon={tab.icon} className="text-xl" />
          <span>{tab.label}</span>
        </button>
      ))}
    </div>
  );
};

export default OSTabs;
