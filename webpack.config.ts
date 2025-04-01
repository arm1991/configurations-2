import path from 'path';
import webpack from 'webpack';
import { buildWebpack } from './config/build/buildWebpack';
import { BuildMode } from './config/build/types/types';
import 'webpack-dev-server';

interface EnvVariables {
  mode: BuildMode;
  port: number;
}

export default (env: EnvVariables): webpack.Configuration => {
  const options = {
    mode: env.mode,
    paths: {
      entry: path.resolve(__dirname, 'src', 'index.tsx'),
      output: path.resolve(__dirname, 'build'),
      html: path.resolve(__dirname, 'public', 'index.html'),
      src: path.resolve(__dirname, 'src'),
    },
    port: env.port ?? 3000,
  };

  const config = buildWebpack(options);

  return config;
};
