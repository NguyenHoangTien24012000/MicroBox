class BoxRecomend{
    html
    css
    constructor(html,css){
        this.html = html
        this.css = css
    }
    render(){
        console.log("html", this.html)
        console.log("css", this.css)
    }
}

module.exports = BoxRecomend;