import { Inter } from 'next/font/google';
import { getServerSession } from 'next-auth';
import SessionProvider from './components/SessionProvider';
import './globals.css';
import { Suspense } from 'react';
import LoadingSpinner from './components/LoadingSpinner';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Pizza Dashboard',
    description: 'A modern dashboard for pizza orders',
};

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getServerSession();

    return (
        <html lang="en">
            <body className={inter.className}>
                <SessionProvider session={session}>
                    <Suspense fallback={<LoadingSpinner />}>
                        {children}
                    </Suspense>
                </SessionProvider>
            </body>
        </html>
    );
} 