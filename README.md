# Next.js 15 App Router: Custom Layout Issue

This repository demonstrates a bug encountered in Next.js 15's App Router when using a custom layout for a single page.  The layout is not applied as expected.

## Bug Description

When attempting to use a custom layout for a specific page within the app directory, the layout is not rendered, resulting in unexpected behavior. This contrasts with the intended functionality of custom layouts.

## Reproduction Steps

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.
4. Navigate to the `/` route. Observe that the custom layout is not applied.

## Expected Behavior

The custom layout should be applied to the `/` page, wrapping its content.

## Actual Behavior

The custom layout is not applied. The content of the `/` page renders without any layout components.

## Solution

The solution typically involves checking for incorrect file placement or layout configuration within the app directory. Consult the Next.js documentation for best practices on using layouts.