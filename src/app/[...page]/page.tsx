import React from "react";
import { builder } from "@builder.io/sdk";
// See the full code: https://www.builder.io/c/docs/integrating-builder-pages?codeFramework=nextApp#add-a-builder-component-to-your-app
import { RenderBuilderContent } from "@/components/builder";

// Replace with your Public API Key
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default async function Page(props: { params: { page: string[] } }) {
  const { page = [] } = await props.params;
  const content = await builder
    .get("page", {
      userAttributes: {
        urlPath: "/" + (page.join("/") || ""),
      },
    })
    .toPromise();

  return (
    <>
      {/* Render the Builder page */}
      <RenderBuilderContent content={content} model="page" />
    </>
  );
}