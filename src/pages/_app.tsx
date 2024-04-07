import { useState } from 'react';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

export default function App({ Component, pageProps }: AppProps) {
	const queryClientState = new QueryClient();
	const [queryClient] = useState(queryClientState);
	return (
		<QueryClientProvider client={queryClient}>
			<Component {...pageProps} />
		</QueryClientProvider>
	);
}
