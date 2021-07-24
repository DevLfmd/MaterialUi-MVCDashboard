/**
 * Mock para controle de usuários
 */
export const users: Array<User> = [
    {
        username: 'AdminTec',
        email: 'digitec@outlook.com',
        password: '20211202' 
    }
];

/**
 * Interface do usuário
 */
export interface User {
    username: string;
    email: string;
    password: string;
};