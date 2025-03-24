import clsx from "clsx";

type TabsProps<T extends string> = {
    items: readonly T[];
    activeTab: T;
    onChange: (value: T) => void;
};

export function Tabs<T extends string>({ items, activeTab, onChange }: TabsProps<T>) {
    return (
        <div className="tabs">
            {items.map((item) => (
                <button
                    key={item}
                    className={clsx(
                        "tab tab-bordered text-lg",
                        activeTab === item && "tab-active"
                    )}
                    onClick={() => onChange(item)}
                >
                    {item}
                </button>
            ))}
        </div>
    );
}
