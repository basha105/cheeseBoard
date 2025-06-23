import appenzeller from './images/appenzeller.jpg';
import asiago from './images/asiago.jpg';
import beaufort from './images/beaufort.jpg';
import brie from './images/brie.jpg';
import burrata from './images/burrata.jpg';
import caciocavallo from './images/caciocavallo.jpg';
import cambozola from './images/cambozola.jpg';
import camembert from './images/camembert.jpg';
import comte from './images/comte.jpg';
import edam from './images/edam.jpg';
import emmental from './images/emmental.jpg';
import feta from './images/feta.jpg';
import fontina from './images/fontina.jpg';
import gorgonzola from './images/gorgonzola.jpg';
import gouda from './images/gouda.jpg';
import granapadano from './images/granapadano.jpg';
import graviera from './images/graviera.jpg';
import gruyere from './images/gruyere.jpg';
import halloumi from './images/halloumi.jpg';
import kasseri from './images/kasseri.jpg';
import kefalograviera from './images/kefalograviera.jpg';
import kefalotyri from './images/kefalotyri.jpg';
import manouri from './images/manouri.jpg';
import mascarpone from './images/mascarpone.jpg';
import morbier from './images/morbier.jpg';
import mozzarella from './images/mozzarella.jpg';
import parmesan from './images/parmesan.jpg'
import pecorinoromano from './images/pecorino-romano.jpg';
import provolone from './images/provolone.jpg';
import ragusano from './images/ragusano.jpg';
import reblochon from './images/reblochon.jpg';
import roquefort from './images/roquefort.jpg';
import stilton from './images/stilton.jpg';
import taleggio from './images/taleggio.jpg';



const imageURL = {
    appenzeller,
    asiago,
    beaufort,
    brie,
    burrata,
    caciocavallo,
    cambozola,
    camembert,
    comte,
    edam,
    emmental,
    feta,
    fontina,
    gorgonzola,
    gouda,
    granapadano,
    graviera,
    gruyere,
    halloumi,
    kasseri,
    kefalograviera,
    kefalotyri,
    manouri,
    mascarpone,
    morbier,
    mozzarella,
    parmesan,
    pecorinoromano,
    provolone,
    ragusano,
    reblochon,
    roquefort,
    stilton,
    taleggio
}

export default function getImage(name) {
    return imageURL[name];
}