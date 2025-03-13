import { Metadata } from 'next';
import "../styles/globals.css";
import ClientWrapper from './client-wrapper';

export const metadata: Metadata = {
    title: 'Kamaji Console',
    description: 'Kamaji Console Application',
};

export default function RootLayout({
   children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" data-theme="clastix">
        <head>
            <meta content="width=device-width, initial-scale=1" name="viewport"/>
            <link
                rel="apple-touch-icon"
                sizes="57x57"
                href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/apple-icon-57x57.png`}
            />
            {/* Include all your other link and meta tags here */}
        </head>
        <body data-theme="clastix">
        <ClientWrapper>{children}</ClientWrapper>
        </body>
        </html>
    );
}