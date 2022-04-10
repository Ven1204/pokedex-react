const fire = "conic-gradient(#ff0000, #7c0909, #9d0000, #f04949, #d00f0f, #670d0d, #ff0000)"
const water = "conic-gradient(#0016ff, #142065, #2a42c3, #7e8fed, #1b5c90, #4952ba, #0016ff)"
const electric = "conic-gradient(#ffc107, #ff9800, #edae51, #ff9800, #e4c494, #be8024, #ffbf00)"
const psychic = "conic-gradient(#ea00ff, #44004a, #4c1051, #d66be0, #511e56, #53035a, #ea00ff)"
const flying = "conic-gradient(#a1f3ec, #d3fffb, #aed3cf, #14b1a4, #e6eded, #4fc5bb, #a1f3ec)"
const normal = "conic-gradient(#fdf3d3, #8b846c, #c5c5c5, #afaa9b, #f6df93, #f2f2f2, #fdf3d3)"
const fighting = "conic-gradient(#ffd483, #c58f28, #f6e4c1, #e4a837, #ebd6ae, #c58f2a, #ffd483)"
const poison = "conic-gradient(#611380, #4a1f5c, #815892, #5e2775, #b385c5, #aa55cc, #611380)"
const ground = "conic-gradient(#bfac22, #4d492e, #969270, #675b00, #beb25b, #e9d85d, #bfac22)"
const rock = "conic-gradient(#474026, #807a64, #3d392b, #aa9c66, #635c42, #aa9b64, #474026)"
const bug = "conic-gradient(#bddd6e, #576c23, #cbff4c, #7da124, #87a145, #97b350, #bddd6e)"
const ghost = "conic-gradient(#8e55a4, #52325f, #410853, #67606a, #664075, #636363, #8e55a4)"
const steel = "conic-gradient(#454545, #a1a1a1, #454545, #7e7575, #454545, #cec5c5, #454545)"
const grass = "conic-gradient(#3e9709, #79d741, #6db840, #46b106, #3e9709, #92d76a, #3e9709)"
const ice = "conic-gradient(#1995a1, #44eeff, #2b757c, #64b4bc, #367d84, #57aeb8, #1995a1)"
const dragon = "conic-gradient(#6c31ed, #cec5ff, #402a6c, #6124e7, #4713bc, #206ca8, #6c31ed)"
const dark = "conic-gradient(#2d221c, #535353, #3d3d3d, #2d221c, #67625f, #a89185, #2d221c)"
const fairy = "conic-gradient(#f87ea7, #e9c5d1, #b3315d, #f87ea7, #c73466, #dbdbdb, #f87ea7)"


export default function pokeBgColor(type) {
  switch (type) {
    case "fire":
      bgColor = "red";
      break;
    case "Fearless":
      bgColor = "green";
      break;
    default:
      bgColor = "orange";
      break;
  }

  return bgColor;
}
}
