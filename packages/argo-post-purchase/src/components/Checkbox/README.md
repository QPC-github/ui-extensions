# Checkbox

Checkboxes are used to give buyers a binary option. They are commonly used to present terms and conditions.

Unlike most field components, any children passed to this component will be used as the label for the checkbox.
 
## Props
required = *
<table><tr><th>Name</th><th>Type</th><th>Description</th></tr><tr><td>id</td><td><code>string</code></td><td>A unique identifier for the field. When no `id` is provided, a globally unique value will be used instead. </td></tr><tr><td>name</td><td><code>string</code></td><td>An identifier for the field that is unique within the nearest containing `&lt;Form /&gt;` component. </td></tr><tr><td>value</td><td><code>boolean</code></td><td>Whether the checkbox is active. This prop is an alias for `checked`, and can be useful in form libraries that provide a normalized API for dealing with both `boolean` and `string` values. If both `value` and `checked` are provided, `checked` takes precedence. </td></tr><tr><td>checked</td><td><code>boolean</code></td><td>Whether the checkbox is active. </td></tr><tr><td>disabled</td><td><code>boolean</code></td><td>Whether the checkbox can be changed. </td></tr><tr><td>error</td><td><code>string</code></td><td>An error label to present with the field. </td></tr><tr><td>accessibilityLabel</td><td><code>string</code></td><td>A label to use for the field that will be used for buyers using assistive technologies. When provided, any `children` supplied to this component are hidden from being seen for accessibility purposes to prevent duplicate content from being read. </td></tr><tr><td>onChange</td><td><code>(value: boolean) => void</code></td><td>A callback that is run whenever the checkbox is changed. This callback is called with a boolean indicating whether the checkbox should now be active or inactive. This component is [controlled](https://reactjs.org/docs/forms.html#controlled-components), so you **must** store this value in state and reflect it back in the `checked` or `value` props. </td></tr></table>