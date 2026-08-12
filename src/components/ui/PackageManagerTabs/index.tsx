import React, { useState } from 'react';
import CodeBlock from '@theme/CodeBlock';

interface PackageManagerData {
  tool: string;
  command: string;
}

interface PackageManagerTabsProps {
  desktop?: PackageManagerData;
  cli?: PackageManagerData;
}

const PackageManagerTabs = ({ desktop, cli }: PackageManagerTabsProps): JSX.Element => {
  const [activeTab, setActiveTab] = useState<'desktop' | 'cli'>(desktop ? 'desktop' : 'cli');

  return (
    <div className="mx-auto w-full max-w-3xl overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-800">
      <div className="flex border-b border-gray-200 dark:border-gray-700">
        {desktop && (
          <button
            className={`flex-1 py-4 text-center font-medium transition-colors ${
              activeTab === 'desktop'
                ? 'border-b-2 border-purple-500 text-purple-700 dark:text-purple-400'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
            onClick={() => setActiveTab('desktop')}
          >
            Podman Desktop
          </button>
        )}
        {cli && (
          <button
            className={`flex-1 py-4 text-center font-medium transition-colors ${
              activeTab === 'cli'
                ? 'border-b-2 border-purple-500 text-purple-700 dark:text-purple-400'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
            onClick={() => setActiveTab('cli')}
          >
            Podman CLI
          </button>
        )}
      </div>
      <div className="p-6">
        <h4 className="mb-4 text-lg font-medium text-gray-900 dark:text-gray-100">
          Install via {activeTab === 'desktop' ? desktop?.tool : cli?.tool}
        </h4>
        <CodeBlock language="bash" className="mb-0">
          {activeTab === 'desktop' ? desktop?.command : cli?.command}
        </CodeBlock>
      </div>
    </div>
  );
};

export default PackageManagerTabs;
