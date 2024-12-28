"use client";
import { builder, Builder, withChildren } from "@builder.io/react";
import { RenderBuilderContent } from "@/components/builder";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(withChildren(RenderBuilderContent), {
  name: "RenderBuilderContent",
  inputs: [
    {
      name: "ampMode",
      type: "boolean",
    },
    {
      name: "apiKey",
      type: "string",
    },
    {
      name: "builder",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Builder",
      },
    },
    {
      name: "builderBlock",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "BuilderElement",
      },
    },
    {
      name: "codegen",
      type: "boolean",
    },
    {
      name: "content",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "BuilderContent",
      },
    },
    {
      name: "contentError",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "(error: any) => void",
      },
    },
    {
      name: "contentLoaded",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "(data: any, content: BuilderContent) => void",
      },
    },
    {
      name: "context",
      type: "string",
      meta: {
        ts: "any",
      },
    },
    {
      name: "customComponents",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "RegisteredComponent[]",
      },
    },
    {
      name: "data",
      type: "string",
      meta: {
        ts: "any",
      },
    },
    {
      name: "dataOnly",
      type: "boolean",
    },
    {
      name: "emailMode",
      type: "boolean",
    },
    {
      name: "entry",
      type: "string",
    },
    {
      name: "hydrate",
      type: "boolean",
    },
    {
      name: "inlineContent",
      type: "boolean",
    },
    {
      name: "isChild",
      type: "boolean",
    },
    {
      name: "isStatic",
      type: "boolean",
    },
    {
      name: "locale",
      type: "string",
    },
    {
      name: "location",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Location | Url",
      },
    },
    {
      name: "model",
      type: "string",
    },
    {
      name: "modelName",
      type: "string",
    },
    {
      name: "name",
      type: "string",
    },
    {
      name: "noAsync",
      type: "boolean",
    },
    {
      name: "options",
      type: "string",
      meta: {
        ts: "GetContentOptions",
      },
    },
    {
      name: "renderLink",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "stopClickPropagationWhenEditing",
      type: "boolean",
    },
    {
      name: "url",
      type: "string",
    },
  ],
});

Builder.registerComponent(Builder, {
  name: "Builder",
});
