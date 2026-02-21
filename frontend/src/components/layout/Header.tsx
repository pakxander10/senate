import React from 'react';

export function Header() {
    return (
        <header className="w-full border-b bg-background">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <h1 className="text-xl font-bold">Senate App</h1>
                <nav>
                    {/* Navigation items will go here */}
                </nav>
            </div>
        </header>
    );
}
