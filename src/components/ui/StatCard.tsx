interface StatCardProps {
  label: string
  value: string
  subtext: string
}

export default function StatCard({ label, value, subtext }: StatCardProps) {
  return (
    <div className="bg-white/10 rounded-xl p-3 backdrop-blur text-center">
      <div className="text-lg font-bold">{value}</div>
      <div className="text-xs text-teal-100">{label}</div>
      <div className="text-xs text-teal-200">{subtext}</div>
    </div>
  )
}