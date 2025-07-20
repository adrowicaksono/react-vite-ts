import { useState, useRef, useEffect } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid'
import { type SortOptions } from '../hooks/useArticles'
import { ARTICLE_SORT_OPTIONS } from '../constants/CommonConstants'

const options = ARTICLE_SORT_OPTIONS

interface SortDropDownProps {
    onChange?: (sortValue: SortOptions) => void
    initialValue: SortOptions
}

type SortOption = {
    label: string,
    value: SortOptions
}

export default function SortDropdown({ onChange, initialValue = 'best' }: SortDropDownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(
        options.find((opt) => opt.value === initialValue) || options[0]
    );
    const dropdownRef = useRef(null);

    useEffect(() => {
        setSelectedOption(options.find((opt) => opt.value === initialValue) || options[0]);
    }, [initialValue]);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !(dropdownRef.current as HTMLElement).contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    const handleSelect = (option: SortOption) => {
        setSelectedOption(option);
        setIsOpen(false)
        if (onChange) {
            onChange(option.value);
        }
    };

    return (
        <div className="relative inline-block text-right" ref={dropdownRef}>
            <div>
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="inline-flex w-full justify-between items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    id="sort-menu-button"
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                >
                    {selectedOption.label}
                    {isOpen ? (
                        <ChevronUpIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                    ) : (
                        <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                    )}
                </button>
            </div>

            {isOpen && (
                <div
                    className="absolute left-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="sort-menu-button"
                >
                    <div className="py-1" role="none">
                        {options.map((option) => (
                            <button
                                key={option.value}
                                onClick={() => handleSelect(option as SortOption)}
                                className={`block w-full px-4 py-2 text-left text-sm ${selectedOption.value === option.value
                                    ? 'bg-gray-100 text-gray-900 font-semibold'
                                    : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                                role="menuitem"
                            >
                                {option.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}