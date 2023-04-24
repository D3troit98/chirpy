import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: "6yrubcdp",
  dataset: "production",
  apiVersion: "2023-04-24",
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
