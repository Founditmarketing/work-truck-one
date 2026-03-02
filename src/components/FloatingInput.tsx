import React, { useState } from 'react';
import { Check, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';

export type FloatingInputProps = React.InputHTMLAttributes<HTMLInputElement> & React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label: string;
    isTextArea?: boolean;
};

export default function FloatingInput({ label, isTextArea, id, required, type = 'text', ...props }: FloatingInputProps) {
    const [isFocused, setIsFocused] = useState(false);
    const [value, setValue] = useState('');
    const [isValid, setIsValid] = useState<boolean | null>(null);

    const validate = (val: string) => {
        if (!required && !val) return null;
        if (required && !val) return false;

        if (type === 'email') {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
        }
        if (type === 'tel') {
            return val.replace(/\D/g, '').length >= 10;
        }
        return val.length > 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValue(e.target.value);
        if (props.onChange) {
            if (isTextArea) {
                (props.onChange as any)(e);
            } else {
                props.onChange(e as any);
            }
        }
        if (isFocused) {
            setIsValid(validate(e.target.value));
        }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setIsFocused(false);
        setIsValid(validate(value));
        if (props.onBlur) {
            if (isTextArea) {
                (props.onBlur as any)(e);
            } else {
                props.onBlur(e as any);
            }
        }
    };

    const isActive = isFocused || value.length > 0;

    const borderColor = isValid === false
        ? 'border-red-500'
        : isValid === true
            ? 'border-green-500'
            : isFocused
                ? 'border-safety-amber'
                : 'border-white/10';

    const InputComponent = isTextArea ? 'textarea' : 'input';

    return (
        <div className="relative w-full">
            <div className={`relative bg-industrial-black border-2 transition-colors duration-300 ${borderColor}`}>
                <motion.label
                    htmlFor={id}
                    initial={false}
                    animate={{
                        y: isActive ? -12 : 16,
                        x: isActive ? 12 : 16,
                        scale: isActive ? 0.8 : 1,
                        color: isFocused ? '#FFB800' : '#9ca3af',
                    }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute left-0 top-0 font-display font-black uppercase tracking-widest pointer-events-none origin-top-left z-10 bg-industrial-black px-2"
                >
                    {label} {required && <span className="text-safety-amber">*</span>}
                </motion.label>

                <InputComponent
                    {...(props as any)}
                    id={id}
                    type={type}
                    required={required}
                    onFocus={() => setIsFocused(true)}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className="w-full bg-transparent px-4 py-4 text-white focus:outline-none font-medium resize-none relative z-0"
                    rows={isTextArea ? 5 : undefined}
                />

                {/* Validation Icons */}
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    {isValid === true && <Check className="w-5 h-5 text-green-500" />}
                    {isValid === false && <AlertCircle className="w-5 h-5 text-red-500" />}
                </div>
            </div>

            {isValid === false && (
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-xs font-display font-black uppercase mt-2 tracking-wide absolute -bottom-6 left-0"
                >
                    Invalid entry required
                </motion.p>
            )}
        </div>
    );
}
