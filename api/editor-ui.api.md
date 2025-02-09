## API Report File for "@edtr-io/editor-ui"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { EditorThemeProps } from '@edtr-io/ui';
import * as React_2 from 'react';
import { styled } from '@edtr-io/ui';
import { StyledComponent } from 'styled-components';
import { TextareaAutosizeProps } from 'react-textarea-autosize';

// @internal (undocumented)
export function AddButton(props: AddButtonProps): JSX.Element;

// @internal (undocumented)
export interface AddButtonProps {
    // (undocumented)
    children: string;
    // (undocumented)
    onClick: () => void;
    // (undocumented)
    title?: string;
}

// @internal (undocumented)
export class CheckElement extends React_2.Component<CheckElementProps> {
    // (undocumented)
    render(): JSX.Element;
}

// @internal (undocumented)
export interface CheckElementProps {
    // (undocumented)
    handleChange: (event: React_2.MouseEvent) => void;
    // (undocumented)
    isActive: boolean;
    // (undocumented)
    isRadio: boolean;
}

// @public (undocumented)
export const EditorBottomToolbar: StyledComponent<'div', never, EditorThemeProps>;

// @public (undocumented)
export const EditorButton: StyledComponent<'button', never>;

// @public (undocumented)
export function EditorCheckbox(props: EditorCheckboxProps): JSX.Element;

// @public (undocumented)
export interface EditorCheckboxProps {
    // (undocumented)
    checked?: boolean;
    // (undocumented)
    label?: string;
    // (undocumented)
    onChange?: (checked: boolean) => void;
}

// @public (undocumented)
export const EditorInlineSettings: StyledComponent<'div', never>;

// @public (undocumented)
export const EditorInput: React_2.ForwardRefExoticComponent<Pick<EditorInputProps, "form" | "label" | "slot" | "style" | "title" | "pattern" | "type" | "name" | "key" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "className" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "id" | "lang" | "placeholder" | "spellCheck" | "tabIndex" | "translate" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "color" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "children" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "width" | "accept" | "alt" | "autoComplete" | "autoFocus" | "capture" | "checked" | "crossOrigin" | "disabled" | "enterKeyHint" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "height" | "list" | "max" | "maxLength" | "min" | "minLength" | "multiple" | "readOnly" | "required" | "size" | "src" | "step" | "value" | "inputWidth"> & React_2.RefAttributes<HTMLInputElement>>;

// @public (undocumented)
export interface EditorInputProps extends React_2.DetailedHTMLProps<React_2.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    // (undocumented)
    inputWidth?: string;
    // (undocumented)
    label?: string;
    // (undocumented)
    width?: string;
}

// @public (undocumented)
export const EditorTextarea: React_2.ForwardRefExoticComponent<EditorTextareaProps & React_2.RefAttributes<HTMLTextAreaElement>>;

// @public (undocumented)
export interface EditorTextareaProps extends Omit<TextareaAutosizeProps, 'as' | 'ref'> {
    // (undocumented)
    onMoveOutLeft?(): void;
    // (undocumented)
    onMoveOutRight?(): void;
}

// @public (undocumented)
export function HoverOverlay(props: HoverOverlayProps): JSX.Element;

// @public (undocumented)
export interface HoverOverlayProps {
    // (undocumented)
    allowSelectionOverflow?: boolean;
    // (undocumented)
    anchor?: React_2.RefObject<HTMLElement>;
    // (undocumented)
    children: React_2.ReactNode;
    // (undocumented)
    position: 'above' | 'below';
}

// @internal (undocumented)
export function InteractiveAnswer(props: InteractiveAnswerProps): JSX.Element;

// @internal (undocumented)
export interface InteractiveAnswerProps {
    // (undocumented)
    answer: HTMLInputElement | React_2.ReactNode;
    // (undocumented)
    answerID?: string;
    // (undocumented)
    feedback: React_2.ReactNode;
    // (undocumented)
    feedbackID: string;
    // (undocumented)
    focusedElement?: string;
    // (undocumented)
    handleChange: () => void;
    // (undocumented)
    isActive?: boolean;
    // (undocumented)
    isRadio?: boolean;
    // (undocumented)
    remove: () => void;
}

// @internal (undocumented)
export function PreviewOverlay(props: PreviewOverlayProps): JSX.Element;

// @internal (undocumented)
export interface PreviewOverlayProps {
    // (undocumented)
    children: React_2.ReactNode;
    // (undocumented)
    editable?: boolean;
    // (undocumented)
    focused: boolean;
    // (undocumented)
    onChange?: (active: boolean) => void;
}

export { styled }


// (No @packageDocumentation comment for this package)

```
