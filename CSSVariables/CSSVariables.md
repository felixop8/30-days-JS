## CSS Variables

**Main Concepts**

```css
element {
  --main-bg-color: brown;
}
```
Note that the selector given to the ruleset defines the scope that the custom property can be used in. A common best practice is to define custom properties on the :root pseudo-class, so that it can be applied globally across your HTML document:

```css
:root {
  --main-bg-color: brown;
}
```

You use the custom property value by specifying your custom property name inside the var() function, in place of a regular property value:

```css
element {
  background-color: var(--main-bg-color);
}