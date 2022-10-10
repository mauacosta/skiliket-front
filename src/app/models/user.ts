export interface User {
    uid: string;
    email: string;
    firstname?: string;
    lastname?: string;
    address?: string;
    neighborhood?: string;
    zipcode?: string;
    emailVerified: boolean;
}
