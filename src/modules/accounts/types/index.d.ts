interface AuthRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string;
        email: string;
    };
    token: string;
}


interface IUpdateUser {
    user_id: string;
    avatar_file: any;
}