import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

// next-intl v4 wires the request config via its own plugin (not an auto-discovered
// i18n/request.ts). Passed ./src/i18n/request.ts = our getRequestConfig.
// NOTE (prototype 2026-08-15): verifying next-intl works with output:export before
// committing to the full [locale] restructure. If this build fails, revert this wrapper.
const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

export default withNextIntl(nextConfig);
