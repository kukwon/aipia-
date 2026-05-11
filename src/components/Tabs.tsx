interface TabsProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  {
    label: "Top",
    value: "topstories",
  },
  {
    label: "New",
    value: "newstories",
  },
  {
    label: "Best",
    value: "beststories",
  },
];
export default function Tabs({ currentTab, onTabChange }: TabsProps) {
  return (
    <div className="mb-5 flex gap-5 justify-center">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onTabChange(tab.value)}
          className={`px-4 py-2 rounded-md ${
            currentTab === tab.value
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
