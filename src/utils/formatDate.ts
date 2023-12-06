import { format } from 'date-fns';

export const formatDate = (time: string) => format(new Date(time), 'MMMM d, yyyy');
