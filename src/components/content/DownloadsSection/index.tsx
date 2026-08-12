import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { useOSDetection } from '@site/src/hooks/useOSDetection';
import { downloadsData } from '@site/src/data/downloadsData';
import DownloadCard from '@site/src/components/ui/DownloadCard';
import PackageManagerTabs from '@site/src/components/ui/PackageManagerTabs';
import SectionHeader from '@site/src/components/layout/SectionHeader';

const DetectedOSBadge = ({ os, arch }: { os: string; arch: string }) => {
  const formattedOS = os.charAt(0).toUpperCase() + os.slice(1);
  const architecture = arch !== 'unknown' ? `(${arch})` : '';

  return (
    <div className="mb-12 text-center">
      <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-900 dark:text-blue-100">
        Detected OS: {formattedOS} {architecture}
      </span>
    </div>
  );
};

const DownloadsContent = () => {
  const { os, arch } = useOSDetection();
  const data = downloadsData[os];

  const cliCards = os === 'windows' 
    ? [(data.cli as any).x86_64, (data.cli as any).arm64] 
    : os === 'mac' 
      ? [(data.cli as any).universal] 
      : [(data.cli as any).default];

  return (
    <div className="container mx-auto px-4 py-12">
      <DetectedOSBadge os={os} arch={arch} />

      <SectionHeader title="Direct Downloads" textColor="text-purple-700 dark:text-purple-500" />
      
      <div className="mb-16 grid gap-8 md:grid-cols-2 lg:gap-12">
        <DownloadCard {...data.desktop} />
        
        <div className="flex flex-col gap-4">
          {cliCards.map((cliOpt, idx) => (
            <DownloadCard key={idx} {...cliOpt} />
          ))}
        </div>
      </div>

      <SectionHeader title="Package Managers" textColor="text-purple-700 dark:text-purple-500" />
      
      <div className="mb-16">
        <PackageManagerTabs desktop={data.desktop.packageManager} cli={data.cli.packageManager} />
      </div>

      <div className="text-center">
        <a href={data.instructions} className="text-lg font-medium text-blue-600 hover:underline dark:text-blue-400">
          View full installation instructions for {os} &rarr;
        </a>
      </div>
    </div>
  );
};

const DownloadsSection = (): JSX.Element => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <BrowserOnly fallback={<div>Loading OS data...</div>}>
        {() => <DownloadsContent />}
      </BrowserOnly>
    </section>
  );
};

export default DownloadsSection;
