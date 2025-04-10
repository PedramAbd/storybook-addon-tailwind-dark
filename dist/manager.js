import React, { memo, useCallback, useEffect } from 'react';
import { useGlobals, addons, types } from 'storybook/internal/manager-api';
import { IconButton } from 'storybook/internal/components';

// src/manager.tsx

// src/constants.ts
var ADDON_ID = "tailwind-dark-mode";
var TOOL_ID = `${ADDON_ID}/tool`;
var KEY = `tailwind-dark-mode`;
var TailwindIcon = () => {
  return /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement(
    "svg",
    {
      width: "20px",
      height: "20px",
      viewBox: "0 0 32 32",
      xmlns: "http://www.w3.org/2000/svg"
    },
    /* @__PURE__ */ React.createElement("title", null, "file_type_tailwind"),
    /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z",
        style: { "fill": "#44a8b3" }
      }
    )
  ));
};

// src/components/Tool.tsx
var Tool = memo(function MyAddonSelector({ api }) {
  const [globals, updateGlobals, storyGlobals] = useGlobals();
  const isLocked = KEY in storyGlobals;
  const isActive = !!globals[KEY];
  const toggle = useCallback(() => {
    updateGlobals({
      [KEY]: !isActive
    });
  }, [isActive]);
  useEffect(() => {
    api.setAddonShortcut(ADDON_ID, {
      label: "Toggle Add On [8]",
      defaultShortcut: ["8"],
      actionName: "theme",
      showInMenu: false,
      action: toggle
    });
  }, [toggle, api]);
  return /* @__PURE__ */ React.createElement(
    IconButton,
    {
      key: TOOL_ID,
      active: isActive,
      disabled: isLocked,
      title: isActive ? "Turn on Tailwind Dark" : "Turn Off Tailwind Dark",
      onClick: toggle,
      style: { position: "relative" }
    },
    /* @__PURE__ */ React.createElement(TailwindIcon, null),
    "Dark: ",
    isActive ? "On" : "Off"
  );
});

// src/manager.tsx
addons.register(ADDON_ID, (api) => {
  addons.add(TOOL_ID, {
    type: types.TOOL,
    title: "Tailwind Dark",
    render: () => /* @__PURE__ */ React.createElement(Tool, { api })
  });
});
//# sourceMappingURL=manager.js.map
//# sourceMappingURL=manager.js.map