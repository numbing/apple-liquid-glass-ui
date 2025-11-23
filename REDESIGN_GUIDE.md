# glass-ui Apple Glass Redesign Guide

This guide contains all the CSS updates needed to transform glass-ui into an Apple-style glass interface.

## ✅ Completed

1. **tokens.css** - Updated with Apple-style variables
2. **utilities.css** - Added glass surfaces with saturation
3. **Card.css** - Redesigned with larger radii and gradients
4. **Sheet.css** - Updated with mobile slide-up and custom scrollbars
5. **Button.css** - Updated with Apple Glass styling (larger sizes, semibold weight, scale transforms)
6. **Input.css** - Updated with Apple Glass styling (larger heights, blur background, inner shadows)
7. **Navigation components** - Created GlassTopNav, GlassNavItem, GlassBottomNav (both React and CSS)
8. **Main index.ts** - Added Navigation component exports

## 📝 Remaining Tasks (Optional)

### Additional Form Controls

These components can be updated following the same Apple Glass patterns as Button and Input:

**File:** `src/components/Button/Button.css`

Replace entire file with:

```css
/* Button Component Styles - Apple Glass */

.gl-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--gl-space-sm);
  font-family: var(--gl-font-family);
  font-weight: var(--gl-font-weight-semibold);
  border: 1px solid var(--gl-color-border);
  cursor: pointer;
  transition: all var(--gl-transition-fast);
  outline: none;
  white-space: nowrap;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}

.gl-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.gl-btn:focus-visible {
  box-shadow: var(--gl-shadow-focus);
}

/* Sizes */
.gl-btn-sm {
  height: 36px;
  min-height: 36px;
  padding: 0 var(--gl-space-lg);
  font-size: var(--gl-font-size-sm);
  border-radius: var(--gl-radius-md);
}

.gl-btn-md {
  height: 44px;
  min-height: 44px;
  padding: 0 var(--gl-space-xl);
  font-size: var(--gl-font-size-md);
  border-radius: var(--gl-radius-lg);
}

.gl-btn-lg {
  height: 52px;
  min-height: 52px;
  padding: 0 var(--gl-space-2xl);
  font-size: var(--gl-font-size-lg);
  border-radius: var(--gl-radius-xl);
}

/* Variants */
.gl-btn-primary {
  background: var(--gl-color-accent);
  border-color: var(--gl-color-accent);
  color: var(--gl-color-accent-text);
  box-shadow: var(--gl-shadow-soft), inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

.gl-btn-primary:hover:not(:disabled) {
  background: var(--gl-color-accent-hover);
  border-color: var(--gl-color-accent-hover);
  box-shadow: var(--gl-shadow-md), inset 0 1px 0 rgba(255, 255, 255, 0.2);
  transform: translateY(-1px) scale(1.01);
}

.gl-btn-primary:active:not(:disabled) {
  background: var(--gl-color-accent-active);
  border-color: var(--gl-color-accent-active);
  transform: translateY(0) scale(0.99);
  box-shadow: var(--gl-shadow-soft), inset 0 1px 2px rgba(0, 0, 0, 0.1);
}

.gl-btn-subtle {
  background: var(--gl-color-surface);
  backdrop-filter: blur(var(--gl-blur-control)) saturate(180%);
  -webkit-backdrop-filter: blur(var(--gl-blur-control)) saturate(180%);
  border-color: var(--gl-color-border);
  color: var(--gl-color-text);
  box-shadow: var(--gl-shadow-soft), var(--gl-shadow-inner);
}

.gl-btn-subtle:hover:not(:disabled) {
  background: var(--gl-color-surface-strong);
  border-color: var(--gl-color-border-strong);
  transform: translateY(-1px) scale(1.01);
}

.gl-btn-subtle:active:not(:disabled) {
  background: var(--gl-color-hover);
  transform: translateY(0) scale(0.99);
}

.gl-btn-ghost {
  background: transparent;
  border-color: transparent;
  color: var(--gl-color-text);
  box-shadow: none;
}

.gl-btn-ghost:hover:not(:disabled) {
  background: var(--gl-color-hover);
  border-color: var(--gl-color-border);
}

.gl-btn-ghost:active:not(:disabled) {
  background: var(--gl-color-active);
  transform: scale(0.98);
}

/* Icon Only */
.gl-btn-icon-sm {
  width: 36px;
  height: 36px;
  min-width: 36px;
  padding: 0;
}

.gl-btn-icon-md {
  width: 44px;
  height: 44px;
  min-width: 44px;
  padding: 0;
}

.gl-btn-icon-lg {
  width: 52px;
  height: 52px;
  min-width: 52px;
  padding: 0;
}

/* Mobile */
@media (max-width: 640px) {
  .gl-btn-sm {
    height: 40px;
    min-height: 40px;
  }

  .gl-btn-md {
    height: 48px;
    min-height: 48px;
  }
}
```

