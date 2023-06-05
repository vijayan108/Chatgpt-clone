'use client'
import { signIn } from "next-auth/react"
import Image from "next/image"

const Login = () => {
    return (
        <div className="bg-[#74aa9d] h-screen flex flex-col items-center justify-center text-center">
            <Image
                src='/img/ChatGPT_logo.png'
                width={300}
                height={300}
                alt="Logo"
            />
            <button
                className="text-white font-bold text-3xl animate-pulse"
                onClick={() => signIn('google')}
            >
                Sign In to use ChatGPT
            </button>
        </div>
    )
}

export default Login