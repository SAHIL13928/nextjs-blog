import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx'], // Enable JS, JSX, MD, and MDX files
};

const withMDX = createMDX({
  extension: /\.mdx?$/, // Configure to support .mdx files
});

export default withMDX(nextConfig);
