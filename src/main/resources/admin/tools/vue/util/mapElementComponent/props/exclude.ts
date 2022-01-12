import { IComponentProps } from "../type";

export default {
  component: "OptionsInput",
  field: {
    label: "Exclude",
    hint: "Optionally removes the standard tools from the editor toolbar.",
  },
  options: {
    items: [
      { text: "*", value: "*" },
      { text: "Text format menu", value: "Format" },
      { text: "Bold text", value: "Bold" },
      { text: "Italic text", value: "Italic" },
      { text: "Underline text", value: "Underline" },
      { text: "Justify content", value: "JustifyBlock" },
      { text: "Left align content", value: "JustifyLeft" },
      { text: "Center content", value: "JustifyCenter" },
      { text: "Right align content", value: "JustifyRight" },
      { text: "Insert a bullet list", value: "BulletedList" },
      { text: "Insert a numbered list", value: "NumberedList" },
      { text: "Decrease indent", value: "Outdent" },
      { text: "Increase indent", value: "Indent" },
      { text: "Insert a special character", value: "SpecialChar" },
      { text: "Insert an anchor", value: "Anchor" },
      { text: "Insert/Edit an image", value: "Image" },
      { text: "Insert a macro", value: "Macro" },
      { text: "Insert/Edit a link", value: "Link" },
      { text: "Remove link", value: "Unlink" },
      { text: "Table format menu", value: "Table" },
      { text: "Paste mode (formatted/plain text)", value: "PasteModeSwitcher" },
      { text: "Background color", value: "BGColor" },
      { text: "Quotation", value: "Blockquote" },
      { text: "Copy selected text into buffer", value: "Copy" },
      { text: "Copy formatting", value: "CopyFormatting" },
      { text: "Wrap with div", value: "CreateDiv" },
      { text: "Cut selected text into buffer", value: "Cut" },
      { text: "Font menu", value: "Font" },
      { text: "Font size menu", value: "FontSize" },
      { text: "Insert a horizontal line", value: "HorizontalRule" },
      { text: "Change style of BulletedList", value: "ListStyle" },
      { text: "Clean editor’s content", value: "NewPage" },
      { text: "Preview HTML Area contents", value: "Preview" },
      { text: "Repeat last action", value: "Redo" },
      { text: "Remove formatting", value: "RemoveFormat" },
      { text: "Select editor’s content", value: "SelectAll" },
      { text: "Strikethrough over text", value: "Strike" },
      { text: "Text styles menu", value: "Styles" },
      { text: "Subscript text", value: "Subscript" },
      { text: "Superscript text", value: "Superscript" },
      { text: "Text color", value: "TextColor" },
      { text: "Undo last action", value: "Undo" },
    ].sort((a, b) => a.text.localeCompare(b.text)),
    config: {
      multiple: true,
      joinWith: " | ",
    },
  },
  rules: [],
  i18n: false,
} as IComponentProps;
