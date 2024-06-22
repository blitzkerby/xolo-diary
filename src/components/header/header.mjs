const header = {
    path: "./src/images/icons/logo.png",
    alt : "xolo logo",
    id  : "logo",
};



const logoHTML = `
    <img 
            src=${header.path} 
            alt=${header.alt}
            id =${header.id}
        >
`;


export function loadHeader()
{
document.querySelector("header").innerHTML = `
    ${logoHTML}  
`;
}