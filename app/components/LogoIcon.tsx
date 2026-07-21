// components/LogoIcon.tsx
import Image from 'next/image'
import logo from '/home/kira/alx/Unipath/unipath/public/logo.svg'

interface LogoIconProps {
  width?: number
  height?: number
  className?: string
  color?: string 
}

export default function LogoIcon({ width = 28, height = 28, className = '', color = '' }: LogoIconProps) {
  return (
    <Image
      src= {logo}  // ← مسار الصورة
      alt="UniPath Logo"
      width={width}
      height={height}
      className={className}
      color={color}
      priority  // ← يحسن الأداء
    />
  )
}