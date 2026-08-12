import React from 'react';
import Layout from '@theme/Layout';
import PageHeader from '@site/src/components/layout/PageHeader';
import DownloadsSection from '@site/src/components/content/DownloadsSection';

function DownloadPage() {
  return (
    <Layout title="Download Podman" description="Download Podman Desktop and Podman CLI for Windows, macOS, and Linux">
      <PageHeader 
        title="Download Podman" 
        description="Get started with Podman Desktop and the Podman Engine. We automatically detect your operating system and provide the appropriate installers and binaries." 
      />
      <DownloadsSection />
    </Layout>
  );
}

export default DownloadPage;
