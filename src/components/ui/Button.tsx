import clsx from "clsx";

type ButtonProps<T = any> = {
    label?: string;
    disabled?: boolean;
    onClick?: (e?: any) => void;
    size?: "small" | "medium" | "large";
    fullWidth?: boolean;
    type?: "button" | "submit" | "reset";
    loading?: boolean;
    children?: React.ReactNode;
    variant?: "default" | "ghost" | "tab";
    isActive?: boolean;
};

export function Button<T>({
                              label,
                              onClick,
                              disabled = false,
                              size = "small",
                              fullWidth = false,
                              type = "button",
                              loading = false,
                              children,
                              variant = "default",
                              isActive = false,
                          }: ButtonProps<T>) {
    const sizeClasses = {
        small: "btn-sm",
        medium: "btn-md",
        large: "btn-lg",
    };

    const variantClasses = {
        default: "bg-button-primary hover:bg-button-hover disabled:bg-button-primary disabled:text-button-disabled",
        ghost: "btn-ghost",
        tab: clsx(
            "tab tab-bordered", // classi comuni per il tab
            { "tab-active": isActive } // aggiunge 'tab-active' se isActive è true
        ),
    }[variant];

    return (
        <button
            className={`btn ${variantClasses} border-0 ${sizeClasses[size]} ${fullWidth ? "w-full" : "w-auto"} ${loading ? "loading" : ""}`}
            disabled={disabled || loading}
            onClick={onClick}
            type={type}
        >
            {children || label}
        </button>
    );
}
