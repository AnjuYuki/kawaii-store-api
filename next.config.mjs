import { createMDX } from 'fumadocs-mdx/next';

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  reactCompiler: true,
  serverExternalPackages: ['typescript', 'twoslash'],
};

const withMDX = createMDX();

export default withMDX(nextConfig);
