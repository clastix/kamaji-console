import clsx from "clsx";

type TabsProps<T = any> = {
    items: string[];
    activeTab: string;
    onChange: (value: string) => void;
};

export function Tabs<T>({ items, activeTab, onChange }: TabsProps<T>) {
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
