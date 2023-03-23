const taySwf = {
    name: "Taylor Swift",
    album: "Pick one",
    setAlbum: function (album){
        this.album = album;
    },
    getAlbum: function (){
        console.log ("The album is: " + this.album);
    }
}

console.log (taySwf.album);
taySwf.setAlbum ("Evermore");
console.log (taySwf.album);
taySwf.getAlbum ();