import { builder } from '@builder.io/react';
import { BuilderPage } from '@/components/BuilderPage';
import { BUILDER_PUBLIC_API_KEY } from '@/configs/builder';

// Initialize Builder with your API key
builder.init(BUILDER_PUBLIC_API_KEY);

interface PageProps {
  params: {
    path: string[];
  };
}

export default async function Page({ params }: PageProps) {
  const content = await builder
    .get('page', {
      userAttributes: {
        urlPath: '/' + (params?.path?.join('/') || ''),
      },
    })
    .toPromise();

  return <BuilderPage content={content} model="page" />;
}

// Generate metadata for the page
export async function generateMetadata({ params }: PageProps) {
  const content = await builder
    .get('page', {
      userAttributes: {
        urlPath: '/' + (params?.path?.join('/') || ''),
      },
    })
    .toPromise();

  return {
    title: content?.data?.title,
    description: content?.data?.description,
  };
} 