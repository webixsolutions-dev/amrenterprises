import React from 'react'

/**
 * Thin wrapper around a responsive grid so every card section shares
 * the same column/gap conventions instead of each file hand-rolling
 * its own `grid grid-cols-... gap-...` string.
 *
 * NOTE: Tailwind only picks up class names that appear as literal
 * strings in source, so column presets are kept as a lookup table
 * (not built dynamically with template literals) — that way the
 * classes actually ship in the CSS build.
 */

const PRESETS = {
  '1-2': 'grid-cols-1 sm:grid-cols-2',
  '1-2-2': 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-2',
  '1-2-3': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  '1-3': 'grid-cols-1 md:grid-cols-3',
  '1-4': 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
}

export default function CardGrid({
  preset = '1-2',
  gap = 'gap-6 md:gap-8',
  className = '',
  children,
}) {
  const colClasses = PRESETS[preset] ?? PRESETS['1-2']

  return (
    <div className={`grid ${colClasses} ${gap} ${className}`.trim()}>
      {children}
    </div>
  )
}
