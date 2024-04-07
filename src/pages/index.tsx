import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import { RefactorCodeTest } from '@/components';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<>
			<Head>
				<title>MedScout Frontend Code Test</title>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className={`${styles.main} ${inter.className}`}>
				<RefactorCodeTest />
			</main>
		</>
	);
}
