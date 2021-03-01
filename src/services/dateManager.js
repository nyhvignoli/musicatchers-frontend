import dayjs from 'dayjs';

export const dateToString = (date) => dayjs(date).format('DD/MM/YYYY');