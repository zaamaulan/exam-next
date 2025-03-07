'use client'

import { signOut } from 'next-auth/react'
import React from 'react'

import { Button } from '../ui/button'

export const Settings = () => {
  return (
    <div>
      <Button variant={'destructive'} onClick={() => signOut()}>
        Sign out
      </Button>
    </div>
  )
}
