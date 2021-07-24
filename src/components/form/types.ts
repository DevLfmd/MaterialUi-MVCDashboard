export type SsrValidation = { field: string; message: string; }[];

export type TextFieldProps = {
    error: boolean;
    fullWidth: boolean;
    helperText: string | false | undefined;
    label: string;
    name: string;
    onBlur?: (val: any) => void;
    onChange?: (val: any) => void;
    type?: string;
    value: any;
    variant: "standard" | "filled" | "outlined" | undefined;
    ssrValidation: SsrValidation;
    InputProps?: any;
    className?: string;
};
