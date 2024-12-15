import type { JSX } from 'react';

import projectOne from './@projectOne/page';
import projectTwo from './@projectTwo/page';
import projectWeather from './@projectWeather/page';

export default function RootLayout() {
  const PROJECT = process.env.PROJECT || 'blog';

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
