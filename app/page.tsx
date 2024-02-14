import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Begin"
    }
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmSxiPikXDREXrcbaKSuNr4eaq4EQNxuFsojVsdd89w3eH/0.png`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: 'ZetaChain Audit Top 10 Wardens',
  description: 'A frame congratulating the Top 10 Wardens from the ZetaChain Audit by Code4rena',
  openGraph: {
    title: 'ZetaChain Audit Top 10 Wardens',
    description: 'A frame congratulating the Top 10 Wardens from the ZetaChain Audit by Code4rena',
    images: [`${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmSxiPikXDREXrcbaKSuNr4eaq4EQNxuFsojVsdd89w3eH/0.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>ZetaChain Audit Top 10 Wardens</h1>
    </>
  );
}
