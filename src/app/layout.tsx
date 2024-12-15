import type { ReactNode } from 'react';

export default function Layout({
  projectOne,
  projectTwo,
  projectWeather,
}: {
  projectOne: ReactNode;
  projectTwo: ReactNode;
  projectWeather: ReactNode;
}) {
  const PROJECT = process.env.PROJECT || 'projectOne';

  const projects: Record<string, ReactNode> = {
    projectOne,
    projectTwo,
    projectWeather,
  };

  const currentProject = projects[PROJECT] || projects['projectOne'];

  return (
    <html lang='en'>
      <body>{currentProject}</body>
    </html>
  );
}
