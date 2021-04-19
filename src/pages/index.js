import { html } from 'orison';

export default context => html`
  <section>
    <p>Ziro CLI is a command line tool for the <a href="https://ziro.alexlockhart.me/">Ziro projects</a>. Currently its only function is for bootstraping a new web app using the Ziro App project.</p>
    ${context.mdFile('./src/partials/ziro-app-example.md')}
  </section>
`;
