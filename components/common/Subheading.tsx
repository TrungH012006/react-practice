import { twMerge } from "tailwind-merge"

interface SubheadingProps {
    className?: string;
    children: React.ReactNode
}

const Subheading = ({ className, children }: SubheadingProps) => {
  return (
    <h1 className={twMerge("text-5xl max-lg:text-3xl font-bold font-rethink", className)}>
        {children}
    </h1>
  )
}

export default Subheading