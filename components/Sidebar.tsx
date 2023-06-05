'use client'
import { collection, orderBy, query } from 'firebase/firestore'
import { useSession, signOut } from 'next-auth/react'
import { useCollection } from 'react-firebase-hooks/firestore'
import { db } from '../firebase'
import NewChat from './NewChat'
import ChatRow from './ChatRow'

const Sidebar = () => {
	const { data: session } = useSession()
	const [chats, loading, error] = useCollection(
		session && query(
			collection(db, 'users', session.user?.email!, 'chats'),
			orderBy('createdAt', 'asc')
		)
	)

	return (
		<div className="p-2 flex flex-col h-screen">
			<div className="flex-1">
				<NewChat />

				<div>
					{/* ModelSelection */}
				</div>

				{/* Map through the ChatRows */}
				{chats?.docs.map(chat => (
					<ChatRow key={chat.id} id={chat.id} />
				))}
			</div>

			{session && (
				<img
					onClick={() => signOut()}
					src={session.user?.image || ''}
					alt="Profile picture"
					className="w-12 h-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"
				/>
			)}
		</div>
	)
}

export default Sidebar