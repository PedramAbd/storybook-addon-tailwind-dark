import React, { memo, useCallback, useEffect } from "react";
import { useGlobals, type API } from "storybook/internal/manager-api";
import { IconButton } from "storybook/internal/components";
import { ADDON_ID, KEY, TOOL_ID } from "../constants";
import {TailwindIcon} from "../tailwindIcon";




export const Tool = memo(function MyAddonSelector({ api }: { api: API }) {
  const [globals, updateGlobals, storyGlobals] = useGlobals();

  const isLocked = KEY in storyGlobals;
  const isActive = !!globals[KEY];

  const toggle = useCallback(() => {
    updateGlobals({
      [KEY]: !isActive,
    });

  }, [isActive]);

  useEffect(() => {
    api.setAddonShortcut(ADDON_ID, {
      label: "Toggle Measure [O]",
      defaultShortcut: ["O"],
      actionName: "outline",
      showInMenu: false,
      action: toggle,
    });
  }, [toggle, api]);

  return (
    <IconButton
      key={TOOL_ID}
      active={isActive}
      disabled={isLocked}
      title={isActive ? 'Turn on Tailwind Dark' : 'Turn Off Tailwind Dark'}
      onClick={toggle}
      style={{position: 'relative'}}
    >
      <TailwindIcon />
      Dark: {isActive? 'On': 'Off'}
    </IconButton>
  );
});
