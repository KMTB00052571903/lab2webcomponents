class wide extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode: 'open'})
        this.shadowRoot.innerHTML = `

    <div class="articleWide">

        <div class="mainText">
            <h2 class="category">Categoria</h2>
            <h2 class="title">Titulo</h2>
        </div>

        <div class="nameRef">
            <div class="nameSmall">
                <div class="icon"></div>
                <h3>Name Lastname</h3>
            </div>
            <div class="date">
                <h4>1/1/1990</h4>
            </div>
         </div>
    </div>

       <style>
.articleWide{
    display: flex;
    width: 450px;
    height: 200px;
    background-color: #f4f0f0;
    flex-direction: column;
    border-radius: 10px;
    border-color: dimgray;
    border-width: 2px;
    border-style:solid;
    margin: 10px;
}

.nameRef{
    display: flex;

}

.nameSmall{
    font-size: 12px;
    padding: 5px;
    display: flex;
    width: 275px;
    height: auto;
    justify-content: space-evenly;
    align-items: center;
}

.icon{
    background-color: aqua;
    display: flex;
    height: 50px;
    width: 50px;
    border-radius: 100px;
}

.date{
    padding: 5px;
    display: flex;
    width: 275px;
    height: auto;
    justify-content: center;
    align-items: center;

    font: bold;
    font-family: 'Courier New', Courier, monospace;
    font-style: normal;
    color:rgb(73, 73, 73);
}

.title{
font: bold;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
font-style: normal;
}

.category{
    font: bold;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-style: normal;
    font-size: 12px;
    color:dimgray;


}

.mainText{
    display: flex;
    flex-direction: column;
    width: auto;
    align-items: center;

}

h3{
    font: bold;
    font-family: 'Courier New', Courier, monospace;
    font-style: normal;
    color:rgb(73, 73, 73);
}
   </style>
        `;
    }
}

export default wide