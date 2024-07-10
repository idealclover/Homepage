import fs from "fs";
import path from "path";
import config from '../astro.config.mjs';

function updateCSSPaths(html, site) {
  const regex = /\/_astro\/(.*)\.css/;
  return html.replace(regex, `${site}/_astro/$1.min.css`);
}

const site = config.site;
console.log(site);
const indexHtmlPath = path.resolve('./dist/index.html');
const indexHtml = fs.readFileSync(indexHtmlPath, "utf-8");
const updatedIndexHtml = updateCSSPaths(indexHtml, site);
fs.writeFileSync(indexHtmlPath, updatedIndexHtml, "utf-8");