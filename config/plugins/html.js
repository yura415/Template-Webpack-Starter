import path from 'path';
import fs from 'fs';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ScriptExtension from 'script-ext-html-webpack-plugin';

import { NODE_ENV } from '../config';

const minifyOptions = {
  caseSensitive: false,
  collapseBooleanAttributes: true,
  collapseInlineTagWhitespace: false,
  collapseWhitespace: true,
  conservativeCollapse: false,
  customAttrAssign: [],
  customAttrCollapse: /ng-class/,
  customAttrSurround: [],
  customEventAttributes: [/^on[a-z]{3,}$/],
  decodeEntities: true,
  html5: true,
  ignoreCustomComments: [/^!/],
  ignoreCustomFragments: [/<%[\s\S]*?%>/, /<\?[\s\S]*?\?>/],
  includeAutoGeneratedTags: false,
  keepClosingSlash: false,
  maxLineLength: 0,
  minifyCSS: true,
  minifyJS: true,
  minifyURLs: true,
  preserveLineBreaks: false,
  preventAttributesEscaping: false,
  processConditionalComments: true,
  processScripts: ['text/html'],
  quoteCharacter: '"',
  removeAttributeQuotes: true,
  removeComments: true,
  removeEmptyAttributes: true,
  removeEmptyElements: false,
  removeOptionalTags: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  removeTagWhitespace: true,
  sortAttributes: true,
  sortClassName: true,
  trimCustomFragments: true,
  useShortDoctype: true
};

const htmlIndex = new HtmlWebpackPlugin({
  filename: 'index.html',
  template: 'pug/index.pug',
  NODE_ENV: NODE_ENV,
  minify: minifyOptions
});

const scriptExt =  new ScriptExtension ({
  defer: 'main',
  defaultAttribute: 'async'
});

export { htmlIndex, scriptExt };
