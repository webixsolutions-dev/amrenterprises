import React from 'react'

/**
 * Reusable Card component (compound pattern).
 *
 * Usage:
 *   <Card variant="bordered" hoverEffect>
 *     <Card.Image src={img} alt="..." />
 *     <Card.Title>Title</Card.Title>
 *     <Card.Text>Description</Card.Text>
 *   </Card>
 *
 * Variants:
 *   - "plain"    : no border/background, just spacing (default)
 *   - "bordered" : bg + border, blue border on hover (feature cards)
 *   - "outline"  : right-hand divider between grid siblings (insight cards)
 *
 * Composing this way means every "card" on the site shares one
 * source of truth for spacing, borders, hover states and image
 * handling instead of each section re-implementing its own markup.
 */

const VARIANT_CLASSES = {
  plain: 'bg-black text-white',
  bordered:
    'bg-[#0f0f0f] border border-gray-800 hover:border-blue-500 transition duration-300 hover:scale-[1.02]',
  outline: '',
}

function Card({
  as: Tag = 'div',
  variant = 'plain',
  hoverEffect = false,
  className = '',
  children,
  ...rest
}) {
  const base = VARIANT_CLASSES[variant] ?? VARIANT_CLASSES.plain
  const hover =
    hoverEffect && variant !== 'bordered'
      ? 'transition-transform duration-300 hover:scale-[1.02]'
      : ''

  return (
    <Tag className={`${base} ${hover} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  )
}

/** Image slot. Pass wrapperClassName to size/crop the frame, className for the <img> itself. */
Card.Image = function CardImage({
  src,
  alt = '',
  className = 'w-full h-full object-cover',
  wrapperClassName = 'w-full overflow-hidden mb-6',
}) {
  if (!src) return null
  return (
    <div className={wrapperClassName}>
      <img src={src} alt={alt} className={className} />
    </div>
  )
}

/** Small uppercase eyebrow/kicker, e.g. "Featured Product". */
Card.Eyebrow = function CardEyebrow({ children, className = '' }) {
  return (
    <span
      className={`text-blue-500 uppercase tracking-[0.25em] text-xs sm:text-sm font-semibold ${className}`}
    >
      {children}
    </span>
  )
}

/** Big numeral used by numbered/insight style cards, e.g. "01". */
Card.Number = function CardNumber({ children, className = '' }) {
  return (
    <span className={`text-sm text-gray-500 ${className}`}>{children}</span>
  )
}

Card.Title = function CardTitle({
  as: Tag = 'h3',
  children,
  className = '',
}) {
  return (
    <Tag
      className={`text-brand text-lg sm:text-xl font-semibold mb-3 sm:mb-4 ${className}`}
    >
      {children}
    </Tag>
  )
}

Card.Text = function CardText({ children, className = '' }) {
  return (
    <p
      className={`text-gray-400 text-sm sm:text-base leading-6 sm:leading-7 ${className}`}
    >
      {typeof children === 'string' ? children.trim() : children}
    </p>
  )
}

/** Card body wrapper for when you need custom padding around title+text. */
Card.Body = function CardBody({ children, className = 'p-6 sm:p-8' }) {
  return <div className={className}>{children}</div>
}

export default Card
