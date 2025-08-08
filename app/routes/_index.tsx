import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Fix America Calculator" },
    { name: "description", content: "Interactive tool to see how economic policy changes affect the US debt" },
  ];
};

// Simplified baseline data (in billions)
const BASELINE_DATA = {
  revenue: {
    individualIncome: 2042, // Individual income tax
    corporate: 420,         // Corporate tax
  },
  spending: {
    defense: 816,
    healthcare: 1347,       // Medicare + Medicaid
    socialSecurity: 1347,
    interest: 640,
    other: 850,
  },
  totalRevenue: 2462,
  totalSpending: 5000,
  deficit: 2538, // spending - revenue
};

export default function Index() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Fix America Calculator
          </h1>
          <p className="text-gray-600">
            See how changes to taxes and spending affect the federal deficit
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Tax Controls */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4 text-blue-600">Tax Rates</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Individual Income Tax Rate
                </label>
                <input 
                  type="range" 
                  min="10" 
                  max="50" 
                  defaultValue="22" 
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>10%</span>
                  <span className="font-medium">22% (current)</span>
                  <span>50%</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Corporate Tax Rate
                </label>
                <input 
                  type="range" 
                  min="15" 
                  max="35" 
                  defaultValue="21" 
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>15%</span>
                  <span className="font-medium">21% (current)</span>
                  <span>35%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Spending Controls */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4 text-red-600">Government Spending</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Defense Spending
                </label>
                <input 
                  type="range" 
                  min="500" 
                  max="1200" 
                  defaultValue="816" 
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>$500B</span>
                  <span className="font-medium">$816B (current)</span>
                  <span>$1,200B</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Healthcare (Medicare/Medicaid)
                </label>
                <input 
                  type="range" 
                  min="1000" 
                  max="2000" 
                  defaultValue="1347" 
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>$1,000B</span>
                  <span className="font-medium">$1,347B (current)</span>
                  <span>$2,000B</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Social Security
                </label>
                <input 
                  type="range" 
                  min="1000" 
                  max="2000" 
                  defaultValue="1347" 
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>$1,000B</span>
                  <span className="font-medium">$1,347B (current)</span>
                  <span>$2,000B</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results Table */}
        <div className="mt-8 bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 bg-gray-50 border-b">
            <h2 className="text-xl font-semibold text-gray-900">Budget Impact</h2>
          </div>
          <div className="p-6">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Category</th>
                  <th className="text-right py-2">Current Baseline</th>
                  <th className="text-right py-2">Your Scenario</th>
                  <th className="text-right py-2">Change</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="py-3 font-medium text-blue-600">Total Revenue</td>
                  <td className="py-3 text-right">${BASELINE_DATA.totalRevenue.toLocaleString()}B</td>
                  <td className="py-3 text-right">${BASELINE_DATA.totalRevenue.toLocaleString()}B</td>
                  <td className="py-3 text-right text-gray-500">$0B</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-red-600">Total Spending</td>
                  <td className="py-3 text-right">${BASELINE_DATA.totalSpending.toLocaleString()}B</td>
                  <td className="py-3 text-right">${BASELINE_DATA.totalSpending.toLocaleString()}B</td>
                  <td className="py-3 text-right text-gray-500">$0B</td>
                </tr>
                <tr className="border-t-2 border-gray-300 font-semibold">
                  <td className="py-3 text-lg">Annual Deficit</td>
                  <td className="py-3 text-right text-lg text-red-600">
                    ${BASELINE_DATA.deficit.toLocaleString()}B
                  </td>
                  <td className="py-3 text-right text-lg text-red-600">
                    ${BASELINE_DATA.deficit.toLocaleString()}B
                  </td>
                  <td className="py-3 text-right text-lg text-gray-500">$0B</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>Data simplified for demonstration. Actual economic relationships are more complex.</p>
        </div>
      </div>
    </div>
  );
}