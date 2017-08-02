require("babel-register");
const fs = require("fs");
const path = require("path");

const kebabCase = require("kebab-case");
const themes = require("../themes");

function property(key, value) {
  return `  --${key}: ${value};`;
}

function themeStyles(theme, properties) {
  const selector = `:root.theme${kebabCase(theme)} {`;
  const propertyStyles = Object.keys(properties)
    .filter(key => key !== "displayName")
    .map(key => property(key, properties[key]));

  return `${selector}\n${propertyStyles.join("\n")}\n}`;
}

const stylesheet = Object.keys(themes)
  .map(theme => themeStyles(theme, themes[theme]))
  .join("\n\n");

fs.writeFileSync(path.resolve(__dirname, "../themes.css"), stylesheet);
