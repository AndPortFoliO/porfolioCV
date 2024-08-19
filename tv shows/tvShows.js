
//https://api.tvmaze.com/search/shows?q=girls
const searchLabel = document.querySelector('#searchLabel');
const moveSellection = document.querySelector('.moveSellection');
const movieInfoData = document.querySelector('.movieInfoData');

//let inputSearch = document.querySelector('#inputSearch');
let imgs;

class UserSelect{
    constructor(userInput = Math.floor( Math.random * 10)){
        this.userInput = userInput;
        this.fetchData();

        this.imgUrl = {}; 
        this.score = {}; 
        this.genres = {};
        this.language = {}; 
        this.Name = {}; 
        this.summary = {};

        this.dataObjects;
        
    } 

    async userKeyWord(){
        let self = this;
        searchLabel.addEventListener('click',async function (){
            self.deleteCurrentImgSet();
            self.deleteCurrentMovieData();

            
            let inputSearch = document.querySelector('#inputSearch');
            self.userInput = inputSearch.value;
            console.log("fuction userKeyWord");
            console.log(`userInput ${self.userInput}`);
            await self.fetchData();
            await self.addFilmsPicsAndData();
            inputSearch.value = "";
            await self.displayInfo();


        })


    }

    displayInfo(){
        const {Name,imgUrl,score,genres,language,summary}=this;
        let self = this;
        let imgs = document.querySelectorAll('img');
        for(let img of imgs){

            img.addEventListener('click',async function(){
                self.deleteCurrentMovieData();

                console.log("the new movie data");
                let i = img.id.slice(6);
 
                let p0 = document.createElement('p');
                let p1 = document.createElement('p');
                let p2 = document.createElement('p');
                let p3 = document.createElement('p');
                let p4 = document.createElement('p');
                let p5 = document.createElement('p');

                p1.innerText  = "Title : " + `${Name[`#title${i}`]}`;
                p2.innerText  = `${imgUrl[`#title${i}`]}`;
                console.log(`name. is ${Name[`#title${i}`]}`);
                console.log(`name. is ${Name[`#title${i}`]}`);

                console.log('imgUrl.value',imgUrl[`#title${i}`]);

                p3.innerText  = `${score[`#title${i}`]}`;
                p4.innerText  = `${genres[`#title${i}`]}`;
                console.log("the score is ",score[`#title${i}`],"%");
                console.log(genres[`#title${i}`]);

                p5.innerText  ="Language : "+ `${language[`#title${i}`]}`;
                p0.innerHTML  = `${summary[`#title${i}`]}`;
                console.log(language[`#title${i}`]);
                console.log("summary is ", summary[`#title${i}`]);
                
                movieInfoData.append( p1,p0 , p3, p4, p5, p2);

            })
        }
    }
    
    deleteCurrentMovieData (){
            let ps = document.querySelectorAll('p');
            ps.forEach((element) => element.remove());
        
    } 

    deleteCurrentImgSet (){
        let imgs = document.querySelectorAll('img');
        imgs.forEach((element) => element.remove());
    } 


    fetchData = async function(){
        try{
            const resolution = await fetch(`https://api.tvmaze.com/search/shows?q=${this.userInput}`);
            let data = await resolution.json();
            console.log("fetchData");
            console.log(data);
            this.dataObjects = data;
        }
        catch(e){
            console.log("error :",e);
        }
    }

    addFilmsPicsAndData (){
        let i;
        let img;
        let id = `#title${i}`;

        try {
            console.log(`add filsm `);
            let splitMovies = [...this.dataObjects];

            for ( i=0; i<splitMovies.length;i++){
                img = document.createElement("img");

                
                img.src = splitMovies[i].show.image.medium;
                img.alt = "img not found";
                img.id = `#title${i}`;
                moveSellection.append(img);

                console.log("new movie data");   
             
                this.Name[`#title${i}`] = splitMovies[i].show.name;
                console.log(`this.name.value is ${this.Name[`#title${i}`]}`);

                this.imgUrl[`#title${i}`] = splitMovies[i].show.image.medium;
                console.log('imgUrl.value',this.imgUrl[`#title${i}`]);


                this.score[`#title${i}`] = Math.floor((splitMovies[i].score)*100);
                console.log("the score is ",this.score[`#title${i}`],"%");


                this.genres[`#title${i}`] = splitMovies[i].show.genres;
                console.log(this.genres);

  
                this.language[`#title${i}`] = splitMovies[i].show.language;
                console.log(this.language);

                this.summary[`#title${i}`] = splitMovies[i].show.summary.slice(3,-5);
                console.log("summary is ",this.summary[`#title${i}`]);
            }
        } 
        catch (error) {
            console.log("error :",error);

        }
    }



}

window.addEventListener('load', async function (){
    console.log('The page has fully loaded');
    const user = new UserSelect();
    user.userKeyWord();
});