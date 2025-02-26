export const getSveltosURLRedirection =  (token: string | undefined) => {
    if(token)
        return `${process.env.NEXT_PUBLIC_SVELTOS_URL}/sveltos/clusters?auth=${encodeURIComponent(token)}`;

    return ''
};

