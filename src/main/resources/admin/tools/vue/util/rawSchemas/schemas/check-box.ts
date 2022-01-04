import { xml2js } from "@reginaldlee/xml-js";

export default xml2js(
  `
<input name="mycheckbox" type="CheckBox">
  <label/>
  <help-text/>
  <occurrences minimum="0" maximum="1"/>
  <default/>
  <config>
    <alignment></alignment>
  </config>
</input>`.trim()
);
