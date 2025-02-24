'use client'

import { ColumnDef } from '@tanstack/react-table'
import Link from 'next/link'
import { useQueryState } from 'nuqs'
import { useDebounce, useDebouncedCallback } from 'use-debounce'

import { Search } from '@/components/molecules/search'
import { StatCard } from '@/components/molecules/stat-card'
import { Badge } from '@/components/ui/badge'
import { Button, buttonVariants } from '@/components/ui/button'
import { DataTable } from '@/components/ui/data-table'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { FilterHorizontalIcon, FilterRemoveIcon, MoreHorizontalIcon } from '@/components/ui/icons'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { useExams } from '@/hooks/use-exam'
import { cn } from '@/libs/utils'

const columns: ColumnDef<Exam>[] = [
  {
    accessorKey: 'title',
    header: 'Title',
    cell: ({ row }) => (
      <Link href={`/exams/${row.original.id}`} className={cn('!p-0', buttonVariants({ variant: 'link' }))}>
        {row.original.title}
      </Link>
    ),
  },
  {
    accessorKey: 'duration',
    header: 'Duration',
    cell: ({ row }) => `${row.original.duration} min`,
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => <Badge>{row.original.status}</Badge>,
  },
  {
    accessorKey: 'startTime',
    header: 'Start Time',
    cell: ({ row }) =>
      Intl.DateTimeFormat('en-US', {
        dateStyle: 'medium',
        timeStyle: 'short',
      }).format(new Date(row.original.startTime)),
  },
  // {
  //   accessorKey: 'endTime',
  //   header: 'End Time',
  //   cell: ({ row }) =>
  //     Intl.DateTimeFormat('en-US', {
  //       dateStyle: 'medium',
  //       timeStyle: 'short',
  //     }).format(new Date(row.original.endTime)),
  // },

  {
    id: 'actions',
    header: () => <span className="flex justify-center">Actions</span>,
    cell: ({ row }) => {
      const { id } = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger className="relative left-1/2 -translate-x-1/2" asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontalIcon className="size-4 text-foreground" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Link href={`/exams/${id}`}>View exam details</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export const ExamList = () => {
  const { data: exams } = useExams()
  const [status, setStatus] = useQueryState('status', { defaultValue: '', clearOnDefault: true })
  const [title, setTitle] = useQueryState('title', { defaultValue: '', clearOnDefault: true })

  const handleSearch = useDebouncedCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }, 1000)

  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-5 xl:grid-cols-4">
        <StatCard title="Total Exams" description="Total number of exams available" value={23} variant="secondary" />
        <StatCard
          title="Passed Exams"
          description="Number of exams successfully passed"
          value={12}
          variant="secondary"
        />
        <StatCard
          title="Average Score"
          description="Overall average score of all exams"
          value={78.5}
          variant="secondary"
        />
        <StatCard
          title="Completion Rate"
          description="Percentage of exams successfully passed"
          value={'90%'}
          variant="secondary"
        />
      </div>
      <Separator />
      <DataTable columns={columns} data={exams || []}>
        <div className="flex items-center justify-between gap-3">
          <Search placeholder="Search exams..." defaultValue={title} onChange={handleSearch} />
          <div className="inline-flex items-center gap-2">
            {status && (
              <Button variant={'outline'} onClick={() => setStatus(null)} className="flex-shrink-0">
                <FilterRemoveIcon className="text-foreground" />
                <span>Clear</span>
              </Button>
            )}
            <Select defaultValue={status} value={status} onValueChange={(value) => setStatus(value)}>
              <SelectTrigger className="inline-flex gap-2">
                <SelectValue className="!rounded-lg" placeholder="Status" />
              </SelectTrigger>
              <SelectContent className="rounded-lg">
                <SelectItem value="upcoming">Upcoming</SelectItem>
                <SelectItem value="ongoing">Ongoing</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant={'outline'}>
                  <FilterHorizontalIcon className="text-foreground" />
                  <span>Filter</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent align="start">Place content for the popover here.</PopoverContent>
            </Popover>
          </div>
        </div>
      </DataTable>
    </div>
  )
}
