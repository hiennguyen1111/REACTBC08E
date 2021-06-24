import React from 'react'

// Cu phap tao function component : go rfc

// Tao ra 1 the <FunctionComponent />
export default function FunctionComponent() {
    // Lenh return chua giao dien cua the. Luu y giao dien cua the phai duoc bao phu boi 1 the duy nhat thuong la the div, hoac section cung dc
    return (
        <section className="p-2 bg-dark m-2 text-white"> 
            <div className="text-white display-4">Title</div>
            <div>
                content content content content
            </div>
        </section>
    )
}
