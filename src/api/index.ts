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
    getFollows
}

export default apis;