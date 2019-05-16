import React from "react";
import Card from "./Card";

class Game extends React.Component {
    constructor(props){
        super(props)
            this.state = {
                images: [
                            "https://apal.org.au/wp-content/uploads/2016/05/Red-Delicious.jpg",
                            "https://target.scene7.com/is/image/Target/GUEST_f5d0cfc3-9d02-4ee0-a6c6-ed5dc09971d1?wid=488&hei=488&fmt=pjpeg",
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ahiNcFCVAfG2iDBn0Ye9oPGw5wM8FoCZNq2s-0_dQNxZiTP6vw",
                            "https://i5.walmartimages.ca/images/Large/855/1_r/6000191268551_R.jpg",
                            "https://target.scene7.com/is/image/Target/GUEST_2a6eed58-0050-498c-874f-b7c0b95d7139?wid=488&hei=488&fmt=pjpeg",
                            "https://images-na.ssl-images-amazon.com/images/I/51TcdS9z2fL._SY300_QL70_.jpg",
                            "https://nadijeti.com/wp-content/uploads/2012/12/nar-voce.jpg",
                            "https://www.restoranibeograd.com/storage/news/interior/296/papaja.jpg"
                        ],
                        pair : [],
                        numOfHidden: 0
            
        }
    }


        componentDidMount(){

            let shuffled = this.shuffleCards(this.state.images);
            this.setState({
                images: shuffled
            })
        }



        shuffleCards = (arr) => {
            let newArr = arr.concat(arr);
            let currentI = newArr.length;
            let tempVal;
            let randomIndex;

            while(currentI > 0){
                randomIndex = Math.floor(Math.random() * currentI);
                currentI--;

                tempVal = newArr[currentI];
                newArr[currentI] = newArr[randomIndex];
                newArr[randomIndex] = tempVal;
            }
                return newArr
        }

        handleClick = (e) => {
            let element = e.target;
            element.classList.add("reveal");
            this.state.pair.push(element.style.backgroundImage);

            let pairs = document.querySelectorAll(".reveal");
if(this.state.pair.length === 2 && this.state.pair[0] === this.state.pair[1]){
    setTimeout(() => {
        pairs.forEach((e) => {
            e.classList.add("hide");
            e.classList.remove("reveal");
        });
        this.setState({
            pair: [],
            numOfHidden: this.state.numOfHidden + 2
        })
    }, 1000);
   
}else if(this.state.pair.length === 2 && this.state.pair[0] !== this.state.pair[1]){
       setTimeout(() => {
        pairs.forEach(elem => {
            elem.classList.remove("reveal");      
        });
        this.setState({
            pair: [],
        })
       }, 1000)

}
        }

        winner = () => {
        
                if(this.state.numOfHidden === 16){
                  
                    // let rootEl = document.querySelector(".root")
                    // let newMessage = document.createElement("h2");
                    // newMessage.innerHTML = "your play time is: " + minutes + " minutes";
                    // rootEl.appendChild(newMessage)
                    return (
                        <>
                        <h1 className="text-center message">Congratulations!</h1>
                        </>
                    )
                }
                
            }
                

            Reload = () => {
                    window.location.reload()
            }
        




        render (){
            return(
                <>
                <h1 className="text-center">Memory game</h1>
                {this.winner()}
                <div className="grid-container">
                        {this.state.images.map((element, i) => {
                            return <Card value={element} key={i}  handleClick={this.handleClick}/>
                        })}

                </div>
                <button onClick={this.Reload}>Play again</button>
                </>
            )
        }


}

export default Game; 