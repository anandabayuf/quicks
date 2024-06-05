import React from 'react';
import { useInboxesStore } from '../../store';
import { useQuery } from '@tanstack/react-query';
import { getChatByInboxId } from '../../api/chats';
import Loading from '../../components/loading';
import ChatHeader from './components/header';
import { TChats } from '../../api/types';
import ChatBody from './components/body';
import { useChatsStore } from '../../store/chats';
import ChatInput from './components/input';
import ConnectInfo from './components/connect-info';

const Chats: React.FC = () => {
	const { selectedInboxesId } = useInboxesStore();

	const { isFetching } = useQuery<TChats>({
		queryKey: ['getChatByInboxesId'],
		queryFn: () => getChatByInboxId(selectedInboxesId),
	});
	const { data } = useChatsStore();

	return (
		<div className="absolute right-[34px] bottom-[110px] h-[737px] w-[734px] bg-white rounded-md">
			{isFetching ? (
				<Loading loadingText="Loading Chat ..." />
			) : (
				<div className="relative">
					<ChatHeader
						isGroup={data?.isGroup}
						name={data?.name}
						totalParticipants={data?.totalParticipants}
					/>

					<ChatBody data={data?.chats} />

					{data?.id === '4' && <ConnectInfo />}
					<ChatInput />
				</div>
			)}
		</div>
	);
};

export default Chats;
