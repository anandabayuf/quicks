import React from 'react';

type ClockIconProps = {
	isLightsUp?: boolean;
};

export const ClockIcon: React.FC<ClockIconProps> = ({ isLightsUp }) => {
	return isLightsUp ? (
		<svg
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g id="schedule_24px">
				<path
					id="icon/action/schedule_24px"
					fillRule="evenodd"
					clipRule="evenodd"
					d="M9.99181 1.66663C5.39181 1.66663 1.66681 5.39996 1.66681 9.99996C1.66681 14.6 5.39181 18.3333 9.99181 18.3333C14.6001 18.3333 18.3335 14.6 18.3335 9.99996C18.3335 5.39996 14.6001 1.66663 9.99181 1.66663ZM10.0003 16.6666C6.31697 16.6666 3.33364 13.6833 3.33364 9.99996C3.33364 6.31662 6.31697 3.33329 10.0003 3.33329C13.6836 3.33329 16.667 6.31662 16.667 9.99996C16.667 13.6833 13.6836 16.6666 10.0003 16.6666ZM9.16681 5.83329H10.4168V10.2083L14.1668 12.4333L13.5418 13.4583L9.16681 10.8333V5.83329Z"
					fill="#2F80ED"
				/>
			</g>
		</svg>
	) : (
		<svg
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g id="schedule_24px">
				<path
					id="icon/action/schedule_24px"
					fillRule="evenodd"
					clipRule="evenodd"
					d="M9.99187 1.66669C5.39187 1.66669 1.66687 5.40002 1.66687 10C1.66687 14.6 5.39187 18.3334 9.99187 18.3334C14.6002 18.3334 18.3335 14.6 18.3335 10C18.3335 5.40002 14.6002 1.66669 9.99187 1.66669ZM10.0004 16.6667C6.31703 16.6667 3.3337 13.6834 3.3337 10C3.3337 6.31669 6.31703 3.33335 10.0004 3.33335C13.6837 3.33335 16.667 6.31669 16.667 10C16.667 13.6834 13.6837 16.6667 10.0004 16.6667ZM9.16687 5.83335H10.4169V10.2084L14.1669 12.4334L13.5419 13.4584L9.16687 10.8334V5.83335Z"
					fill="#4F4F4F"
				/>
			</g>
		</svg>
	);
};
