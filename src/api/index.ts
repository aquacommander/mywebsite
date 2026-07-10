type FollowApiResponse = {
    message: string;
    error: boolean;
    follows?: number;
};

const REMOTE_API_BASE_URL = 'https://ocat8894.onrender.com';
const CUSTOM_API_BASE_URL = process.env.REACT_APP_FOLLOW_API_BASE_URL;
const API_BASE_URL = (CUSTOM_API_BASE_URL || REMOTE_API_BASE_URL).replace(/\/$/, '');

const isLocalhost = typeof window !== 'undefined'
    && /^(localhost|127\.0\.0\.1)$/i.test(window.location.hostname);

const shouldCallRemoteApi = (): boolean => {
    // Prevent CORS noise on local dev by default.
    if (isLocalhost) {
        return process.env.REACT_APP_ENABLE_REMOTE_FOLLOWS === 'true';
    }
    return true;
};

const requestFollowApi = async (path: '/api/follow' | '/api/get'): Promise<FollowApiResponse> => {
    if (!shouldCallRemoteApi()) {
        return {
            message: 'Follow API disabled in local development.',
            error: false,
            follows: 0,
        };
    }

    try {
        const res = await fetch(`${API_BASE_URL}${path}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const convertedRes = await res.json().catch(() => ({}));
        return {
            message: convertedRes.message || (res.ok ? 'Success' : 'Unable to process request.'),
            error: Boolean(convertedRes.error) || !res.ok,
            follows: typeof convertedRes.follows === 'number' ? convertedRes.follows : 0,
        };
    } catch {
        return {
            message: 'Follow service is currently unavailable.',
            error: true,
            follows: 0,
        };
    }
};

// --- Contact message (Web3Forms) ---------------------------------------
// Create a free access key at https://web3forms.com using luckybit0512@gmail.com
// as the destination inbox, then set REACT_APP_WEB3FORMS_KEY in your .env file.
const WEB3FORMS_ACCESS_KEY = process.env.REACT_APP_WEB3FORMS_KEY || '';
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

type SendMessagePayload = {
    name: string;
    email: string;
    message: string;
};

const sendMessage = async ({ name, email, message }: SendMessagePayload) => {
    if (!WEB3FORMS_ACCESS_KEY) {
        return {
            error: true,
            message: 'Message service is not configured yet. Please email me directly.',
        };
    }

    try {
        // Submit as URL-encoded form data (a CORS "simple" request) so the
        // browser does not fire a pre-flight OPTIONS that Web3Forms rejects.
        const body = new URLSearchParams({
            access_key: WEB3FORMS_ACCESS_KEY,
            subject: `New portfolio message from ${name}`,
            from_name: name,
            name,
            email,
            message,
            replyto: email,
        });

        const res = await fetch(WEB3FORMS_ENDPOINT, {
            method: 'POST',
            headers: { Accept: 'application/json' },
            body,
        });

        const data = await res.json().catch(() => ({} as any));
        const success = res.ok && Boolean(data.success);
        return {
            error: !success,
            message: success
                ? 'Thanks! Your message has been sent.'
                : (data.message || 'Unable to send your message. Please try again.'),
        };
    } catch {
        return {
            error: true,
            message: 'Message service is currently unavailable. Please try again later.',
        };
    }
};

const followOcat = async () => {
    const response = await requestFollowApi('/api/follow');
    return {
        message: response.message,
        error: response.error,
    };
};

const getFollows = async () => {
    const response = await requestFollowApi('/api/get');
    return {
        message: response.message,
        error: response.error,
        follows: response.follows || 0,
    };
};

const apis = {
    followOcat,
    getFollows,
    sendMessage
}

export default apis;