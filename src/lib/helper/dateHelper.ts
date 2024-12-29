import { format } from 'date-fns';

const createDateHelper = () => {
	const toYYYYMMDD = (date: Date = new Date()) => format(date, 'yyyy-MM-dd');
	const toDDMMYYYY = (date: Date = new Date()) => format(date, 'dd/MM/yyyy');
	const toMMMMDDYYYY = (date: Date = new Date()) => format(date, 'MMMM dd, yyyy');
	const toYYYYMMDDHHMMSS = (date: Date = new Date()) => format(date, 'yyyy/MM/dd HH:mm:ss');

	return {
		toYYYYMMDD,
		toDDMMYYYY,
		toMMMMDDYYYY,
		toYYYYMMDDHHMMSS
	};
};

export const dateHelper = createDateHelper();
