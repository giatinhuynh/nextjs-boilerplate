import { BuilderComponent, useIsPreviewing } from '@builder.io/react';
import { BUILDER_PUBLIC_API_KEY } from '@/configs/builder';
import type { BuilderContent } from '@builder.io/sdk';

interface BuilderPageProps {
  content?: BuilderContent;
  model: string;
}

export function BuilderPage({ content, model }: BuilderPageProps) {
  const isPreviewing = useIsPreviewing();

  // If there's no content and not previewing, show 404
  if (!content && !isPreviewing) {
    return <div>Page not found</div>;
  }

  // Return the builder content
  return (
    <BuilderComponent
      model={model}
      content={content}
      apiKey={BUILDER_PUBLIC_API_KEY}
    />
  );
} 