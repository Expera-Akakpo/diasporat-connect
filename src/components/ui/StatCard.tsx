interface StatCardProps {
  label: string
  value: string
  subtext: string
}

export default function StatCard({ label, value, subtext }: StatCardProps) {
  return (
    <div className="bg-gray-800 rounded-xl p-3 backdrop-blur text-center">
      <div className="text-lg font-bold text-gray-300">{value}</div>
      <div className="text-xs text-teal-100">{label}</div>
      <div className="text-xs text-teal-200">{subtext}</div>
    </div>
  )
}