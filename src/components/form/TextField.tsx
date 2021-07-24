import React from 'react';
import { TextField } from '@material-ui/core';
import { TextFieldProps } from './types';
import { getErrorMessage } from './functions';

const TextInput: React.FC<TextFieldProps> = ({
    error,
    fullWidth,
    helperText,
    label,
    name,
    onBlur,
    onChange,
    type,
    value,
    variant,
    ssrValidation,
    InputProps,
    className
}) => (
    <TextField
        error={error || ssrValidation.filter( (error) => error?.field === name ).length > 0}
        fullWidth={fullWidth}
        helperText={helperText || getErrorMessage(ssrValidation, name)}
        label={label}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        type={type}
        value={value}
        variant={variant}
        InputProps={InputProps}
        className={className}
    />
);

export default TextInput;