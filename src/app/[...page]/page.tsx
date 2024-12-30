import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "@/components/builder";

// Replace with your Public API Key
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

// Define types for Next.js 15's Promise-based params
interface PageProps {
  params: Promise<{ page: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Page(props: PageProps) {
  const resolvedParams = await props.params;
  const { page = [] } = resolvedParams;
  
  const content = await builder
    .get("page", {
      userAttributes: {
        urlPath: "/" + (page?.join("/") || ""),
      },
    })
    .toPromise();

  return (
    <>
      <RenderBuilderContent content={content} model="page" />
    </>
  );
}