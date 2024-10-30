import { User } from "./user";

export interface LoginResponse {
    accesToken: string;
    user: User;
}

interface LoginRequest {
    email: string;
    password: string;
}