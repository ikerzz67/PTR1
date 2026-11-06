import { Link } from '../lib/router'

export function Logo({ className = '' }: { className?: string }) {
  return (
    <Link href="/" className={`logo ${className}`} aria-label="PideTuReforma – ir al inicio">
      <img src={`${import.meta.env.BASE_URL}logo.png`} alt="PideTuReforma" width="916" height="138" />
    </Link>
  )
}
