import { useEffect, useGlobals } from "storybook/internal/preview-api";
import {KEY} from "./constants";
import type {
  Renderer,
  StoryContext,
  PartialStoryFn as StoryFunction,
} from "storybook/internal/types";



const DARK_COLOR = 'black'
const LIGHT_COLOR = 'transparent'

const switchToTheme = (theme: 'light' | 'dark', viewMode: 'story' | 'docs') => {
  document.getElementsByTagName('html')[0].setAttribute('class', theme === 'dark' ? 'dark' : '');

  document
    .getElementsByTagName('html')[0]
    .setAttribute('style', `background-color: ${theme === 'light' ? LIGHT_COLOR : DARK_COLOR}`)

  if (viewMode === 'docs') {
    const elementsCollection = document.getElementsByClassName('docs-story')
    const elements = Array.prototype.slice.call(elementsCollection)
    console.log(elements)
    elements.forEach((element: Element) => {
      element.setAttribute('style', `background-color: ${theme === 'light' ? LIGHT_COLOR : DARK_COLOR}`)
    })
  }
}


export const mainDecorator= (Story: StoryFunction<Renderer>,
    context: StoryContext<Renderer>) => {
  const [globals, updateGlobals] = useGlobals();
  const myAddon = globals[KEY];


  useEffect(() => {
    if (myAddon) {
      switchToTheme('dark', context.viewMode)
    } else {
      switchToTheme('light', context.viewMode)
    }
  }, [myAddon])


  return Story()
}
