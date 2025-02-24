import React from 'react'

import { SearchIcon } from '@/components/ui/icons'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/libs/utils'

interface SearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string
  className?: string
}

export const Search = ({ placeholder, className, ...props }: SearchProps) => {
  return (
    <div className="relative">
      <Input
        id="search"
        placeholder={placeholder}
        className={cn('peer rounded-lg pl-10 md:min-w-72', className)}
        {...props}
      />
      <SearchIcon className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground peer-focus-within:text-foreground" />
      <Label htmlFor="search" className="sr-only">
        Search
      </Label>
    </div>
  )
}
