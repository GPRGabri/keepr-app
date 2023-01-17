const React = require("react");

const d = new Date();
let year = d.getFullYear();


function Footer(){
return <footer>
<p>Created by Gabriel Ribeiro.</p>
<p>Copyright © {year}</p>
</footer>
}

export default Footer;