import React, { useState, useEffect } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { useOSDetection, OperatingSystem } from '@site/src/hooks/useOSDetection';
import { downloadsData } from '@site/src/data/downloadsData';
import DownloadCard from '@site/src/components/ui/DownloadCard';
import PackageManagerTabs from '@site/src/components/ui/PackageManagerTabs';
import SectionHeader from '@site/src/components/layout/SectionHeader';
import OSTabs from '@site/src/components/ui/OSTabs';
import InstallationSteps from '@site/src/components/content/InstallationSteps';

const DownloadsContent = () => {
  const { os: detectedOS, isDetected } = useOSDetection();
  const [selectedOS, setSelectedOS] = useState<OperatingSystem>('linux');

  // Initialize selected OS with detected OS once it is known
  useEffect(() => {
    if (isDetected) {
      setSelectedOS(detectedOS);
    }
  }, [isDetected, detectedOS]);

  const data = downloadsData[selectedOS];

  const cliCards = selectedOS === 'windows' 
    ? [(data.cli as any).x86_64, (data.cli as any).arm64] 
    : selectedOS === 'mac' 
      ? [(data.cli as any).universal] 
      : [(data.cli as any).default];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Interactive OS Selector */}
      <OSTabs selectedOS={selectedOS} onSelect={setSelectedOS} />

      {/* Downloads Section */}
      <SectionHeader title={`Direct Downloads for ${selectedOS === 'mac' ? 'macOS' : selectedOS === 'windows' ? 'Windows' : 'Linux'}`} textColor="text-purple-700 dark:text-purple-500" />
      
      <div className="mb-16 grid gap-8 md:grid-cols-2 lg:gap-12">
        <DownloadCard {...data.desktop} />
        
        <div className="flex flex-col gap-4">
          {cliCards.map((cliOpt, idx) => (
            <DownloadCard key={idx} {...cliOpt} />
          ))}
        </div>
      </div>

      {/* Package Managers Section */}
      <SectionHeader title="Package Managers" textColor="text-purple-700 dark:text-purple-500" />
      <div className="mb-16">
        <PackageManagerTabs desktop={data.desktop.packageManager} cli={data.cli.packageManager} />
      </div>

      {/* Installation Steps Section */}
      <div className="mt-16 rounded-3xl bg-gray-50 shadow-inner dark:bg-gray-900/50">
        <InstallationSteps os={selectedOS} docLink={data.instructions} />
      </div>
    </div>
  );
};

const DownloadsSection = (): JSX.Element => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <BrowserOnly fallback={<div className="py-24 text-center">Loading OS data...</div>}>
        {() => <DownloadsContent />}
      </BrowserOnly>
    </section>
  );
};

export default DownloadsSection;
