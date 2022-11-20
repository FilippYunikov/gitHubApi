export interface IUser {
    items: [
        {
            id: number;
            avatar_url: string;
            login: string;
            html_url: string
        }
    ]
}

export interface ICurrentUser {
    avatar_url: string;
    bio: string;
    name: string;
}