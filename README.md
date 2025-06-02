# Performance Testing React App

This project is a React + TypeScript application bootstrapped with [Vite](https://vitejs.dev/). It features modular architecture, authentication, user management, and a performant virtualized list UI. Additionally, the project uses [pnpm](https://pnpm.io/) for package management.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/), or [pnpm](https://pnpm.io/)

### Installation

1. **Clone the repository:**
  ```sh
  git clone <your-repo-url>
  cd performace-testing
  ```

2. **Install dependencies:**
  ```sh
  pnpm install
  # or
  npm install
  # or
  yarn install
  ```

### Running the Development Server

Start the app in development mode with hot module replacement:

```sh
pnpm run dev
# or
npm run dev
# or
yarn dev
```

The app will be available at [http://localhost:5173](http://localhost:5173) by default.

### Building for Production

To build the app for production:

```sh
pnpm run build
# or
npm run build
# or
yarn build
```

The output will be in the `dist/` directory.

### Previewing the Production Build

You can preview the production build locally:

```sh
pnpm run preview
# or
npm run preview
# or
yarn preview
```

---

## Project Structure

```
src/
  assets/           # Static assets (e.g., images, SVGs)
  core/
   hooks/          # Reusable React hooks
   http/           # HTTP client setup (Axios)
   layouts/        # Layout components (e.g., MainLayout)
   routes/         # Route protection and navigation
   types/          # Shared TypeScript types
   ui/             # UI components (Sidebar, TopBar, Virtualizer, etc.)
  features/
   auth/           # Authentication logic, hooks, and components
   users/          # User management, components, and hooks
  index.css         # Global styles (TailwindCSS)
  main.tsx          # App entry point and router setup
  vite-env.d.ts     # Vite/TypeScript environment types
```

---

## Virtualizer Solution

### What is the Virtualizer?

The project includes a custom **Virtualizer** component ([src/core/ui/virtualizer/virtualizer.tsx](src/core/ui/virtualizer/virtualizer.tsx)), which is designed to efficiently render large lists by only mounting the elements visible in the viewport (plus a small buffer above and below). Instead of rendering all items at once—which can cause performance issues and slow down the browser when dealing with hundreds or thousands of elements—the Virtualizer calculates which items should be visible based on the scroll position and container size. It then only renders those items, significantly reducing the number of DOM nodes and improving both rendering speed and user experience.

### How does it work?

- The Virtualizer receives the total list of items and the height of each row.
- It listens to the scroll position and calculates which items are currently visible in the viewport.
- Only those items (plus a buffer for smooth scrolling) are rendered as DOM elements.
- Each visible item is absolutely positioned within the container, so the scroll bar and user experience remain consistent as if all items were rendered.

### Why use a Virtualizer?

- **Performance:** Rendering a large number of DOM elements can lead to slow page loads, sluggish scrolling, and high memory usage. The Virtualizer solves this by keeping the DOM lightweight, only rendering what the user can see.
- **Scalability:** With virtualization, your application can handle lists with thousands or even millions of items without a noticeable drop in performance.
- **Responsiveness:** By minimizing unnecessary DOM updates, the UI remains smooth and responsive, even on less powerful devices.
- **User Experience:** The scroll bar and navigation feel natural, as if all items are present, but only a small subset is actually rendered at any time.

This makes the Virtualizer one of the best options for applications that need to display large datasets, such as logs, tables, or infinite scrolling feeds.

### Example Usage

You can see an example usage in [`src/features/users/users.tsx`](src/features/users/users.tsx):

```tsx
<Virtualizer rowHeight={80}>
  {data?.map((item, index) => (
   <li key={index}>
    <UserCard item={item} />
   </li>
  ))}
</Virtualizer>
```

This approach ensures that even if `data` contains thousands of users, only the visible ones are rendered, keeping the UI fast and responsive.

---

## Environment Variables

If you need to configure environment variables, create a `.env` file in the root directory. Refer to [Vite's environment variables documentation](https://vitejs.dev/guide/env-and-mode.html) for more details.

---

## Linting and Formatting

This project uses ESLint for code linting. To run the linter:

```sh
pnpm run lint
# or
npm run lint
# or
yarn lint
```

You can expand the ESLint configuration for stricter or more type-aware rules as described in the [official Vite React template documentation](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts).

---

## Customization

- **Sidebar:** Edit `src/core/ui/sidebar/use-sidebar.ts` and `src/core/layouts/main-layout.tsx` to customize navigation items.
- **API Integration:** Update `src/core/http/index.ts` for your backend API.
- **User Features:** Extend user management in `src/features/users/`.

