type ArrowIconProps = { direction: 'left' | 'right' };

export function ArrowIcon({ direction }: ArrowIconProps) {
  return (
    <svg viewBox="0 0 48 18" aria-hidden="true">
      <path d={direction === 'left' ? 'M47 9H2m0 0 8-8M2 9l8 8' : 'M1 9h45m0 0-8-8m8 8-8 8'} />
    </svg>
  );
}
