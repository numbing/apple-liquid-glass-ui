# Bootstrap-Style Utility Classes

liquid-glassui now includes comprehensive Bootstrap-style utility classes alongside the original `gl-*` prefixed classes for backward compatibility.

## Spacing

### Margin
- **All sides**: `m-0` to `m-5`
- **Top**: `mt-0` to `mt-5`
- **Bottom**: `mb-0` to `mb-5`
- **Left**: `ml-0` to `ml-5`
- **Right**: `mr-0` to `mr-5`
- **Horizontal (x-axis)**: `mx-0` to `mx-5`, `mx-auto`
- **Vertical (y-axis)**: `my-0` to `my-5`

### Padding
- **All sides**: `p-0` to `p-5`
- **Top**: `pt-0` to `pt-5`
- **Bottom**: `pb-0` to `pb-5`
- **Left**: `pl-0` to `pl-5`
- **Right**: `pr-0` to `pr-5`
- **Horizontal (x-axis)**: `px-0` to `px-5`
- **Vertical (y-axis)**: `py-0` to `py-5`

**Scale**: 0 = 0, 1 = 4px, 2 = 8px, 3 = 12px, 4 = 16px, 5 = 24px

## Display

- `d-none` - Hide element
- `d-inline` - Inline display
- `d-inline-block` - Inline-block display
- `d-block` - Block display
- `d-flex` - Flexbox container
- `d-inline-flex` - Inline flex container
- `d-grid` - Grid container

## Flexbox

### Direction
- `flex-row` - Horizontal layout
- `flex-column` - Vertical layout
- `flex-row-reverse` - Reverse horizontal
- `flex-column-reverse` - Reverse vertical

### Wrap
- `flex-wrap` - Allow wrapping
- `flex-nowrap` - Prevent wrapping

### Justify Content
- `justify-content-start`
- `justify-content-end`
- `justify-content-center`
- `justify-content-between`
- `justify-content-around`
- `justify-content-evenly`

### Align Items
- `align-items-start`
- `align-items-end`
- `align-items-center`
- `align-items-baseline`
- `align-items-stretch`

### Align Self
- `align-self-start`
- `align-self-end`
- `align-self-center`
- `align-self-baseline`
- `align-self-stretch`

### Flex Properties
- `flex-fill` - Fill available space
- `flex-grow-0`, `flex-grow-1`
- `flex-shrink-0`, `flex-shrink-1`

### Gap
- `gap-0` to `gap-5`

## Typography

### Text Alignment
- `text-left`
- `text-center`
- `text-right`
- `text-justify`

### Text Transform
- `text-lowercase`
- `text-uppercase`
- `text-capitalize`

### Font Weight
- `fw-light` - 300
- `fw-normal` - 400
- `fw-medium` - 500
- `fw-semibold` - 600
- `fw-bold` - 700

### Font Size
- `fs-1` - Extra large (32px)
- `fs-2` - Large (24px)
- `fs-3` - Medium-large (20px)
- `fs-4` - Medium (18px)
- `fs-5` - Small-medium (16px)
- `fs-6` - Small (14px)

### Text Colors
- `text-primary` - Accent color
- `text-secondary` - Secondary text
- `text-muted` - Muted/tertiary text
- `text-white` - White
- `text-black` - Black

## Borders

### Border
- `border` - Add border all sides
- `border-0` - Remove border all sides
- `border-top`, `border-top-0`
- `border-bottom`, `border-bottom-0`
- `border-start`, `border-start-0` (left)
- `border-end`, `border-end-0` (right)

### Border Radius
- `rounded` - Default radius
- `rounded-0` - No radius
- `rounded-1` to `rounded-5` - Increasing radius
- `rounded-circle` - Full circle
- `rounded-pill` - Pill shape
- `rounded-top`, `rounded-bottom`, `rounded-start`, `rounded-end`

## Sizing

### Width
- `w-25` - 25% width
- `w-50` - 50% width
- `w-75` - 75% width
- `w-100` - 100% width
- `w-auto` - Auto width

### Height
- `h-25` - 25% height
- `h-50` - 50% height
- `h-75` - 75% height
- `h-100` - 100% height
- `h-auto` - Auto height

### Max Width/Height
- `mw-100` - Max width 100%
- `mh-100` - Max height 100%

### Viewport Units
- `vw-100` - 100vw width
- `vh-100` - 100vh height

## Position

### Position Type
- `position-static`
- `position-relative`
- `position-absolute`
- `position-fixed`
- `position-sticky`

### Position Values
- `top-0`, `top-50`, `top-100`
- `bottom-0`, `bottom-50`, `bottom-100`
- `start-0`, `start-50`, `start-100` (left)
- `end-0`, `end-50`, `end-100` (right)

### Transform
- `translate-middle` - Center both axes
- `translate-middle-x` - Center horizontal
- `translate-middle-y` - Center vertical

## Overflow

- `overflow-auto`, `overflow-hidden`, `overflow-visible`, `overflow-scroll`
- `overflow-x-auto`, `overflow-x-hidden`, `overflow-x-visible`, `overflow-x-scroll`
- `overflow-y-auto`, `overflow-y-hidden`, `overflow-y-visible`, `overflow-y-scroll`

## Visibility & Opacity

### Visibility
- `visible` - Visible
- `invisible` - Hidden but takes space

### Opacity
- `opacity-0` - Fully transparent
- `opacity-25` - 25% opacity
- `opacity-50` - 50% opacity
- `opacity-75` - 75% opacity
- `opacity-100` - Fully opaque

## Shadow

- `shadow-sm` - Soft shadow
- `shadow` - Medium shadow
- `shadow-lg` - Large shadow
- `shadow-none` - No shadow

## Interactions

### Cursor
- `cursor-pointer`
- `cursor-default`
- `cursor-move`
- `cursor-not-allowed`

### User Select
- `user-select-none`
- `user-select-all`
- `user-select-auto`

### Pointer Events
- `pe-none` - Disable pointer events
- `pe-auto` - Enable pointer events

## Examples

### Basic Layout
```html
<div class="d-flex justify-content-between align-items-center p-3 border rounded">
  <h2 class="m-0 fs-3 fw-bold">Title</h2>
  <button class="px-4 py-2 rounded-pill">Action</button>
</div>
```

### Responsive Card
```html
<div class="p-4 border rounded-3 shadow">
  <h3 class="mb-3 text-center fw-semibold">Card Title</h3>
  <p class="mb-0 text-muted">Card content goes here</p>
</div>
```

### Centered Content
```html
<div class="d-flex justify-content-center align-items-center vh-100">
  <div class="text-center">
    <h1 class="fs-1 fw-bold mb-3">Welcome</h1>
    <p class="text-muted">Bootstrap-style utilities with glass UI</p>
  </div>
</div>
```

### Spacing Example
```html
<!-- Using Bootstrap-style -->
<div class="mt-3 mb-4 px-5 py-3"></div>

<!-- Using legacy glass-ui style -->
<div class="gl-m-md gl-p-lg"></div>
```

## Migration Note

All original `gl-*` prefixed utilities are still available for backward compatibility. You can mix and match both styles:

```html
<!-- Mixed usage -->
<div class="d-flex gap-3 gl-glass rounded-3 p-4">
  <div class="flex-grow-1 text-center">Content</div>
</div>
```
