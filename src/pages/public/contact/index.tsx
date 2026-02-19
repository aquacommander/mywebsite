
import { useSelector } from "react-redux";
import ContactPageUI from "./ui";
import apis from "api";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";
export default function ContactPage() {

    const menu = useSelector((state: any) => state.app.menu);
    const [loading, setLoading] = useState(false);
    const toast = useToast();

    const handleCopyText = (text: string) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                console.log('Text copied to clipboard');
            })
            .catch(err => {
                console.error('Error copying text: ', err);
            });

    };

    const followOcat = async () => {
        const isFollowed = localStorage.getItem('isFollowed');
        if (!!isFollowed) {
            return toast({
                title: 'Notification.',
                description: "You already followed me",
                status: 'warning',
                duration: 9000,
                isClosable: true,
                position: 'top-right',
            })
        }
        setLoading(true);
        const { message, error } = await apis.followOcat();
        setLoading(false);
        toast({
            title: 'Notification.',
            description: message,
            status: error ? 'warning' : 'success',
            duration: 9000,
            isClosable: true,
            position: 'top-right',
        })
        if (!error) {
            localStorage.setItem('isFollowed', 'true');
        }
    }

    return (
        <ContactPageUI
            menu={menu}
            handleCopyText={handleCopyText}
            followOcat={followOcat}
            loading={loading}
        />
    )
}