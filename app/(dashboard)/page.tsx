'use client';

import { useSession } from 'next-auth/react';

export default function Home() {
    const { data: session } = useSession();

    return (
        <div className="bg-white shadow rounded-lg p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Hello, {session?.user?.name}!
            </h1>
            <p className="text-gray-600">
                Welcome to your Pizza Dashboard. You can view and manage your pizza orders here.
            </p>
        </div>
    );
} 