import { useEffect, useState, useRef } from 'react'

interface DebouncedInputProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onDebouncedChange: (value: string) => void;
    debounceTime?: number;
    type?: string;
    placeholder?: string;
    className?: string;
    [x: string]: any
}

const DebouncedInput = ({
    value,
    onChange,
    onDebouncedChange,
    debounceTime = 500,
    type = 'text',
    placeholder = '',
    className = '',
    ...rest
}: DebouncedInputProps) => {
    const [internalValue, setInternalValue] = useState(value)
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        setInternalValue(value);
    }, [value])

    useEffect(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }

        timeoutRef.current = setTimeout(() => {
            if (onDebouncedChange) {
                onDebouncedChange(internalValue)
            }
        }, debounceTime);

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
        }
    }, [internalValue, debounceTime, onDebouncedChange])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInternalValue(e.target.value);
        if (onChange) {
            onChange(e)
        }
    };

    return (
        <input
            id='debounced-input'
            data-testid="debounced-input"
            type={type}
            value={internalValue}
            onChange={handleChange}
            placeholder={placeholder}
            // Apply responsive Tailwind classes for mobile-first design
            // Default padding and font size, larger on small screens and up
            className={`
                block w-full
                px-3 py-2 text-base
                sm:px-4 sm:py-2.5 sm:text-lg
                md:px-5 md:py-3 md:text-xl
                border border-gray-300 rounded-md
                shadow-sm
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                transition duration-150 ease-in-out
                ${className}
            `}
            {...rest}
        />
    );
};

export default DebouncedInput
