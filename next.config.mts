import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // We remove 'standalone' and manual root detection to let Netlify's 
  // Next.js plugin handle the build structure automatically.
  allowedDevOrigins: ["172.25.0.1", "10.24.174.36"],
};

export default nextConfig;
