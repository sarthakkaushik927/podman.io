import React from 'react';
import Layout from '@theme/Layout';
import PageHeader from '@site/src/components/layout/PageHeader';
import DownloadsSection from '@site/src/components/content/DownloadsSection';

function DownloadPage() {
  return (
    <Layout title="Download Podman" description="Download Podman Desktop and Podman CLI for Windows, macOS, and Linux">
      <PageHeader 
        title="Download Podman" 
        description="Podman is supported on multiple platforms. Get started with Podman Desktop and the Podman Engine for Windows, macOS, and Linux." 
      />
      <DownloadsSection />
    </Layout>
  );
}

export default DownloadPage;
