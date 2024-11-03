import { User } from "./user";

export interface LoginResponse {
    accessToken: string;
    user: User;
}

export interface LoginRequest {
    email: string;
    password: string;
}