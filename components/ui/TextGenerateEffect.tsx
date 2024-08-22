import { useEffect, useRef } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

const TextGenerateEffect = ({ words, className }: { words: string; className?: string }) => {
    const [scope, animate] = useAnimate();
    const wordsArray = words.split(" ");

    // Using a ref to store `scope` and `animate` function for useEffect
    const scopeRef = useRef(scope);
    const animateRef = useRef(animate);

    useEffect(() => {
        // Ensure the latest `animate` function is used
        if (scopeRef.current) {
            animateRef.current(
                "span",
                {
                    opacity: 1,
                },
                {
                    duration: 1,
                    delay: stagger(0.2),
                }
            );
        }
    }, []);  // Remove `scope.current` from the dependency array

    // Set the refs on first render
    useEffect(() => {
        scopeRef.current = scope;
        animateRef.current = animate;
    }, [scope, animate]);

    const renderWords = () => {
        return (
            <motion.div ref={scope}>
                {wordsArray.map((word, idx) => (
                    <motion.span
                        key={word + idx}
                        className={` ${idx > 3 ? "text-purple" : "dark:text-white text-black"} opacity-0`}
                    >
                        {word}{" "}
                    </motion.span>
                ))}
            </motion.div>
        );
    };

    return (
        <div className={cn("font-bold", className)}>
            <div className="my-4">
                <div className="dark:text-white text-black leading-snug tracking-wide">
                    {renderWords()}
                </div>
            </div>
        </div>
    );
};

export default TextGenerateEffect;
