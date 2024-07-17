import { Button } from '@/components/ui/button'
import React from 'react'
import { ModeToggle } from './Theme_Switcher'
import Link from 'next/link'

const NavBar = () => {
    return (
        <>
            <div className="flex justify-between items-center h-16">
                <div className='p-3'>
                    <h1 className='text-2xl'>
                        <Link href={'/'}>TALENTO</Link>
                    </h1>
                </div>
                <div className="flex items-center p-3">
                    <Button variant={'link'} asChild>
                        <Link href={'/'}>Feed</Link>
                    </Button><Button variant={'link'} asChild>
                        <Link href={'/glimpes'}>Glimpes</Link>
                    </Button><Button variant={'link'} asChild>
                        <Link href={'/explore'}>Explore</Link>
                    </Button>
                </div>
                <div className="flex items-center p-3">
                    <ModeToggle />
                </div>
            </div>
        </>
    )
}

export default NavBar