export interface LoginConfig {
    email: string;
    password: string;
}

export interface RegisterConfig {
    email: string,
    password: string,
    code: string
}

export interface SendCodeConfig {
    email: string
}