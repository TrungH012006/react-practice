import { twMerge } from "tailwind-merge"

interface HeadingProps {
    className?: string;
    children: React.ReactNode
}

const Heading = ({ className, children }: HeadingProps) => {
  return (
    <h1 className={twMerge("text-6xl max-lg:text-4xl font-bold font-rethink", className)}>
        {children}
    </h1>
  )
}

export default Heading