### Task 3: Input Component

**File:** `src/components/Input/Input.css`

Key changes:
- Increase height to 44px (md), 40px (sm), 52px (lg)
- Add `backdrop-filter: blur(var(--gl-blur-control))`
- Use `var(--gl-shadow-inner)` for inset highlight
- Larger border radius (md, lg, xl)
- Subtle background tint

```css
.gl-input {
  width: 100%;
  font-family: var(--gl-font-family);
  font-weight: var(--gl-font-weight-regular);
  color: var(--gl-color-text);
  background: var(--gl-color-surface);
  backdrop-filter: blur(var(--gl-blur-control)) saturate(160%);
  -webkit-backdrop-filter: blur(var(--gl-blur-control)) saturate(160%);
  border: 1px solid var(--gl-color-border);
  outline: none;
  transition: all var(--gl-transition-fast);
  box-shadow: var(--gl-shadow-inner);
}

.gl-input-sm {
  height: 40px;
  padding: 0 var(--gl-space-lg);
  font-size: var(--gl-font-size-sm);
  border-radius: var(--gl-radius-md);
}

.gl-input-md {
  height: 44px;
  padding: 0 var(--gl-space-xl);
  font-size: var(--gl-font-size-md);
  border-radius: var(--gl-radius-lg);
}

.gl-input-lg {
  height: 52px;
  padding: 0 var(--gl-space-2xl);
  font-size: var(--gl-font-size-lg);
  border-radius: var(--gl-radius-xl);
}

.gl-input:hover:not(:disabled) {
  border-color: var(--gl-color-border-strong);
  background: var(--gl-color-surface-strong);
}

.gl-input:focus {
  border-color: var(--gl-color-border-focus);
  background: var(--gl-color-surface-elevated);
  box-shadow: var(--gl-shadow-focus), var(--gl-shadow-inner);
}
```

### Task 4: Navigation Components

Create new file: `src/components/Navigation/Navigation.css`

```css
/* Navigation - Apple Glass Style */

/* Top Navigation */
.gl-top-nav {
  position: sticky;
  top: 0;
  height: var(--gl-nav-height);
  display: flex;
  align-items: center;
  padding: 0 var(--gl-space-xl);
  background: var(--gl-color-surface-nav);
  backdrop-filter: blur(var(--gl-blur-nav)) saturate(180%);
  -webkit-backdrop-filter: blur(var(--gl-blur-nav)) saturate(180%);
  border-bottom: 1px solid var(--gl-color-border);
  z-index: var(--gl-z-nav);
}

.gl-top-nav-left,
.gl-top-nav-center,
.gl-top-nav-right {
  display: flex;
  align-items: center;
  gap: var(--gl-space-lg);
}

.gl-top-nav-left {
  flex: 0 0 auto;
}

.gl-top-nav-center {
  flex: 1 1 auto;
  justify-content: center;
}

.gl-top-nav-right {
  flex: 0 0 auto;
  justify-content: flex-end;
}

.gl-logo {
  font-size: var(--gl-font-size-lg);
  font-weight: var(--gl-font-weight-semibold);
  color: var(--gl-color-text);
  letter-spacing: var(--gl-letter-spacing-tight);
}

.gl-nav-item {
  display: inline-flex;
  align-items: center;
  gap: var(--gl-space-sm);
  height: 36px;
  padding: 0 var(--gl-space-lg);
  font-size: var(--gl-font-size-sm);
  font-weight: var(--gl-font-weight-medium);
  color: var(--gl-color-text-muted);
  background: transparent;
  border: 1px solid transparent;
  border-radius: var(--gl-radius-md);
  cursor: pointer;
  transition: all var(--gl-transition-fast);
  white-space: nowrap;
  user-select: none;
}

.gl-nav-item:hover {
  color: var(--gl-color-text);
  background: var(--gl-color-hover);
}

.gl-nav-item-active {
  color: var(--gl-color-text);
  background: var(--gl-color-surface-strong);
  border-color: var(--gl-color-border);
  box-shadow: var(--gl-shadow-soft), var(--gl-shadow-inner);
}

/* Bottom Navigation (Mobile) */
.gl-bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: var(--gl-bottom-nav-height);
  display: none;
  justify-content: space-around;
  align-items: center;
  padding: var(--gl-space-sm) var(--gl-space-md);
  background: var(--gl-color-surface-nav);
  backdrop-filter: blur(var(--gl-blur-nav)) saturate(180%);
  -webkit-backdrop-filter: blur(var(--gl-blur-nav)) saturate(180%);
  border-top: 1px solid var(--gl-color-border);
  z-index: var(--gl-z-nav);
}

.gl-bottom-nav .gl-nav-item {
  flex-direction: column;
  height: auto;
  padding: var(--gl-space-xs);
  gap: 4px;
  border-radius: var(--gl-radius-sm);
  min-width: 60px;
}

.gl-nav-icon {
  font-size: 20px;
  line-height: 1;
}

.gl-nav-label {
  font-size: 11px;
  font-weight: var(--gl-font-weight-medium);
}

/* Mobile */
@media (max-width: 768px) {
  .gl-top-nav {
    padding: 0 var(--gl-space-lg);
  }

  .gl-top-nav-center {
    display: none;
  }

  .gl-bottom-nav {
    display: flex;
  }
}
```

