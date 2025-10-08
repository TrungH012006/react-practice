import { twMerge } from "tailwind-merge"

interface TextProps {
    className?: string;
    children: React.ReactNode
}

const Text = ({ className, children }: TextProps) => {
  return (
    <h1 className={twMerge("text-xl max-lg:text-lg", className)}>
        {children}
    </h1>
  )
}

export default Text