import { format, isToday, subDays, isWithinInterval } from 'date-fns';

export const filterChats = (chats) => {
    const todayChats = chats.filter(chat => isToday(new Date(chat.date)));
    const last7DaysChats = chats.filter(chat =>
        isWithinInterval(new Date(chat.date), {
            start: subDays(new Date(), 7),
            end: new Date(),
        }) && !isToday(new Date(chat.date))
    );
    const olderChats = chats.filter(chat =>
        !isWithinInterval(new Date(chat.date), {
            start: subDays(new Date(), 7),
            end: new Date(),
        })
    );

    return { todayChats, last7DaysChats, olderChats };
};
