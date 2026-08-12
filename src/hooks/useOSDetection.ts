import { useState, useEffect } from 'react';

export type OperatingSystem = 'windows' | 'mac' | 'linux';
export type Architecture = 'arm64' | 'x86_64' | 'unknown';

export interface OSDetectionResult {
  os: OperatingSystem;
  arch: Architecture;
  isDetected: boolean;
}

const detectOS = (userAgent: string): OperatingSystem => {
  const ua = userAgent.toLowerCase();
  if (ua.includes('windows')) return 'windows';
  if (ua.includes('macintosh') || ua.includes('mac os')) return 'mac';
  return 'linux';
};

const detectArchitecture = (userAgent: string): Architecture => {
  const ua = userAgent.toLowerCase();
  if (ua.includes('arm64') || ua.includes('aarch64') || ua.includes('mac') && ua.includes('silicon')) {
    return 'arm64';
  }
  if (ua.includes('x86_64') || ua.includes('x86-64') || ua.includes('win64') || ua.includes('x64') || ua.includes('amd64')) {
    return 'x86_64';
  }
  return 'unknown';
};

export const useOSDetection = (): OSDetectionResult => {
  const [result, setResult] = useState<OSDetectionResult>({
    os: 'linux',
    arch: 'unknown',
    isDetected: false,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userAgent = window.navigator.userAgent;
      setResult({
        os: detectOS(userAgent),
        arch: detectArchitecture(userAgent),
        isDetected: true,
      });
    }
  }, []);

  return result;
};
