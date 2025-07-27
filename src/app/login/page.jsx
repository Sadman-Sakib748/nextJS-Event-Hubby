"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Eye, EyeOff, Mail, Lock, ArrowRight, Sparkles, Star, AlertCircle, Link } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { signIn, getSession } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        rememberMe: false,
    })
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setError("")

        try {
            const result = await signIn("credentials", {
                email: formData.email,
                password: formData.password,
                redirect: false,
            })

            if (result?.error) {
                setError("Invalid email or password. Please try again.")
            } else {
                const session = await getSession()
                if (session) {
                    router.push("/dashboard")
                    router.refresh()
                }
            }
        } catch (err) {
            setError("An error occurred. Please try again.")
        } finally {
            setIsLoading(false)
        }
    }

    const handleSocialLogin = async (provider) => {
        setIsLoading(true)
        try {
            await signIn(provider, { callbackUrl: "/dashboard" })
        } catch (err) {
            setError(`Failed to sign in with ${provider}`)
        } finally {
            setIsLoading(false)
        }
    }

    const handleInputChange = (field, value) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }))
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 flex items-center justify-center p-4 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{ y: [0, -30, 0], rotate: [0, 10, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-amber-400/20 to-orange-400/20 rounded-full"
                    style={{
                        clipPath: "polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)",
                    }}
                />
                <motion.div
                    animate={{ y: [0, 25, 0], rotate: [0, -15, 0], scale: [1, 0.9, 1] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-yellow-400/20 to-amber-400/20 rounded-full"
                    style={{ clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)" }}
                />
                <motion.div
                    animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 4 }}
                    className="absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-br from-orange-400/20 to-yellow-400/20 rounded-full"
                    style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
                />
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-amber-400/40 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -100, 0],
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                        }}
                        transition={{
                            duration: 4 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 3,
                        }}
                    />
                ))}
            </div>

            {/* Main Content */}
            <div className="relative z-10 w-full max-w-md">
                <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-8">
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.2, duration: 0.8, type: "spring", bounce: 0.4 }}
                        className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-6 py-3 mb-6 border border-amber-200/50"
                    >
                        <Sparkles className="w-5 h-5 text-amber-600" />
                        <span className="text-sm font-semibold text-amber-700">Welcome Back</span>
                        <Star className="w-4 h-4 text-amber-600" />
                    </motion.div>
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent mb-2">
                        Sign In
                    </h1>
                    <p className="text-gray-600">Enter your credentials to access your account</p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}>
                    <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-md overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500" />
                        <CardHeader className="pt-8 pb-6">
                            <CardTitle className="text-2xl font-bold text-center bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                                Login to EventWave
                            </CardTitle>
                            <CardDescription className="text-center text-gray-600">
                                Access your dashboard and manage your events
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="px-8 pb-8">
                            {error && (
                                <Alert className="mb-6 border-red-200 bg-red-50">
                                    <AlertCircle className="h-4 w-4 text-red-600" />
                                    <AlertDescription className="text-red-700">{error}</AlertDescription>
                                </Alert>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Email Field */}
                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                        <Mail className="w-4 h-4 text-amber-600" />
                                        Email Address
                                    </Label>
                                    <div className="relative">
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="Enter your email"
                                            value={formData.email}
                                            onChange={(e) => handleInputChange("email", e.target.value)}
                                            className="h-12 pl-4 border-amber-200 focus:border-amber-500 focus:ring-amber-500/20 bg-white/70 backdrop-blur-sm"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Password Field */}
                                <div className="space-y-2">
                                    <Label htmlFor="password" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                        <Lock className="w-4 h-4 text-amber-600" />
                                        Password
                                    </Label>
                                    <div className="relative">
                                        <Input
                                            id="password"
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Enter your password"
                                            value={formData.password}
                                            onChange={(e) => handleInputChange("password", e.target.value)}
                                            className="h-12 pl-4 pr-12 border-amber-200 focus:border-amber-500 focus:ring-amber-500/20 bg-white/70 backdrop-blur-sm"
                                            required
                                        />
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="icon"
                                            className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 text-gray-500 hover:text-amber-600"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                        </Button>
                                    </div>
                                </div>

                                {/* Demo Credentials */}
                                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                                    <p className="text-sm text-amber-800 font-medium mb-1">Demo Credentials:</p>
                                    <p className="text-xs text-amber-700">Email: john@example.com</p>
                                    <p className="text-xs text-amber-700">Password: password123</p>
                                </div>

                                {/* Remember Me & Forgot Password */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <Checkbox
                                            id="remember"
                                            checked={formData.rememberMe}
                                            onCheckedChange={(checked) => handleInputChange("rememberMe", checked)}
                                            className="border-amber-300 data-[state=checked]:bg-amber-500 data-[state=checked]:border-amber-500"
                                        />
                                        <Label htmlFor="remember" className="text-sm text-gray-600 cursor-pointer">
                                            Remember me
                                        </Label>
                                    </div>
                                    <Link href="/forgot-password" className="text-sm text-amber-600 hover:text-amber-700 font-medium">
                                        Forgot password?
                                    </Link>
                                </div>

                                {/* Submit Button */}
                                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                    <Button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full h-12 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 hover:from-amber-600 hover:via-orange-600 hover:to-yellow-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-amber-500/30 disabled:opacity-50"
                                    >
                                        {isLoading ? (
                                            <div className="flex items-center gap-2">
                                                <motion.div
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                    className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                                                />
                                                Signing In...
                                            </div>
                                        ) : (
                                            <div className="flex items-center gap-2">
                                                Sign In
                                                <ArrowRight className="w-4 h-4" />
                                            </div>
                                        )}
                                    </Button>
                                </motion.div>

                                {/* Divider */}
                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-amber-200" />
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-4 bg-white text-gray-500">Or continue with</span>
                                    </div>
                                </div>

                                {/* Social Buttons */}
                                <div className="grid grid-cols-2 gap-4">
                                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                        <Button
                                            type="button"
                                            variant="outline"
                                            onClick={() => handleSocialLogin("google")}
                                            disabled={isLoading}
                                            className="w-full h-12 border-amber-200 hover:bg-amber-50 hover:border-amber-300 bg-white/70 backdrop-blur-sm"
                                        >
                                            {/* Google SVG here */}
                                            Google
                                        </Button>
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                        <Button
                                            type="button"
                                            variant="outline"
                                            onClick={() => handleSocialLogin("facebook")}
                                            disabled={isLoading}
                                            className="w-full h-12 border-amber-200 hover:bg-amber-50 hover:border-amber-300 bg-white/70 backdrop-blur-sm"
                                        >
                                            {/* Facebook SVG here */}
                                            Facebook
                                        </Button>
                                    </motion.div>
                                </div>
                            </form>

                            <div className="mt-8 text-center">
                                <p className="text-gray-600">
                                    Don't have an account?{" "}
                                    <Link href="/signup" className="text-amber-600 hover:text-amber-700 font-semibold">
                                        Sign up here
                                    </Link>
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    )
}
