# Scalable Multi-Project Architecture in Next.js

This repository demonstrates how to set up a scalable architecture in Next.js for managing multiple projects within a single codebase. Using Next.js's `app` directory, modular folder structure, and environment variables, you can dynamically load different project layouts while sharing common components and utilities.

## Features

- **Dynamic Layout Selection:** Load project layouts dynamically based on the `PROJECT` environment variable.
- **Reusable Code:** Share components, utilities, and configurations across multiple projects.
- **Consistent Routes:** Reuse the same route structure (e.g., `/`, `/about`, `/blog`) across projects without conflicts.
- **Scalable Architecture:** Easily add new projects by creating new folders and updating environment variables.

## Folder Structure

The repository follows a modular structure:

```
app/
  @projectOne/       # Project One
    page.tsx
  @projectTwo/       # Project Two
    page.tsx
  @projectWeather/   # Weather Project
    page.tsx
components/          # Shared components
utils/               # Shared utilities
ui-kit/              # Shared UI elements
.env                 # Environment variable file
```

## Getting Started

Follow these steps to run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/nextjs-scalable-architecture.git
cd nextjs-scalable-architecture
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure the Environment Variable

Set the `PROJECT` environment variable in the `.env` file:

```env
PROJECT=projectOne
```

Replace `projectOne` with `projectTwo` or `projectWeather` to switch between projects.

### 4. Run the Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser to see the selected project layout.

## How It Works

Here’s how the dynamic layout selection is implemented:

```tsx
import type { JSX } from 'react';

import projectOne from './@projectOne/page';
import projectTwo from './@projectTwo/page';
import projectWeather from './@projectWeather/page';

export default function RootLayout() {
  const PROJECT = process.env.PROJECT || 'projectOne';

  const projects: Record<string, () => JSX.Element> = {
    projectOne,
    projectTwo,
    projectWeather,
  };

  const CurrentProject = projects[PROJECT] || projects['projectOne'];

  return (
    <html lang='en'>
      <body>
        <CurrentProject />
      </body>
    </html>
  );
}
```

1. **Dynamic Layout Selection:** The `PROJECT` variable determines which layout to render. For example, if `PROJECT=projectOne`, the layout in `app/@projectOne/page.tsx` will be loaded.
2. **Shared Resources:** Components, utilities, and UI elements are stored in global folders (`components/`, `utils/`, `ui-kit/`) and can be reused across projects.
3. **Reusable Routes:** The same routes (e.g., `/about`, `/blog`) can exist across projects without conflicts, thanks to the modular structure.

## Adding a New Project

To add a new project:

1. Create a folder under `app/` (e.g., `app/@newProject/`).
2. Add a `page.tsx` file for the new project layout.
3. Update the `PROJECT` variable in the `.env` file to `newProject`.

Example:

```tsx
// app/@newProject/page.tsx
export default function NewProject() {
  return <div>Welcome to the New Project</div>;
}
```

## Contributing

Feel free to fork this repository and contribute improvements or examples for additional features.

## License

This project is open-source and available under the [MIT License](LICENSE).
