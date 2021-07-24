import { v4 as uuidv4 } from 'uuid';
import { users, User } from '../../__mocks__/users';

/**
 * Action de login
 * @param email - email do usuário
 * @param password - senha do usuário
 */
export const signIn = async (email: string, password: string): Promise<{ username: string, token: string }> => {
    const sign = users.filter((user: User) => user.email === email && user.password === password);
    if(sign.length > 0)
        return {
            username: sign[0].username,
            token: uuidv4()
        };
    return { username: '', token: '' };
};