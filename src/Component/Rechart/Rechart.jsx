
import { LineChart, Line,XAxis,YAxis } from 'recharts';
export default function Rechart() {
    const studentMarks = [
        { id: 1, name: "Alice", mathMarks: 45, physicsMarks: 18 },
        { id: 2, name: "Bob", mathMarks: 58, physicsMarks: 82 },
        { id: 3, name: "Charlie", mathMarks: 92, physicsMarks: 88 },
        { id: 4, name: "David", mathMarks: 74, physicsMarks: 70 },
        { id: 5, name: "Eve", mathMarks: 48, physicsMarks: 61 },
        { id: 6, name: "Frank", mathMarks: 67, physicsMarks: 65 },
        { id: 7, name: "Grace", mathMarks: 94, physicsMarks: 89 },
        { id: 8, name: "Hannah", mathMarks: 81, physicsMarks: 84 },
        { id: 9, name: "Ivan", mathMarks: 76, physicsMarks: 75 },
        { id: 10, name: "Jack", mathMarks: 89, physicsMarks: 90 }
      ];
  return (
    <div>
        <LineChart width={500} height={300} data={studentMarks}>
        <Line type="monotone" dataKey="mathMarks" stroke='red' />
        <Line type="monotone" dataKey="physicsMarks"  />
        <XAxis dataKey="name"  />
    <YAxis />
        </LineChart>

    </div>
  )
}
