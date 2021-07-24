import { SsrValidation } from './types';

export const getErrorMessage = (ssrValidation: SsrValidation, fieldName: string) => {
    const errorMsg = ssrValidation.filter( (error: any) => error?.field === fieldName );
    return (errorMsg.length > 0) ? (errorMsg[0].message) : ('');
};