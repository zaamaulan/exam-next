'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { DataTable } from '@/components/ui/data-table'

export const examHistoryData = [
  {
    examName: 'Mathematics Final',
    score: 85,
    status: 'Passed',
    timeTaken: 45,
    dateTaken: '2025-02-20',
  },
  {
    examName: 'Physics Midterm',
    score: 67,
    status: 'Failed',
    timeTaken: 50,
    dateTaken: '2025-02-18',
  },
  {
    examName: 'History Quiz',
    score: 92,
    status: 'Passed',
    timeTaken: 30,
    dateTaken: '2025-02-15',
  },
  {
    examName: 'English Literature Test',
    score: 74,
    status: 'Failed',
    timeTaken: 40,
    dateTaken: '2025-02-10',
  },
  {
    examName: 'Chemistry Final',
    score: 88,
    status: 'Passed',
    timeTaken: 55,
    dateTaken: '2025-02-05',
  },
]

export const columns = [
  {
    accessorKey: 'examName',
    header: 'Exam Name',
  },
  // {
  //   accessorKey: 'score',
  //   header: 'Score',
  //   cell: () => (
  //     <span
  //       className={row.original.score >= 75 ? 'text-green-500' : 'text-red-500'}
  //     >
  //       {row.original.score}
  //     </span>
  //   ),
  // },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => (
      <span className={row.original.status === 'Passed' ? 'text-green-500' : 'text-red-500'}>
        {row.original.status}
      </span>
    ),
  },
  {
    accessorKey: 'score',
    header: 'Score',
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <span>{row.original.score}</span>
      </div>
    ),
  },
  {
    accessorKey: 'timeTaken',
    header: 'Time Taken (mins)',
  },
  {
    accessorKey: 'dateTaken',
    header: 'Date Taken',
  },
  {
    accessorKey: 'actions',
    header: 'Actions',
    cell: () => <button className="text-blue-500 hover:underline">Review</button>,
  },
]

export const ExamHistory = () => {
  return (
    <Card className="max-md:border-none">
      <CardHeader className="max-md:px-0">
        <CardTitle>Exam History</CardTitle>
        <CardDescription>View your past exam scores and review your performance.</CardDescription>
      </CardHeader>
      <CardContent className="max-md:px-0">
        <DataTable className="grid" columns={columns} data={examHistoryData} />
      </CardContent>
    </Card>
  )
}
