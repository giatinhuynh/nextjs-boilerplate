"use client";

import React, { ComponentProps } from "react";
import { builder } from "@builder.io/sdk";
import { BuilderComponent, useIsPreviewing } from "@builder.io/react";

// Replace with your Public API Key 
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

type BuilderPageProps = ComponentProps<typeof BuilderComponent>;

export function RenderBuilderContent(props: BuilderPageProps) {
  const isPreviewing = useIsPreviewing();

  // Render the Builder component only if content is available or in preview mode
  if (props.content || isPreviewing) {
    return <BuilderComponent {...props} />;
  }

  // Fallback content if no Builder content is available
  return <p>Content not found or not available for this page.</p>;
}
