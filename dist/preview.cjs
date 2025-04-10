'use strict';

var previewApi = require('storybook/internal/preview-api');

// src/constants.ts
var KEY = `tailwind-dark-mode`;
var DARK_COLOR = "black";
var LIGHT_COLOR = "transparent";
var switchToTheme = (theme, viewMode) => {
  document.getElementsByTagName("html")[0].setAttribute("class", theme === "dark" ? "dark" : "");
  document.getElementsByTagName("html")[0].setAttribute("style", `background-color: ${theme === "light" ? LIGHT_COLOR : DARK_COLOR}`);
  if (viewMode === "docs") {
    const elementsCollection = document.getElementsByClassName("docs-story");
    const elements = Array.prototype.slice.call(elementsCollection);
    console.log(elements);
    elements.forEach((element) => {
      element.setAttribute("style", `background-color: ${theme === "light" ? LIGHT_COLOR : DARK_COLOR}`);
    });
  }
};
var mainDecorator = (Story, context) => {
  const [globals, updateGlobals] = previewApi.useGlobals();
  const myAddon = globals[KEY];
  previewApi.useEffect(() => {
    if (myAddon) {
      switchToTheme("dark", context.viewMode);
    } else {
      switchToTheme("light", context.viewMode);
    }
  }, [myAddon]);
  return Story();
};

// src/preview.ts
var preview = {
  decorators: [mainDecorator],
  initialGlobals: {
    [KEY]: false
  }
};
var preview_default = preview;

module.exports = preview_default;
//# sourceMappingURL=preview.cjs.map
//# sourceMappingURL=preview.cjs.map