'use client'
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import { Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs";

// interface TabsProps {
//   children: ReactNode;
//   className?: string;
// }

// export const Tabs: FC<TabsProps> = ({ children, className }) => {
//   return <div className={`space-y-4 ${className}`}>{children}</div>;
// };

// // TabsList Component
// interface TabsListProps {
//   children: ReactNode;
// }

// export function TabsList({ children }: TabsListProps) {
//   return <div className="flex space-x-4">{children}</div>;
// }

// // TabsTrigger Component
// interface TabsTriggerProps {
//   children: ReactNode;
//   onClick: () => void;
//   selected: boolean;
//   className?: string;
// }

// export function TabsTrigger({ children, onClick, selected, className }: TabsTriggerProps) {
//   return (
//     <button
//       className={`py-2 px-4 text-sm font-medium rounded-t-lg ${
//         selected ? "text-blue-600 border-b-2 border-blue-600" : "text-black"
//       } ${className}`}
//       onClick={onClick}
//     >
//       {children}
//     </button>
//   );
// }

// Mock Data
const dropoutData = {
  gender: [
    { name: "Male", dropoutRate: 16 },
    { name: "Female", dropoutRate: 14 },
    { name: "Other", dropoutRate: 15 },
  ],
  area: [
    { name: "Urban", dropoutRate: 12 },
    { name: "Semi-Urban", dropoutRate: 15 },
    { name: "Rural", dropoutRate: 18 },
  ],
  caste: [
    { name: "General", dropoutRate: 10 },
    { name: "OBC", dropoutRate: 15 },
    { name: "SC", dropoutRate: 18 },
    { name: "ST", dropoutRate: 20 },
  ],
  standard: [
    { name: "5th", dropoutRate: 5 },
    { name: "6th", dropoutRate: 7 },
    { name: "7th", dropoutRate: 10 },
    { name: "8th", dropoutRate: 12 },
    { name: "9th", dropoutRate: 15 },
    { name: "10th", dropoutRate: 18 },
  ],
};

// Dropout Insights Component
export default function DropoutInsights() {
  const [selectedTab, setSelectedTab] = useState("gender");

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Detailed Dropout Analysis</CardTitle>
          <CardDescription>Segmented by various demographic factors</CardDescription>
        </CardHeader>
        <CardContent>
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="your-tabs-class">
        <TabsList>
          <TabsTrigger value="gender" onClick={() => setSelectedTab("gender")} isSelected={selectedTab === "gender"}>
            Gender
          </TabsTrigger>
          <TabsTrigger value="area" onClick={() => setSelectedTab("area")} isSelected={selectedTab === "area"}>
            Area
          </TabsTrigger>
          <TabsTrigger value="caste" onClick={() => setSelectedTab("caste")} isSelected={selectedTab === "caste"}>
            Caste
          </TabsTrigger>
          <TabsTrigger value="standard" onClick={() => setSelectedTab("standard")} isSelected={selectedTab === "standard"}>
            Standard/Age
          </TabsTrigger>
        </TabsList>

        {selectedTab === "gender" && (
          <DropoutChart data={dropoutData.gender} title="Dropout Rate by Gender" />
        )}
        {selectedTab === "area" && (
          <DropoutChart data={dropoutData.area} title="Dropout Rate by Area" />
        )}
        {selectedTab === "caste" && (
          <DropoutChart data={dropoutData.caste} title="Dropout Rate by Caste" />
        )}
        {selectedTab === "standard" && (
          <DropoutChart data={dropoutData.standard} title="Dropout Rate by Standard" chartType="line" />
        )}
      </Tabs>


        </CardContent>
      </Card>
    </div>
  );
}

// DropoutChart Component
interface DropoutChartProps {
  data: { name: string; dropoutRate: number }[];
  title: string;
  chartType?: "bar" | "line";
}

function DropoutChart({ data, title, chartType = "bar" }: DropoutChartProps) {
  return (
    <div className="h-[300px]">
      <h3 className="text-black font-medium mb-2">{title}</h3>
      <ResponsiveContainer width="100%" height="100%">
        {chartType === "bar" ? (
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="dropoutRate" fill="#1C4E80" />
          </BarChart>
        ) : (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="dropoutRate" stroke="#1C4E80" />
          </LineChart>
        )}
      </ResponsiveContainer>
    </div>
  );
}
