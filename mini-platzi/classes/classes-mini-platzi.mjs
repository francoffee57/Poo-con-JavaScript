//Clases de los cursos
export class classesMiniPlatzi {
    constructor({
        nameClasse,
        resources = undefined,
        videoID,
        moodPlay = false 
    })
    {
        this.nameClasse = nameClasse;
        this.resources = resources;
        this.videoID = videoID;
        this.moodPlay = moodPlay;
    }
    play(){
        if(!this.moodPlay) {
            this.moodPlay = true
            videoPlay(this.videoID)
        }
        else{
            this.moodPlay = false
            videoStop(this.videoID)
        }
    }
}

function videoPlay(id) {
    const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
    console.log("Se está reproduciendo desde la url " + urlSecreta);
  }
  function videoStop(id) {
    const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
    console.log("Pausamos la url " + urlSecreta);
  }
  
