import React from 'react';
import { OperatingSystem } from '@site/src/hooks/useOSDetection';
import { Icon } from '@iconify/react';
import CodeBlock from '@theme/CodeBlock';
import Markdown from '@site/src/components/utilities/Markdown';
import Button from '@site/src/components/utilities/Button';

interface InstallationStepsProps {
  os: OperatingSystem;
  docLink: string;
}

const StepCard = ({ number, title, description, code }: { number: number, title: string, description: string, code?: string }) => (
  <div className="relative mb-8 ml-6 rounded-lg bg-gray-50 p-6 shadow-md dark:bg-gray-700 lg:ml-12 lg:p-8">
    <div className="absolute -left-10 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-purple-700 text-xl font-bold text-white shadow-lg dark:bg-purple-500 lg:-left-16 lg:h-16 lg:w-16 lg:text-2xl">
      {number}
    </div>
    <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-gray-100">{title}</h3>
    <Markdown text={description} styles="text-gray-500 dark:text-gray-300 mb-4" />
    {code && (
      <div className="mt-4">
        <CodeBlock language="bash" className="mb-0">
          {code}
        </CodeBlock>
      </div>
    )}
  </div>
);

const InstallationSteps = ({ os, docLink }: InstallationStepsProps): JSX.Element => {
  return (
    <div className="mx-auto w-full max-w-4xl py-8">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Installation Steps</h2>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
          Follow these quick steps to get Podman running on {os === 'mac' ? 'macOS' : os === 'windows' ? 'Windows' : 'Linux'}.
        </p>
      </div>

      <div className="border-l-4 border-purple-200 dark:border-purple-900">
        {(os === 'windows' || os === 'mac') && (
          <>
            <StepCard 
              number={1} 
              title="Download & Install" 
              description="Download the Podman Desktop or Podman CLI installer from the cards above and run the setup process." 
            />
            <StepCard 
              number={2} 
              title="Initialize Podman Machine" 
              description={`Because "containers are Linux", Podman runs a lightweight Linux virtual machine in the background. Initialize and start it from your terminal.`} 
              code={`podman machine init\npodman machine start`}
            />
            <StepCard 
              number={3} 
              title="Verify Installation" 
              description="Check that Podman is running correctly by querying the system info." 
              code={`podman info`}
            />
          </>
        )}

        {os === 'linux' && (
          <>
            <StepCard 
              number={1} 
              title="Install via Package Manager" 
              description="Podman is natively available on most Linux distributions. Use your package manager to install it." 
              code={`# Fedora / CentOS\nsudo dnf -y install podman\n\n# Ubuntu / Debian\nsudo apt-get update\nsudo apt-get -y install podman\n\n# Arch Linux\nsudo pacman -S podman`}
            />
            <StepCard 
              number={2} 
              title="Verify Installation" 
              description="Confirm the Podman engine is installed and ready to run containers." 
              code={`podman info`}
            />
            <StepCard 
              number={3} 
              title="Run a Container" 
              description="You are ready to go! Try running a simple test container." 
              code={`podman run --rm docker.io/library/hello-world`}
            />
          </>
        )}
      </div>

      <div className="mt-12 flex justify-center">
        <Button as="link" text="View Detailed Documentation" path={docLink} icon="fluent:document-text-24-filled" />
      </div>
    </div>
  );
};

export default InstallationSteps;
