
import { useSelector } from "react-redux";
import ContactPageUI from "./ui";
import apis from "api";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";

// Your Google Calendar appointment/booking page.
// Replace the fallback with your calendar.app.google/... link,
// or set REACT_APP_CALENDAR_BOOKING_URL in your .env file.
const CALENDAR_BOOKING_URL =
    process.env.REACT_APP_CALENDAR_BOOKING_URL ||
    'https://calendar.app.google/h3rfJHZ1Bbfehpyn6';

const EMPTY_FORM = { name: '', email: '', message: '' };

export default function ContactPage() {

    const menu = useSelector((state: any) => state.app.menu);
    const [sending, setSending] = useState(false);
    const [form, setForm] = useState(EMPTY_FORM);
    const toast = useToast();

    const notify = (description: string, error: boolean) => {
        toast({
            title: 'Notification.',
            description,
            status: error ? 'warning' : 'success',
            duration: 9000,
            isClosable: true,
            position: 'top-right',
        });
    };

    const handleFormChange = (field: keyof typeof EMPTY_FORM, value: string) => {
        setForm(prev => ({ ...prev, [field]: value }));
    };

    const handleSendMessage = async () => {
        const name = form.name.trim();
        const email = form.email.trim();
        const message = form.message.trim();

        if (!name || !email || !message) {
            return notify('Please fill in your name, email and message.', true);
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return notify('Please enter a valid email address.', true);
        }

        setSending(true);
        const { message: description, error } = await apis.sendMessage({ name, email, message });
        setSending(false);

        notify(description, error);
        if (!error) {
            setForm(EMPTY_FORM);
        }
    };

    const bookMeeting = () => {
        window.open(CALENDAR_BOOKING_URL, '_blank', 'noopener,noreferrer');
    };

    return (
        <ContactPageUI
            menu={menu}
            form={form}
            sending={sending}
            handleFormChange={handleFormChange}
            handleSendMessage={handleSendMessage}
            bookMeeting={bookMeeting}
        />
    )
}
