// import { ImageResponse } from 'next/server';

import { ImageResponse } from 'next/og';

import { getBlogPageDetail } from '@/apis/blogHome';

// export const runtime = 'edge';
export const alt = 'About Acme';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image({ params }: { params: { team: string; pageUrl: string } }) {
  const post = await getBlogPageDetail(params.team, params.pageUrl);
  let ImageUrl =
    'https://github.com/palm-springs/PalmSpringClient/assets/108226647/bc6ac5c7-266f-4495-ad67-fc2b76a33576';

  if (post.data.thumbnail !== null && post.data.thumbnail) {
    ImageUrl = post.data.thumbnail;
  }

  // const urlToFile = async (url: string) => await fetch(url).then((res) => res.blob());

  // const imgBlob = await urlToFile(ImageUrl);

  // return imgBlob;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <img
          src={ImageUrl}
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: '100%',
            objectFit: 'cover',
          }}
          alt=""
        />
      </div>
    ),
    {
      ...size,
    },
  );
}
