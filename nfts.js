// create a variable to hold your NFT's
let nfts = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata,
// and store it in the variable above.
function mintNFT(_name, _description, _image, _size) {
  const nft = {
    "name": _name,
    "description": _description,
    "image": _image,
    "size": _size
  };
  nfts.push(nft);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
  for (let i = 0; i < nfts.length; i++) {
    const nft = nfts[i];
    console.log("Name: " + nft.name);
    console.log("Description: " + nft.description);
    console.log("Image: " + nft.image);
    console.log("Size: " + nft.size);
    console.log("--------------------");
  }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
  console.log("Total Supply: " + nfts.length);
}

// call your functions below this line

// Mint some NFTs
mintNFT("Malima", "Description of NFT 1", "image1.jpg", "Large");
mintNFT("Seun", "Description of NFT 2", "image2.jpg", "Small");
mintNFT("Adamu", "Description of NFT 3", "image3.jpg", "Medium");
mintNFT("Bala", "Description of NFT 4", "image3.jpg", "Small-Medium");

// List all NFTs
listNFTs();

// Get the total supply
getTotalSupply();
