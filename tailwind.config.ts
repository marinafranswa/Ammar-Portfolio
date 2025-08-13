import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Montserrat', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				portfolio: {
					lime: {
						DEFAULT: 'hsl(var(--portfolio-lime))',
						80: 'hsl(var(--portfolio-lime-80))',
						60: 'hsl(var(--portfolio-lime-60))',
						40: 'hsl(var(--portfolio-lime-40))',
						20: 'hsl(var(--portfolio-lime-20))',
					},
					purple: {
						DEFAULT: 'hsl(var(--portfolio-purple))',
						80: 'hsl(var(--portfolio-purple-80))',
						60: 'hsl(var(--portfolio-purple-60))',
						40: 'hsl(var(--portfolio-purple-40))',
						20: 'hsl(var(--portfolio-purple-20))',
					},
					black: {
						DEFAULT: 'hsl(var(--portfolio-black))',
						80: 'hsl(var(--portfolio-black-80))',
						60: 'hsl(var(--portfolio-black-60))',
						40: 'hsl(var(--portfolio-black-40))',
						20: 'hsl(var(--portfolio-black-20))',
					},
					charcoal: {
						DEFAULT: 'hsl(var(--portfolio-charcoal))',
						light: 'hsl(var(--portfolio-charcoal-light))',
						dark: 'hsl(var(--portfolio-charcoal-dark))',
					},
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			},
			transitionTimingFunction: {
				'portfolio': 'cubic-bezier(0.22, 1, 0.36, 1)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;