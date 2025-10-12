import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default pluginModuleFederation({
  name: 'app-shell',
  remotes: {
    app1: 'app_1@http://localhost:3001/mf-manifest.json',
    appbar: 'app_bar@http://localhost:3002/mf-manifest.json',
    navbar: 'nav_bar@http://localhost:3003/mf-manifest.json',
  },
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },
  dts: true,
});
