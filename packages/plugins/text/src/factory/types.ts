import {
  DocumentState,
  getPlugins,
  ReturnTypeFromSelector
} from '@edtr-io/store'
import * as React from 'react'

import { SlateEditorAdditionalProps } from './editor'
import { TextPlugin, PluginRegistry } from '..'

export interface TextPluginOptions {
  plugins: ((pluginClosure: SlatePluginClosure) => TextPlugin)[]
  registry?: PluginRegistry
  placeholder?: string
}

export type SlatePluginClosure = React.RefObject<{
  name: string
  parent?: SlateEditorAdditionalProps
  replace?: (options?: DocumentState) => void
  availablePlugins: PluginRegistry
  plugins: ReturnTypeFromSelector<typeof getPlugins>
}>
