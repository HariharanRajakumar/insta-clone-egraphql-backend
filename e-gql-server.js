import mongoose from "mongoose";
import Cards from "./dbCards.js";
import Cors from "cors";

import express from "express";
import pkg from "graphql";
import pkg2 from "e-graphql-server";

const { buildSchema } = pkg;
const { graphqlHTTP } = pkg2;
import { data } from "./mock.js";
//
//
const port = process.env.PORT || 8001;
const connection_url =
  "mongodb+srv://admin:Nq8WMZcQLCrkchWT@cluster0.bhlga.mongodb.net/?retryWrites=true&w=majority";
//
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//
var schema = buildSchema(`
    type Query{
        story:[Story!]!,
        likes(id: String): [Likes!]!
        posts: [Posts]
    }
    type Story{
        username: String!,
        caption: String!,
        imageUrl: String!,
        avatarUrl: String!,
        _id: String!
    }
    type Likes{
      user_name: String,
      avatar: String
    }
    type Posts{
     id: Int,
     first_name: String,
     last_name: String,
     email: String,
     gender: String,
     ip_address: String,
     department: String,
     dob: String,
     city: String,
     state: String,
     country: String,
     country_code: String,
    }
`);

var root = {
  story: () =>  Cards.find(),
  likes: (root) => {
    return [
      {
        user_name: "Leodora Ragbourn",
        avatar: "https://robohash.org/autearumfacilis.png?size=50x50&set=set1",
      },
      {
        user_name: "Myriam Happert",
        avatar: "https://robohash.org/evenietvelfugit.png?size=50x50&set=set1",
      },
      {
        user_name: "Udell Fawdry",
        avatar:
          "https://robohash.org/omnisvoluptasnisi.png?size=50x50&set=set1",
      },
      {
        user_name: "Luise Amort",
        avatar:
          "https://robohash.org/temporalaudantiumnesciunt.png?size=50x50&set=set1",
      },
      {
        user_name: "Rose Swiffen",
        avatar: "https://robohash.org/etdolorest.png?size=50x50&set=set1",
      },
      {
        user_name: "Trace Paling",
        avatar:
          "https://robohash.org/inventorebeataeaut.png?size=50x50&set=set1",
      },
      {
        user_name: "Ase Chifney",
        avatar: "https://robohash.org/eamaximeporro.png?size=50x50&set=set1",
      },
      {
        user_name: "Lucretia Trewartha",
        avatar: "https://robohash.org/etconsequaturet.png?size=50x50&set=set1",
      },
      {
        user_name: "Earl Nathon",
        avatar:
          "https://robohash.org/quamassumendaomnis.png?size=50x50&set=set1",
      },
      {
        user_name: "Nickie Demougeot",
        avatar:
          "https://robohash.org/voluptatemmagnamexcepturi.png?size=50x50&set=set1",
      },
      {
        user_name: "Fletcher Storrock",
        avatar:
          "https://robohash.org/ipsamexplicaboquis.png?size=50x50&set=set1",
      },
      {
        user_name: "Clotilda Dimnage",
        avatar: "https://robohash.org/culpasitnisi.png?size=50x50&set=set1",
      },
      {
        user_name: "Gina Champneys",
        avatar: "https://robohash.org/aliquidquosit.png?size=50x50&set=set1",
      },
      {
        user_name: "Bari Prandin",
        avatar: "https://robohash.org/ipsamfugitet.png?size=50x50&set=set1",
      },
      {
        user_name: "Karoline Goodlet",
        avatar: "https://robohash.org/nihilveniamnatus.png?size=50x50&set=set1",
      },
      {
        user_name: "Karyl Pollen",
        avatar:
          "https://robohash.org/harumautemdelectus.png?size=50x50&set=set1",
      },
      {
        user_name: "Darline Covey",
        avatar:
          "https://robohash.org/autempraesentiumodit.png?size=50x50&set=set1",
      },
      {
        user_name: "Herby Timmis",
        avatar:
          "https://robohash.org/nulladistinctiovoluptas.png?size=50x50&set=set1",
      },
      {
        user_name: "Ronnica Zamorano",
        avatar: "https://robohash.org/abetsint.png?size=50x50&set=set1",
      },
      {
        user_name: "Ketti Keech",
        avatar: "https://robohash.org/laudantiumvelet.png?size=50x50&set=set1",
      },
      {
        user_name: "Kimmy Stapels",
        avatar: "https://robohash.org/nonaliaseos.png?size=50x50&set=set1",
      },
      {
        user_name: "Gabbie Crosetti",
        avatar: "https://robohash.org/velitutipsam.png?size=50x50&set=set1",
      },
      {
        user_name: "Hercule Medlin",
        avatar: "https://robohash.org/etconsequatursed.png?size=50x50&set=set1",
      },
      {
        user_name: "Hermy Kuhn",
        avatar:
          "https://robohash.org/repellatipsumducimus.png?size=50x50&set=set1",
      },
      {
        user_name: "Aleksandr Largen",
        avatar: "https://robohash.org/nonveroea.png?size=50x50&set=set1",
      },
      {
        user_name: "Caleb Domel",
        avatar: "https://robohash.org/rerumtemporaeum.png?size=50x50&set=set1",
      },
      {
        user_name: "Randy Zellner",
        avatar: "https://robohash.org/voluptasquasaut.png?size=50x50&set=set1",
      },
      {
        user_name: "Abbie Widocks",
        avatar: "https://robohash.org/namquasiqui.png?size=50x50&set=set1",
      },
      {
        user_name: "Joshua Kirkam",
        avatar: "https://robohash.org/sequiharumoptio.png?size=50x50&set=set1",
      },
      {
        user_name: "Daphne Meake",
        avatar:
          "https://robohash.org/solutaquocupiditate.png?size=50x50&set=set1",
      },
      {
        user_name: "Danie Christall",
        avatar: "https://robohash.org/etnumquamea.png?size=50x50&set=set1",
      },
      {
        user_name: "Jada Carne",
        avatar:
          "https://robohash.org/suntestrepellendus.png?size=50x50&set=set1",
      },
      {
        user_name: "April Sivior",
        avatar:
          "https://robohash.org/voluptasdignissimosqui.png?size=50x50&set=set1",
      },
      {
        user_name: "Jeniffer Terbeek",
        avatar:
          "https://robohash.org/consequatureaquod.png?size=50x50&set=set1",
      },
      {
        user_name: "Mychal Behninck",
        avatar:
          "https://robohash.org/exercitationemsiteum.png?size=50x50&set=set1",
      },
      {
        user_name: "Giusto Callen",
        avatar: "https://robohash.org/etdelenitiamet.png?size=50x50&set=set1",
      },
      {
        user_name: "Alvy Malcher",
        avatar: "https://robohash.org/sapientesitnemo.png?size=50x50&set=set1",
      },
      {
        user_name: "Bail Inkle",
        avatar: "https://robohash.org/addoloresab.png?size=50x50&set=set1",
      },
      {
        user_name: "Elsey Varfalameev",
        avatar:
          "https://robohash.org/perspiciatisautminus.png?size=50x50&set=set1",
      },
      {
        user_name: "Mufi Carding",
        avatar: "https://robohash.org/autnonomnis.png?size=50x50&set=set1",
      },
      {
        user_name: "Jeniffer Lapslie",
        avatar: "https://robohash.org/etiurenatus.png?size=50x50&set=set1",
      },
      {
        user_name: "Ron Bligh",
        avatar:
          "https://robohash.org/quiiustolaudantium.png?size=50x50&set=set1",
      },
      {
        user_name: "Nomi Cesconi",
        avatar: "https://robohash.org/idimpeditnatus.png?size=50x50&set=set1",
      },
      {
        user_name: "Hanni Mendoza",
        avatar:
          "https://robohash.org/porromolestiaeconsectetur.png?size=50x50&set=set1",
      },
      {
        user_name: "Aurora Cawthera",
        avatar: "https://robohash.org/etisteet.png?size=50x50&set=set1",
      },
      {
        user_name: "Chelsie Minchinton",
        avatar: "https://robohash.org/placeatnemoillum.png?size=50x50&set=set1",
      },
      {
        user_name: "Jarrad Jerzyk",
        avatar:
          "https://robohash.org/dolorempraesentiumab.png?size=50x50&set=set1",
      },
      {
        user_name: "Steve Maccaig",
        avatar: "https://robohash.org/remetrepudiandae.png?size=50x50&set=set1",
      },
      {
        user_name: "Stevana Vernay",
        avatar: "https://robohash.org/doloremminimaeum.png?size=50x50&set=set1",
      },
      {
        user_name: "Ingeborg Mead",
        avatar:
          "https://robohash.org/doloremquerepellatneque.png?size=50x50&set=set1",
      },
      {
        user_name: "Adriana Newlands",
        avatar:
          "https://robohash.org/vitaeaperiamvoluptas.png?size=50x50&set=set1",
      },
      {
        user_name: "Selena Yukhin",
        avatar: "https://robohash.org/aundequi.png?size=50x50&set=set1",
      },
      {
        user_name: "Haleigh Forsdyke",
        avatar: "https://robohash.org/ducimusinvelit.png?size=50x50&set=set1",
      },
      {
        user_name: "Jeni Pydcock",
        avatar:
          "https://robohash.org/adipiscirepudiandaequo.png?size=50x50&set=set1",
      },
      {
        user_name: "Barnaby McTerrelly",
        avatar: "https://robohash.org/aettemporibus.png?size=50x50&set=set1",
      },
      {
        user_name: "Karylin Bachnic",
        avatar:
          "https://robohash.org/molestiaevitaevoluptatem.png?size=50x50&set=set1",
      },
      {
        user_name: "Martyn Christal",
        avatar: "https://robohash.org/natusaliquamvel.png?size=50x50&set=set1",
      },
      {
        user_name: "Hunt Loosley",
        avatar: "https://robohash.org/aliasautet.png?size=50x50&set=set1",
      },
      {
        user_name: "Freda Welberry",
        avatar: "https://robohash.org/eatenetursunt.png?size=50x50&set=set1",
      },
      {
        user_name: "Vere Snuggs",
        avatar: "https://robohash.org/teneturnullased.png?size=50x50&set=set1",
      },
      {
        user_name: "Darill Leydon",
        avatar:
          "https://robohash.org/evenietetmolestiae.png?size=50x50&set=set1",
      },
      {
        user_name: "Berri Tunn",
        avatar:
          "https://robohash.org/officiisteneturnihil.png?size=50x50&set=set1",
      },
      {
        user_name: "Izak Rumble",
        avatar: "https://robohash.org/estnonquia.png?size=50x50&set=set1",
      },
      {
        user_name: "Gottfried Surby",
        avatar:
          "https://robohash.org/aspernatursuntnesciunt.png?size=50x50&set=set1",
      },
      {
        user_name: "Haskell Riccardo",
        avatar: "https://robohash.org/ullamatinventore.png?size=50x50&set=set1",
      },
      {
        user_name: "Afton Hendron",
        avatar:
          "https://robohash.org/oditrerumdelectus.png?size=50x50&set=set1",
      },
      {
        user_name: "Valdemar Sivier",
        avatar: "https://robohash.org/etveroatque.png?size=50x50&set=set1",
      },
      {
        user_name: "Merilyn Dwelly",
        avatar:
          "https://robohash.org/quiexercitationemdeserunt.png?size=50x50&set=set1",
      },
      {
        user_name: "Marilyn Youll",
        avatar:
          "https://robohash.org/molestiaequasiomnis.png?size=50x50&set=set1",
      },
      {
        user_name: "Randall Scholl",
        avatar:
          "https://robohash.org/numquamaliquidest.png?size=50x50&set=set1",
      },
      {
        user_name: "Blisse Eunson",
        avatar:
          "https://robohash.org/corruptiveromolestiae.png?size=50x50&set=set1",
      },
      {
        user_name: "Roberto Bovingdon",
        avatar:
          "https://robohash.org/remdoloresaccusamus.png?size=50x50&set=set1",
      },
      {
        user_name: "Guntar Gowry",
        avatar: "https://robohash.org/magnivoluptaseum.png?size=50x50&set=set1",
      },
      {
        user_name: "Benny Bagge",
        avatar: "https://robohash.org/magniquiaenim.png?size=50x50&set=set1",
      },
      {
        user_name: "Welsh Arkcoll",
        avatar: "https://robohash.org/eoseaquedolorem.png?size=50x50&set=set1",
      },
      {
        user_name: "Norene Dingwall",
        avatar: "https://robohash.org/dolornumquamad.png?size=50x50&set=set1",
      },
      {
        user_name: "Chet Biggans",
        avatar:
          "https://robohash.org/quisdoloredolores.png?size=50x50&set=set1",
      },
      {
        user_name: "Ynes Daffey",
        avatar: "https://robohash.org/sedassumendaquas.png?size=50x50&set=set1",
      },
      {
        user_name: "Syman Farley",
        avatar: "https://robohash.org/estiddolores.png?size=50x50&set=set1",
      },
      {
        user_name: "Jaclyn McIlriach",
        avatar:
          "https://robohash.org/autprovidentlabore.png?size=50x50&set=set1",
      },
      {
        user_name: "Flory Dolder",
        avatar:
          "https://robohash.org/corporisliberoarchitecto.png?size=50x50&set=set1",
      },
      {
        user_name: "Worden Jemmison",
        avatar: "https://robohash.org/aliquidmaioresut.png?size=50x50&set=set1",
      },
      {
        user_name: "Thomas Drawmer",
        avatar: "https://robohash.org/atquequiquis.png?size=50x50&set=set1",
      },
      {
        user_name: "Juanita Reims",
        avatar: "https://robohash.org/utquisest.png?size=50x50&set=set1",
      },
      {
        user_name: "Merry Sabbin",
        avatar:
          "https://robohash.org/molestiaseligendialiquam.png?size=50x50&set=set1",
      },
      {
        user_name: "Evvy Bordessa",
        avatar: "https://robohash.org/illoaliaseos.png?size=50x50&set=set1",
      },
      {
        user_name: "Farlie O'Kielt",
        avatar:
          "https://robohash.org/similiqueexplicabomaiores.png?size=50x50&set=set1",
      },
      {
        user_name: "Grete Ourry",
        avatar:
          "https://robohash.org/iustodoloreminventore.png?size=50x50&set=set1",
      },
      {
        user_name: "Nicky Sagar",
        avatar:
          "https://robohash.org/accusamusnesciuntrepellendus.png?size=50x50&set=set1",
      },
      {
        user_name: "Kele Leer",
        avatar: "https://robohash.org/quirepellataut.png?size=50x50&set=set1",
      },
      {
        user_name: "Abbey Raisher",
        avatar: "https://robohash.org/estidvoluptas.png?size=50x50&set=set1",
      },
      {
        user_name: "Vassili Sheara",
        avatar:
          "https://robohash.org/voluptatibusquisquamasperiores.png?size=50x50&set=set1",
      },
      {
        user_name: "Letti Geffe",
        avatar:
          "https://robohash.org/blanditiisporrolaborum.png?size=50x50&set=set1",
      },
      {
        user_name: "Berkly Pettingill",
        avatar:
          "https://robohash.org/pariaturperferendisasperiores.png?size=50x50&set=set1",
      },
      {
        user_name: "Drusie Grout",
        avatar:
          "https://robohash.org/necessitatibusnemorerum.png?size=50x50&set=set1",
      },
      {
        user_name: "Leese O'Garmen",
        avatar: "https://robohash.org/delenitiquiaiste.png?size=50x50&set=set1",
      },
      {
        user_name: "Nicolais Sibray",
        avatar: "https://robohash.org/minimasitut.png?size=50x50&set=set1",
      },
      {
        user_name: "Esme Wike",
        avatar:
          "https://robohash.org/etquianecessitatibus.png?size=50x50&set=set1",
      },
      {
        user_name: "Antonin Gollard",
        avatar:
          "https://robohash.org/magnitemporealias.png?size=50x50&set=set1",
      },
      {
        user_name: "Bink Archibald",
        avatar:
          "https://robohash.org/omnisdignissimosat.png?size=50x50&set=set1",
      },
    ];
  },
  posts: () => data,
};

var app = express();

app.use(Cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
app.listen(port);
console.log(`Running a GraphQL API server at http://localhost:${port}/graphql`);
