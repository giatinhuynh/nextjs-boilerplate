# Builder.io Integration Boilerplate

This is a boilerplate for integrating Builder.io into a Next.js project.

## Getting Started

1. Clone the repository
2. Run `npm install`
3. Run `npm run dev`
4. Check and make sure to add preview URL to the Builder.io's page model settings
5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Notes

- Add your own components to the `src/components` folder
- Add your own pages to the `src/app` folder
- Add your own styles to the `src/styles` folder
- Add your own images to the `public/images` folder
- Add your own fonts to the `public/fonts` folder
- Add your own icons to the `public/icons` folder
- Add your own assets to the `public/assets` folder

## Tech Stack

- Next.js 15.1.3
- Tailwind CSS 3.4.1
- Builder.io
- Supabase
- Prisma
- ESLint
- Prettier
- TypeScript

# Customizing Your Builder.io Integration

Enhance your Builder.io integration by implementing custom components and webhooks to tailor the platform to your project's specific needs.

## Custom Components

Custom components allow you to extend Builder.io's functionality by integrating your own React components into the Visual Editor. This enables content creators to utilize your components seamlessly within their workflows.

### Registering Custom Components

To register a custom component:

#### 1. Define Your Component:

```
import React from 'react';

const MyCustomComponent = (props) => {
  return <div>{props.text}</div>;
};

export default MyCustomComponent;
```

#### 2. Register with Builder.io:
```
import { builder } from '@builder.io/react';

builder.registerComponent(MyCustomComponent, {
  name: 'MyCustomComponent',
  inputs: [
    { name: 'text', type: 'string', defaultValue: 'Hello, world!' },
  ],
});
```

This registration makes MyCustomComponent available in the Visual Editor's Insert tab under Custom Components. For more information, refer to the [Builder.io documentation](https://www.builder.io/c/docs/custom-components-setup).

### Input Types for Custom Components

Builder.io supports various input types to control your components' behavior:

- **String:** For text inputs.
- **Number:** For numerical inputs.
- **Boolean:** For true/false toggles.
- **Color:** For color pickers.
- **Date:** For date selectors.
- **File:** For file uploads.
- **List:** For arrays of items.

#### Define Inputs in the `inputs` Array During Registration:

```
builder.registerComponent(MyCustomComponent, {
  name: 'MyCustomComponent',
  inputs: [
    { name: 'title', type: 'string', defaultValue: 'Default Title' },
    { name: 'showImage', type: 'boolean', defaultValue: true },
    { name: 'image', type: 'file', allowedFileTypes: ['jpeg', 'png'] },
  ],
});
```
For a comprehensive list of input types and their configurations, refer to Builder.io's documentation [here](https://www.builder.io/c/docs/custom-components-setup).

### Adding Children to Custom Components

To allow your custom component to accept child components:

#### Wrap Your Component:

```javascript
import { withChildren } from '@builder.io/react';

const MyComponentWithChildren = withChildren(MyCustomComponent);
```

#### Register with canHaveChildren:

```
builder.registerComponent(MyComponentWithChildren, {
  name: 'MyComponentWithChildren',
  canHaveChildren: true,
});
```

This allows MyComponentWithChildren to accept child components, which can be used to create more complex layouts within your Builder.io pages.

### Overriding Built-in Components

You can override Builder.io's built-in components by registering a custom component with the same name. This allows you to customize the behavior and appearance of default components.

```
builder.registerComponent(MyCustomImage, {
  name: 'Image',
  inputs: [
    { name: 'src', type: 'file', allowedFileTypes: ['jpeg', 'png'] },
    { name: 'alt', type: 'string' },
  ],
});
```

This overrides Builder.io's default Image component, allowing you to use your custom MyCustomImage component instead.

## Webhooks

Webhooks enable your application to listen for content changes in Builder.io and trigger workflows such as cache invalidation, data synchronization, or automated deployments.

---

### Setting Up Model Webhooks

To set up a webhook for a specific model:

1. **Navigate to Models:**
   - In your Builder.io account, go to the **Models** section and select the desired model.

2. **Configure Webhook:**
   - Click on **"Show More Options"** and then **"Edit Webhooks."**
   - Enter the URL of your webhook endpoint.
   - Optionally, add custom headers or disable the payload if not needed.

Builder.io will send a POST request to the specified endpoint whenever content in the model is published, unpublished, archived, or deleted.

---

### Setting Up Global Webhooks

For webhooks that respond to events across all models:

1. **Access Space Settings:**
   - Go to your **Space Settings** in Builder.io.

2. **Add Webhook:**
   - Click **"Edit"** and then **"+ Webhook."**
   - Provide the endpoint URL and any necessary headers.
   - Save the configuration.

Global webhooks are useful for tasks like workflow automation and integration with external systems.

---

### Use Cases for Webhooks

- **Automated Deployments:** Trigger site rebuilds upon content updates.
- **Data Synchronization:** Sync content changes with external databases or services.
- **Cache Invalidation:** Clear cached content when updates occur to ensure users see the latest version.

