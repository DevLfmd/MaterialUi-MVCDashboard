import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { TextFieldProps } from './types';
import { getErrorMessage } from './functions';

const PasswordField: React.FC<TextFieldProps> = ({ 
    error,
    fullWidth,
    helperText,
    label,
    name,
    onBlur,
    onChange,
    value,
    variant,
    ssrValidation,
    className
}) => {
    const [type, setType] = React.useState<string>('password');
    return (
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
            className={className}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <VpnKeyIcon color="action"  />
                    </InputAdornment>
                ),
                endAdornment: (
                    <div 
                        onClick={() => {
                            if(type === 'password') setType('text')
                            else if(type === 'text') setType('password')
                        }} 
                        className="cursor-pointer"
                    >
                        <InputAdornment position="start">
                            {type === 'password' ? (
                                <VisibilityIcon  color="action" />
                            ) : (
                                <VisibilityOffIcon color="action" />
                            )}
                        </InputAdornment>
                    </div>
                )
            }}
        />
    );
};

export default PasswordField;