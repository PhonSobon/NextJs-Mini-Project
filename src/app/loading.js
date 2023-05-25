import React from 'react'

export default function Loading() {
  return (
    <div className='flex min-h-screen flex-col  items-center justify-between p-24 bg-slate-500'>
          <div
            class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] "
            role="status">
            <span
              class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)] !items-center"
              >Loading...
            </span>
         </div>
    </div>
  )
}
