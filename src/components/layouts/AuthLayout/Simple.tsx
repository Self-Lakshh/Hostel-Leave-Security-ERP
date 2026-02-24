import { cloneElement } from 'react'
import Logo from '@/components/template/Logo'
import type { ReactNode, ReactElement } from 'react'
import type { CommonProps } from '@/@types/common'

interface SimpleProps extends CommonProps {
    content?: ReactNode
}

const Simple = ({ children, content, ...rest }: SimpleProps) => {
    return (
        <div className="h-full relative overflow-hidden flex flex-col items-center justify-center">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: `url('/img/others/spsu-bg.jpg')` }}
            />
            {/* Dark Overlay for better contrast */}
            <div className="absolute inset-0 bg-black/40 z-0" />

            {/* Logo at Top Left */}
            <div className="absolute top-8 left-8 z-20">
                <Logo mode="dark" type="full" logoWidth={150} />
            </div>

            {/* Glassmorphism Container */}
            <div className="w-full max-w-[450px] bg-white/10 dark:bg-black/30 backdrop-blur-2xl border border-white/20 dark:border-white/10 rounded-3xl p-10 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] z-10 relative [&_label]:text-white/90 [&_input]:bg-white/5 [&_input]:border-white/20 [&_input]:text-white [&_input::placeholder]:text-white/40 [&_.heading-text]:text-white/90">
                <div className="mb-10 text-center">
                    <h3 className="mb-2 text-white text-3xl font-bold tracking-tight">
                        Welcome back
                    </h3>
                    <p className="text-white/60 font-medium">
                        Please enter your credentials to login
                    </p>
                </div>
                {content}
                {children
                    ? cloneElement(children as ReactElement, {
                          ...rest,
                      })
                    : null}
            </div>
        </div>
    )
}

export default Simple
