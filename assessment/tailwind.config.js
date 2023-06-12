/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            borderWidth: {
                '1': '1px',
                '2': '2px'
            },
            boxShadow: {
                'primary': "0px 1px 2px rgba(0, 0, 0, 0.05)"
            },
            height: {
                "20": "20px",
            },
            width: {
                "20": "20px",
            },
            maxWidth: {
                '830': '830px',
                '577': "577px",
                '513': '513px',
                '244': "244.5px"

            },
            colors: {
                'primary': "#F5F5F5",
                'secondary': "#DADEDF",
                'custom-blue': "#1597E4",
                'white': "#ffffff",
                'grey': "#7A7A7A",
                'dark': "#212121",
                'error': "#D86161",
                'black': "#000000",
                'secondaryBlack': "#212427",
                'lightGrey': "#E6E6E6",
                'grey3': "#D8D8D8"
            },
            borderRadius: {
                '10': '10px',
            },
        },
    },
    plugins: [],
}

