// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from '@/components/ui/popover'
import { Fragment } from 'react'

import { NotificationCard } from '@/components/molecules/notification-card'
import { Button } from '@/components/ui/button'
import { NotificationIcon, TickDoubleIcon } from '@/components/ui/icons'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

const notifications = [
  {
    id: '1',
    title: 'Math Exam is Starting!',
    message: 'Your Math exam has started. Click here to begin.',
    isRead: false,
    createdAt: new Date(),
  },
  {
    id: '2',
    title: 'Exam Schedule Update',
    message: 'The English exam has been rescheduled to March 5th at 10:00 AM.',
    isRead: false,
    createdAt: new Date(),
  },
  {
    id: '3',
    title: 'Reminder: Science Exam Tomorrow',
    message: 'Your Science exam is scheduled for tomorrow at 8:00 AM.',
    isRead: true,
    createdAt: new Date(),
  },
  {
    id: '4',
    title: 'New Announcement',
    message: 'A new announcement has been posted. Check the dashboard for details.',
    isRead: true,
    createdAt: new Date(),
  },
  {
    id: '5',
    title: 'Assignment Submission Deadline',
    message: 'Your History assignment is due by midnight today.',
    isRead: true,
    createdAt: new Date(),
  },
  // ...
  {
    id: '1',
    title: 'Math Exam is Starting!',
    message: 'Your Math exam has started. Click here to begin.',
    isRead: false,
    createdAt: new Date(),
  },
  {
    id: '2',
    title: 'Exam Schedule Update',
    message: 'The English exam has been rescheduled to March 5th at 10:00 AM.',
    isRead: false,
    createdAt: new Date(),
  },
  {
    id: '3',
    title: 'Reminder: Science Exam Tomorrow',
    message: 'Your Science exam is scheduled for tomorrow at 8:00 AM.',
    isRead: true,
    createdAt: new Date(),
  },
  {
    id: '4',
    title: 'New Announcement',
    message: 'A new announcement has been posted. Check the dashboard for details.',
    isRead: true,
    createdAt: new Date(),
  },
  {
    id: '5',
    title: 'Assignment Submission Deadline',
    message: 'Your History assignment is due by midnight today.',
    isRead: true,
    createdAt: new Date(),
  },
  {
    id: '1',
    title: 'Math Exam is Starting!',
    message: 'Your Math exam has started. Click here to begin.',
    isRead: false,
    createdAt: new Date(),
  },
  {
    id: '2',
    title: 'Exam Schedule Update',
    message: 'The English exam has been rescheduled to March 5th at 10:00 AM.',
    isRead: false,
    createdAt: new Date(),
  },
  {
    id: '3',
    title: 'Reminder: Science Exam Tomorrow',
    message: 'Your Science exam is scheduled for tomorrow at 8:00 AM.',
    isRead: true,
    createdAt: new Date(),
  },
  {
    id: '4',
    title: 'New Announcement',
    message: 'A new announcement has been posted. Check the dashboard for details.',
    isRead: true,
    createdAt: new Date(),
  },
  {
    id: '5',
    title: 'Assignment Submission Deadline',
    message: 'Your History assignment is due by midnight today.',
    isRead: true,
    createdAt: new Date(),
  },
  {
    id: '1',
    title: 'Math Exam is Starting!',
    message: 'Your Math exam has started. Click here to begin.',
    isRead: false,
    createdAt: new Date(),
  },
  {
    id: '2',
    title: 'Exam Schedule Update',
    message: 'The English exam has been rescheduled to March 5th at 10:00 AM.',
    isRead: false,
    createdAt: new Date(),
  },
  {
    id: '3',
    title: 'Reminder: Science Exam Tomorrow',
    message: 'Your Science exam is scheduled for tomorrow at 8:00 AM.',
    isRead: true,
    createdAt: new Date(),
  },
  {
    id: '4',
    title: 'New Announcement',
    message: 'A new announcement has been posted. Check the dashboard for details.',
    isRead: true,
    createdAt: new Date(),
  },
  {
    id: '5',
    title: 'Assignment Submission Deadline',
    message: 'Your History assignment is due by midnight today.',
    isRead: true,
    createdAt: new Date(),
  },
]

export default notifications

export const NotificationSheet = () => {
  const notificationCount = notifications.filter((n) => !n.isRead).length

  return (
    // <Popover modal>
    //   <PopoverTrigger asChild>
    //     <Button variant={'outline'} size={'icon'}>
    //       <NotificationIcon className="text-foreground" />
    //     </Button>
    //   </PopoverTrigger>
    //   <PopoverContent align='end' className="flex w-full flex-col gap-5">
    //     <div className="flex flex-row items-center justify-between">
    //       <p className="text-lg font-semibold text-foreground">Notifications</p>
    //       <button className="group inline-flex items-center gap-1.5">
    //         <TickDoubleIcon className="size-4 text-muted-foreground group-hover:text-foreground" />
    //         <span className="text-sm text-muted-foreground group-hover:text-foreground">
    //           Mark all as read
    //         </span>
    //       </button>
    //     </div>
    //     <Separator />
    //     <div className="flex flex-col gap-2">
    //       {notifications.map((notification) => (
    //         <NotificationCard key={notification.id} {...notification} />
    //       ))}
    //     </div>
    //   </PopoverContent>
    // </Popover>

    <Sheet>
      <SheetTrigger asChild>
        <Button variant={'outline'} size={'icon'} className="relative rounded-lg">
          <NotificationIcon className="text-foreground" />
          <span className="sr-only">Notification</span>
          {notificationCount && <span className="absolute -right-1 -top-1 size-2.5 rounded-full bg-foreground"></span>}
        </Button>
      </SheetTrigger>
      {/* h-[cacl(100vh-0.5rem)] m-2 rounded-lg*/}
      <SheetContent className="flex w-full flex-col gap-5 md:!max-w-lg">
        <SheetHeader className="flex flex-row items-center justify-between">
          <SheetTitle>Notifications</SheetTitle>
          <button className="group inline-flex items-center gap-1.5">
            <TickDoubleIcon className="size-4 text-muted-foreground group-hover:text-foreground" />
            <span className="text-sm text-muted-foreground group-hover:text-foreground">Mark all as read</span>
          </button>
        </SheetHeader>
        <Separator />
        <ScrollArea withoutScrollbars>
          <div className="flex flex-col">
            {notifications.map((notification, index) => (
              <Fragment key={index}>
                <NotificationCard {...notification} />
                {index !== notifications.length - 1 && <Separator />}
              </Fragment>
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
