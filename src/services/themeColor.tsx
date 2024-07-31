const getColor = (theme: string) => {

    switch (theme) {
        case "light":
            return "white"
        case "dark":
            return "black"
        case "tailBlue":
            return "#508C9B"

    }
}
export {getColor}