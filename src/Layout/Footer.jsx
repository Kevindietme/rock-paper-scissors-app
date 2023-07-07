export default function Footer(){ 
    const year = new Date().getFullYear();
    
    return(
    <footer>
        <p>&copy; {year}</p>
        <p><a href="https://github.com">GitHub</a></p>
    </footer>
    )
}