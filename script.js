class Artist {
    constructor(name, title, genre, work) {
      this.name = name;
      this.title = title;
      this.genre = genre;
      this.work = work;
    }
  
    getTitle() {
        console.log(`${this.title} is by ${this.name}.`)
    }
  
    getGenre() {
        console.log(`${this.title} is in ${this.genre}`)
    }
    numberofWorks() {
        console.log(`${this.name} has made this number of ${this.work} songs!`)
        return this.work
    }
    addWork() {
        //this.work = this.work + 1
        //this.work += 1
        this.work++
    }
  }
  
  const myArtist= new Artist('Clayton Schiff', 'The Food Mess', 'distorted', 5);
  const myMusician = new Artist  ('Destroy Lonely', 'Honestly', 'rageplugg', 6);
  
  myMusician.getTitle() 
  myArtist.getGenre()  
  myMusician.numberofWorks()

  console.log(myMusician.work)
  