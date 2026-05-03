interface TransactionRowProps {
  name: string
  date: string
  amount: string
  fees: string
}

export default function TransactionRow({ name, date, amount, fees }: TransactionRowProps) {
  return (
    <div className="bg-white p-3 rounded-xl shadow-sm flex justify-between">
      <div>
        <div className="font-medium">{name}</div>
        <div className="text-xs text-gray-400">{date}</div>
      </div>
      <div className="text-right">
        <div className="font-bold">€{amount}</div>
        <div className="text-xs text-gray-400">frais €{fees}</div>
      </div>
    </div>
  )
}