import React from 'react'

const mess = `Hello I'd like to order item number 20`
const brief = mess.slice(0, 31);

const messages = () => {
  return (
    <div className="grid grid-cols-1 w-full h-2/5 px-5 mt-5">
        <div className="flex justify-between mb-2">
            <p className="font-bold">Messages</p>
            <p>View All</p>
        </div>
        <div className="grid gap-3 h-full md:overflow-y-auto no-scrollbar">
            <div className="grid grid-cols-12 justify-between pb-3 text-xs">
                <div className="col-span-10 flex items-center gap-2 pe-1">
                    <img src="#" alt="user profile" className="bg-tertiary rounded-full w-10 h-10" />
                    <div>
                        <h2 className="font-bold">Max Fisher</h2>
                        <p>{brief}...</p>
                    </div>
                </div>
                <p className='col-span-2'>20 Oct</p>
            </div>
            <div className="grid grid-cols-12 justify-between pb-3 text-xs">
                <div className="col-span-10 flex items-center gap-2 pe-1">
                    <img src="#" alt="user profile" className="bg-tertiary rounded-full w-10 h-10" />
                    <div>
                        <h2 className="font-bold">Max Fisher</h2>
                        <p>{brief}...</p>
                    </div>
                </div>
                <p className='col-span-2'>20 Oct</p>
            </div>
            <div className="grid grid-cols-12 justify-between pb-3 text-xs">
                <div className="col-span-10 flex items-center gap-2 pe-1">
                    <img src="#" alt="user profile" className="bg-tertiary rounded-full w-10 h-10" />
                    <div>
                        <h2 className="font-bold">Max Fisher</h2>
                        <p>{brief}...</p>
                    </div>
                </div>
                <p className='col-span-2'>20 Oct</p>
            </div>
            <div className="grid grid-cols-12 justify-between pb-3 text-xs">
                <div className="col-span-10 flex items-center gap-2 pe-1">
                    <img src="#" alt="user profile" className="bg-tertiary rounded-full w-10 h-10" />
                    <div>
                        <h2 className="font-bold">Max Fisher</h2>
                        <p>{brief}...</p>
                    </div>
                </div>
                <p className='col-span-2'>20 Oct</p>
            </div>
            <div className="grid grid-cols-12 justify-between pb-3 text-xs">
                <div className="col-span-10 flex items-center gap-2 pe-1">
                    <img src="#" alt="user profile" className="bg-tertiary rounded-full w-10 h-10" />
                    <div>
                        <h2 className="font-bold">Max Fisher</h2>
                        <p>{brief}...</p>
                    </div>
                </div>
                <p className='col-span-2'>20 Oct</p>
            </div>
        </div>
    </div>
  )
}

export default messages