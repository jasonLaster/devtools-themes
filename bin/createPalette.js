require("babel-register");
const themes = require("../themes");

var express = require("express");
var app = express();

app.get("/", function(req, res) {
  res.send(palette());
});

function property(key, value) {
  return `  <div class="prop" style="background:${value}"></div>`;
}

function themeStyles(theme, properties) {
  const parent = `<div class="theme ${theme}">`;
  const props = Object.keys(properties)
    .filter(key => key !== "displayName")
    .map(key => property(key, properties[key]));

  return `${parent}\n${props.join("\n")}\n</div>`;
}

function styles() {
  return `<style>
  .prop {
    width: 20px;
    height: 20px;
  }

  .theme {
    clear: left;
    margin-top: 20px;
    clear: right;
    padding-top: 20px;
  }
</style>
  `;
}

function palette() {
  const pal = Object.keys(themes)
    .map(theme => themeStyles(theme, themes[theme]))
    .join("\n\n");
  return `${styles()}\n\n${pal}`;
}

app.listen(3000);
