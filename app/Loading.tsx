import React from 'react'

function Loading({ className }: { className?: string }) {
    return (
        <div className={`fixed top-0 h-max inset-x-0  flex items-start z-50  isolate ${className}`}>
            <div className="loadingwheel ">
                <div className="loadingBar"></div>
            </div>
        </div>
    )
}

export default Loading