interface ICreateUserDTO {
    name: string;
    username: string;
    password: string;
    email: string;
    driver_licence: string;
    isAdmin: boolean;
    id?: string;
    avatar?: string;
}
