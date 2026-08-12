import React from 'react';
import Head from '@docusaurus/Head';

export default function DownloadsRedirect() {
  return (
    <Head>
      <meta http-equiv="refresh" content="0; url=/download" />
    </Head>
  );
}
