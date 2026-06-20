const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Emit a fully static site to `out/`
  output: "export",
  // Required for static export: the default Image Optimization API needs a server
  images: { unoptimized: true },
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
};

module.exports = withMDX(nextConfig);
