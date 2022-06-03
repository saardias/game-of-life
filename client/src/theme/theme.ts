const baseColors = {
    primary: {
        main: 'var(--orange)',
        light: 'var(--orange-shade)'
    },
    secondery: {
        main: 'var(--neutral-30p)',
        light: 'var(--neutral-20p)'
    },
    error: {
        main: 'var(--red)',
        light: 'var(--red-shade)'
    },
    warning: {
        main: 'var(--orange)',
        light: 'var(--orange-shade)'
    },
    info: {
        main: 'var(--blue)',
        light: 'var(--blue-shade)'
    },
    success: {
        main: 'var(--green)',
        light: 'var(--green-shade)'
    },
};

export const palette = {
    ...baseColors,
    background: {
        light: 'var(--background-light)',
        dark: 'var(--background-dark)',
        disable: 'var(--neutral-20p)'
    },
    typography: {
        primary: 'var(--neutral-50p)',
        secondery: 'var(--neutral-40p)',
        info: 'var(--orange)',
        light: 'var(--neutral-20p)',
        error: 'var(--red-shade)'
    }
};

export const fonts = {
    size: {
        extraSmall: '26px',
        small: "30px",
        medium: "40px",
        large: "60px"
    }
}

export const typography = {
    varient: {
        h1: {
            fontSize: fonts.size.large,
            color: palette.typography.primary,
            fontWeight: 700
        },
        h2: {
            fontSize: fonts.size.medium,
            color: palette.typography.primary,
            fontWeight: 700
        },
        h3: {
            fontSize: fonts.size.small,
            color: palette.typography.primary,
            fontWeight: 700
        },
        body1: {
            fontSize: fonts.size.small,
            color: palette.typography.primary,
            fontWeight: 400
        },
        body2: {
            fontSize: fonts.size.extraSmall,
            color: palette.typography.primary,
            fontWeight: 400
        },
        button1: {
            fontSize: fonts.size.small,
            color: palette.typography.primary,
            fontWeight: 700
        },
        button2: {
            fontSize: fonts.size.small,
            color: palette.typography.secondery,
            fontWeight: 700
        },
        subtitle1: {
            fontSize: '16px',
            color: palette.typography.error,
            fontWeight: 400
        }
    }
}

const buttons = {
    size: {
        small: "64px",
        large: "104px"
    },
    varient: {
        primary: {
            backgroundColor: palette.primary.main,
            ...typography.varient.button1
        },
        secondery: {
            backgroundColor: palette.secondery.main,
            ...typography.varient.button2
        }
    }
}

const Theme = {
    palette,
    fonts,
    typography,
    buttons
};

export type ThemeType = typeof Theme;

export default Theme;