Create: `src/components/Navigation/Navigation.tsx`

```tsx
import React from 'react';
import './Navigation.css';

export interface GlassTopNavProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export const GlassTopNav: React.FC<GlassTopNavProps> & {
  Left: typeof GlassTopNavLeft;
  Center: typeof GlassTopNavCenter;
  Right: typeof GlassTopNavRight;
} = ({ children, className = '', ...props }) => {
  return (
    <header className={`gl-top-nav ${className}`} {...props}>
      {children}
    </header>
  );
};

const GlassTopNavLeft: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => <div className={`gl-top-nav-left ${className}`}>{children}</div>;

const GlassTopNavCenter: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => <nav className={`gl-top-nav-center ${className}`}>{children}</nav>;

const GlassTopNavRight: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => <div className={`gl-top-nav-right ${className}`}>{children}</div>;

GlassTopNav.Left = GlassTopNavLeft;
GlassTopNav.Center = GlassTopNavCenter;
GlassTopNav.Right = GlassTopNavRight;

export interface GlassNavItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  icon?: React.ReactNode;
  label?: string;
}

export const GlassNavItem: React.FC<GlassNavItemProps> = ({
  active = false,
  icon,
  label,
  children,
  className = '',
  ...props
}) => {
  const classes = ['gl-nav-item', active && 'gl-nav-item-active', className]
    .filter(Boolean)
    .join(' ');

  return (
    <button type="button" className={classes} {...props}>
      {icon && <span className="gl-nav-icon">{icon}</span>}
      {label && <span className="gl-nav-label">{label}</span>}
      {children}
    </button>
  );
};

export interface GlassBottomNavProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export const GlassBottomNav: React.FC<GlassBottomNavProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <nav className={`gl-bottom-nav ${className}`} {...props}>
      {children}
    </nav>
  );
};
```

Create: `src/components/Navigation/index.ts`

```ts
export { GlassTopNav, GlassNavItem, GlassBottomNav } from './Navigation';
export type { GlassTopNavProps, GlassNavItemProps, GlassBottomNavProps } from './Navigation';
```

### Task 5: Update Main Index

**File:** `src/index.ts`

Add navigation exports:

```ts
// Existing exports...
export * from './components/Navigation';
```

## Summary of Design Changes

**Completed:**
- ✅ Gradient backgrounds with depth
- ✅ Translucent surfaces (0.72-0.88 opacity)
- ✅ Strong blur with saturation filters
- ✅ Larger border radii (10-36px)
- ✅ Layered shadow system
- ✅ Inner shadows for glass highlight
- ✅ Letter spacing for typography
- ✅ Mobile-responsive animations
- ✅ Custom scrollbars

**To Complete:**
- Update remaining form controls (Checkbox, Radio, Switch, Select)
- Apply similar patterns: larger touch targets, blur backgrounds, subtle shadows
- Follow Button.css pattern for consistency

**Testing:**
Run `npm run build` and check the demo at http://localhost:5173 to see the new Apple Glass design!
