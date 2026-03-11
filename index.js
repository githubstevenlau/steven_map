"use strict";

async function initMap() {

    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    const map = new Map(document.getElementById('map'), {
        center: { lat: 51.41440159227802, lng: -0.007830720535929274 },
        zoom: 5,
        mapId: 'STEVEN_MAP',
    });

    const homeContentString =
        '<div id="content">' +
        '<h1 id="firstHeading" class="firstHeading">Home</h1>';

    const homeInfoWindow = new google.maps.InfoWindow({
        content: homeContentString,
        ariaLabel: "Home",
    });

    const homeMarker = new AdvancedMarkerElement({
        map,
        position: { lat: 51.41440159227802, lng: -0.007830720535929274 },
        title: "Home",
    });

    homeMarker.addListener("click", () => {
        homeInfoWindow.open({
            anchor: homeMarker,
            map,
        });
    });

    // Hong Kong
    const hongKong = { lat: 22.3193, lng: 114.1694 };

    const hongKongContentString =
        '<div id="content">' +
        '<h1 id="firstHeading" class="firstHeading">Hong Kong</h1>' +
        '<div id="bodyContent">Gina\'s wedding 16-18 May 2005</div>' +
        '</div>';

    const hongKongInfoWindow = new google.maps.InfoWindow({
        content: hongKongContentString,
        ariaLabel: "Hong Kong",
    });

    const hongKongMarker = new AdvancedMarkerElement({
        map,
        position: hongKong,
        title: "Hong Kong",
    });

    hongKongMarker.addListener("click", () => {
        hongKongInfoWindow.open({
            anchor: hongKongMarker,
            map,
        });
    });

    // Singapore
    const singapore = { lat: 1.3521, lng: 103.8198 };

    const singaporeContentString =
        '<div id="content">' +
        '<h1 id="firstHeading" class="firstHeading">Singapore</h1>' +
        '<div id="bodyContent">Visit Pamela with Mum and Simon</div>' +
        '</div>';

    const singaporeInfoWindow = new google.maps.InfoWindow({
        content: singaporeContentString,
        ariaLabel: "Singapore",
    });

    const singaporeMarker = new AdvancedMarkerElement({
        map,
        position: singapore,
        title: "Singapore",
    });

    singaporeMarker.addListener("click", () => {
        singaporeInfoWindow.open({
            anchor: singaporeMarker,
            map,
        });
    });

    // Jakarta, Indonesia
    const jakarta = { lat: -6.1750, lng: 106.8266 };

    const jakartaContentString =
        '<div id="content">' +
        '<h1 id="firstHeading" class="firstHeading">Jakarta, Indonesia</h1>' +
        '<div id="bodyContent">Visit Pamela with Mum and Simon</div>' +
        '</div>';

    const jakartaInfoWindow = new google.maps.InfoWindow({
        content: jakartaContentString,
        ariaLabel: "Jakarta, Indonesia",
    });

    const jakartaMarker = new AdvancedMarkerElement({
        map,
        position: jakarta,
        title: "Jakarta, Indonesia",
    });

    jakartaMarker.addListener("click", () => {
        jakartaInfoWindow.open({
            anchor: jakartaMarker,
            map,
        });
    });

    // Atlanta, GA, USA
    const atlanta = { lat: 33.7501, lng: -84.3885 };

    const atlantaContentString =
        '<div id="content">' +
        '<h1 id="firstHeading" class="firstHeading">Atlanta, Georgia, USA</h1>' +
        '<div id="bodyContent">Trip with Pamela and Leanna</div>' +
        '</div>';

    const atlantaInfoWindow = new google.maps.InfoWindow({
        content: atlantaContentString,
        ariaLabel: "Atlanta, Georgia, USA",
    });

    const atlantaMarker = new AdvancedMarkerElement({
        map,
        position: atlanta,
        title: "Atlanta, Georgia, USA",
    });

    atlantaMarker.addListener("click", () => {
        atlantaInfoWindow.open({
            anchor: atlantaMarker,
            map,
        });
    });

    // Argeles sur Mer
    const argelesSurMer = { lat: 42.54869785600672, lng: 3.0185031432250735 };

    const argelesSurMerContentString =
        '<div id="content">' +
        '<div id="siteNotice"></div>' +
        '<h1 id="firstHeading" class="firstHeading">Argeles-sur-Mer</h1>' +
        '<div id="bodyContent">Holiday with Leanna</div>' +
        '</div>';

    const argelesSurMerInfoWindow = new google.maps.InfoWindow({
        content: argelesSurMerContentString,
        ariaLabel: "Argeles-sur-Mer",
    });

    const argelesSurMerMarker = new AdvancedMarkerElement({
        map,
        position: argelesSurMer,
        title: "Argeles Sur Mer, France",
    });

    argelesSurMerMarker.addListener("click", () => {
        argelesSurMerInfoWindow.open({
            anchor: argelesSurMerMarker,
            map,
        });
    });

    // Lloret de Mar
    const lloretDeMar = { lat: 41.699790714929954, lng: 2.8383850372074138 };

    const lloretDeMarContentString =
        '<div id="content">' +
        '<div id="siteNotice"></div>' +
        '<h1 id="firstHeading" class="firstHeading">Lloret de Mar</h1>' +
        '<div id="bodyContent">Holiday with Leanna</div>' +
        '</div>';

    const lloretDeMarInfoWindow = new google.maps.InfoWindow({
        content: lloretDeMarContentString,
        ariaLabel: "Lloret de Mar",
    });

    const lloretDeMarMarker = new AdvancedMarkerElement({
        map,
        position: lloretDeMar,
        title: "Lloret de Mar, Spain",
    });

    lloretDeMarMarker.addListener("click", () => {
        lloretDeMarInfoWindow.open({
            anchor: lloretDeMarMarker,
            map,
        });
    });

    // Malta
    const malta = { lat: 35.853287478920194, lng: 14.443137642328935 };

    const maltaContentString =
        '<div id="content">' +
        '<div id="siteNotice"></div>' +
        '<h1 id="firstHeading" class="firstHeading">Malta</h1>' +
        '<div id="bodyContent">Holiday with Leanna 26-28 Sep 2005</div>' +
        '</div>';

    const maltaInfoWindow = new google.maps.InfoWindow({
        content: maltaContentString,
        ariaLabel: "Malta",
    });

    const maltaMarker = new AdvancedMarkerElement({
        map,
        position: malta,
        title: "Malta",
    });

    maltaMarker.addListener("click", () => {
        maltaInfoWindow.open({
            anchor: maltaMarker,
            map,
        });
    });

    // Cesme, Turkey
    const cesme = { lat: 40.124901570129126, lng: 25.908576653957212 };

    const cesmeContentString =
        '<div id="content">' +
        '<div id="siteNotice"></div>' +
        '<h1 id="firstHeading" class="firstHeading">Cesme, Turkey</h1>' +
        '<div id="bodyContent">Holiday with Leanna</div>' +
        '</div>';

    const cesmeInfoWindow = new google.maps.InfoWindow({
        content: cesmeContentString,
        ariaLabel: "Cesme",
    });

    const cesmeMarker = new AdvancedMarkerElement({
        map,
        position: cesme,
        title: "Cesme, Turkey",
    });

    cesmeMarker.addListener("click", () => {
        cesmeInfoWindow.open({
            anchor: cesmeMarker,
            map,
        });
    });

    // Bali, Indonesia
    const bali = { lat: -8.4095, lng: 115.1889 };

    const baliContentString =
        '<div id="content">' +
        '<div id="siteNotice"></div>' +
        '<h1 id="firstHeading" class="firstHeading">Bali</h1>' +
        '<div id="bodyContent">Holiday with Mum, Pamela and Leanna</div>' +
        '</div>';

    const baliInfoWindow = new google.maps.InfoWindow({
        content: baliContentString,
        ariaLabel: "Bali",
    });

    const baliMarker = new AdvancedMarkerElement({
        map,
        position: bali,
        title: "Bali, Indonesia",
    });

    baliMarker.addListener("click", () => {
        baliInfoWindow.open({
            anchor: baliMarker,
            map,
        });
    });

    // Copenhagen 17-18 Jun 2016
    const copenhagen = { lat: 55.6771, lng: 12.5683 };

    const copenhagenContentString =
        '<div id="content">' +
        '<div id="siteNotice"></div>' +
        '<h1 id="firstHeading" class="firstHeading">Copenhagen</h1>' +
        '<div id="bodyContent">' +
        '<ul>' +
        '<li>1-3 Feb 2025 Roxette the Musical</li>' +
        '<li>17-18 Jun 2016 Jonathan Yeo Portraits</li>' +
        '</ul>' +
        '</div>' +
        '</div>';

    const copenhagenInfoWindow = new google.maps.InfoWindow({
        content: copenhagenContentString,
        ariaLabel: "Copenhagen",
    });

    const copenhagenMarker = new AdvancedMarkerElement({
        map,
        position: copenhagen,
        title: "Copenhagen, Denmark",
    });

    copenhagenMarker.addListener("click", () => {
        copenhagenInfoWindow.open({
            anchor: copenhagenMarker,
            map,
        });
    });

    // Barcelona 12-18 Jul 2016
    // Barcelona 7-11 Apr 2024
    const barcelona = { lat: 41.3874, lng: 2.1686 };

    const barcelonaContentString =
        '<div id="content">' +
        '<div id="siteNotice"></div>' +
        '<h1 id="firstHeading" class="firstHeading">Barcelona</h1>' +
        '<div id="bodyContent">' +
        '<ul>' +
        '<li>7-11 Apr 2024 - Kathryn, Ellis and Heath</li>' +
        '<li>12-18 Jul 2016 - Tushar birthday</li>' +
        '</ul>' +
        '</div>' +
        '</div>';

    const barcelonaInfoWindow = new google.maps.InfoWindow({
        content: barcelonaContentString,
        ariaLabel: "Barcelona",
    });

    const barcelonaMarker = new AdvancedMarkerElement({
        map,
        position: barcelona,
        title: "Barcelona, Spain",
    });

    barcelonaMarker.addListener("click", () => {
        barcelonaInfoWindow.open({
            anchor: barcelonaMarker,
            map,
        });
    });

    // Japan 22 Sep - 3 Oct 2016
    const tokyo = { lat: 35.6764, lng: 139.65 };

    const tokyoContentString =
        '<div id="content">' +
        '<div id="siteNotice">Kash, Thuc and Steven - Japan 22 Sep - 3 Oct 2016</div>' +
        '<h1 id="firstHeading" class="firstHeading">Tokyo</h1>' +
        '<div id="bodyContent">40th birthday trip with Kash and Thuc 22 Sep - 3 Oct 2016</div>' +
        '</div>';

    const tokyoInfoWindow = new google.maps.InfoWindow({
        content: tokyoContentString,
        ariaLabel: "Tokyo",
    });

    const tokyoMarker = new AdvancedMarkerElement({
        map,
        position: tokyo,
        title: "Tokyo, Japan",
    });

    tokyoMarker.addListener("click", () => {
        tokyoInfoWindow.open({
            anchor: tokyoMarker,
            map,
        });
    });

    const kyoto = { lat: 35.0116, lng: 135.7681 };

    const kyotoContentString =
        '<div id="content">' +
        '<div id="siteNotice">Kash, Thuc and Steven - Japan 22 Sep - 3 Oct 2016</div>' +
        '<h1 id="firstHeading" class="firstHeading">Kyoto</h1>' +
        '<div id="bodyContent">30 Sep 2016 with Kash and Thuc</div>' +
        '</div>';

    const kyotoInfoWindow = new google.maps.InfoWindow({
        content: kyotoContentString,
        ariaLabel: "Kyoto",
    });

    const kyotoMarker = new AdvancedMarkerElement({
        map,
        position: kyoto,
        title: "Kyoto, Japan",
    });

    kyotoMarker.addListener("click", () => {
        kyotoInfoWindow.open({
            anchor: kyotoMarker,
            map,
        });
    });

    // Paris 24-26 Oct 2017
    const paris = { lat: 48.8566, lng: 2.3522 };

    const parisContentString =
        '<div id="content">' +
        '<div id="siteNotice"></div>' +
        '<h1 id="firstHeading" class="firstHeading">Paris</h1>' +
        '<div id="bodyContent">' +
        '<ul>' +
        '<li>14-16 Jan 2020 - Mum</li>' +
        '<li>20-23 Mar 2018 - Pamela</li>' +
        '<li>24-26 Oct 2017 - Harrison, Georgia and Lydia</li>' +
        '<li>18 Aug 2001 - Mum and Leanna</li>' +
        '</ul>' +
        '</div>' +
        '</div>';

    const parisInfoWindow = new google.maps.InfoWindow({
        content: parisContentString,
        ariaLabel: "Paris",
    });

    const parisMarker = new AdvancedMarkerElement({
        map,
        position: paris,
        title: "Paris, France",
    });

    parisMarker.addListener("click", () => {
        parisInfoWindow.open({
            anchor: parisMarker,
            map,
        });
    });

    // Rome 1 - 4 Jul 2018
    const rome = { lat: 41.8967, lng: 12.4822 };

    const romeContentString =
        '<div id="content">' +
        '<div id="siteNotice"></div>' +
        '<h1 id="firstHeading" class="firstHeading">Rome</h1>' +
        '<div id="bodyContent">1-4 Jul 2018</div>' +
        '</div>';

    const romeInfoWindow = new google.maps.InfoWindow({
        content: romeContentString,
        ariaLabel: "Rome",
    });

    const romeMarker = new AdvancedMarkerElement({
        map,
        position: rome,
        title: "Rome, Italy",
    });

   romeMarker.addListener("click", () => {
        romeInfoWindow.open({
            anchor: romeMarker,
            map,
        });
    });

   // Fontainebleau 19-21 Jul 2019
   // Fontainebleau 6-8 Oct 2023
    const fontainebleau = { lat: 48.4047, lng: 2.7016 };

    const fontainebleauContentString =
        '<div id="content">' +
        '<div id="siteNotice">Bouldering with Boulder Bus</div>' +
        '<h1 id="firstHeading" class="firstHeading">Fontainebleau</h1>' +
        '<div id="bodyContent">' +
        '<ul>' +
        '<li>6-8 Oct 2023 - Boulder Bus with Georgia and Lydia</li>' +
        '<li>19-21 Jul 2019 - Boulder Bus</li>' +
        '</ul>' +
        '</div>' +
        '</div>';

    const fontainebleauInfoWindow = new google.maps.InfoWindow({
        content: fontainebleauContentString,
        ariaLabel: "Fontainebleau",
    });

    const fontainebleauMarker = new AdvancedMarkerElement({
        map,
        position: fontainebleau,
        title: "Fontainebleau, France",
    });

    fontainebleauMarker.addListener("click", () => {
        fontainebleauInfoWindow.open({
            anchor: fontainebleauMarker,
            map,
        });
    });

    // Carcassonne April 2023
    const carcassonne = { lat: 43.2163, lng: 2.3539 };

    const carcassonneContentString =
        '<div id="content">' +
        '<h1 id="firstHeading" class="firstHeading">Carcassonne</h1>' +
        '<div id="bodyContent">Trip to Carcassonne with Georgia and Lydia 3-5 April 2023</div>' +
        '</div>';

    const carcassonneInfoWindow = new google.maps.InfoWindow({
        content: carcassonneContentString,
        ariaLabel: "Carcassonne, France",
    });

    const carcassonneMarker = new AdvancedMarkerElement({
        map,
        position: carcassonne,
        title: "Carcassonne, France",
    });

    carcassonneMarker.addListener("click", () => {
        carcassonneInfoWindow.open({
            anchor: carcassonneMarker,
            map,
        });
    });

    // Amsterdam April 2023
    const hotelJakarta = { lat: 52.37950628254069, lng: 4.922408613241471 };

    const hotelJakartaContentString =
        '<div id="content">' +
        '<div id="siteNotice">Kathryn and Steven Amsterdam 25-27 April 2023</div>' +
        '<h1 id="firstHeading" class="firstHeading">Hotel Jakarta</h1>' +
        '<div id="bodyContent">Amazing 4-star hotel in Amsterdam</div>' +
        '</div>';

    const hotelJakartaInfoWindow = new google.maps.InfoWindow({
        content: hotelJakartaContentString,
        ariaLabel: "Hotel Jakarta",
    });

    const hotelJakartaMarker = new AdvancedMarkerElement({
        map,
        position: hotelJakarta,
        title: "Hotel Jakarta",
    });

    hotelJakartaMarker.addListener("click", () => {
        hotelJakartaInfoWindow.open({
            anchor: hotelJakartaMarker,
            map,
        });
    });

    const keukenhof = { lat: 52.26975309745833, lng: 4.547123268622359 };

    const keukenhofMarker = new AdvancedMarkerElement({
        map,
        position: keukenhof,
        title: "Keukenhof",
    });

    const keukenhofContentString =
        '<div id="content">' +
        '<div id="siteNotice">Kathryn and Steven Amsterdam 25-27 April 2023</div>' +
        '<h1 id="firstHeading" class="firstHeading">Keukenhof</h1>' +
        '<div id="bodyContent">' +
        '<ul>' +
        '<li>26 April 2023 - Kathryn</li>' +
        '<li>28 March 2019 - Mum</li>' +
        '<li>15 May 2016 - Neil Gordon</li>' +
        '</ul>' +
        '</div>' +
        '</div>';

    const keukenhofInfoWindow = new google.maps.InfoWindow({
        content: keukenhofContentString,
        maxWidth: 400,
        ariaLabel: "Keukenhof",
    });

    keukenhofMarker.addListener("click", () => {
        keukenhofInfoWindow.open({
            anchor: keukenhofMarker,
            map,
        });
    });

    // San Sebastian October 2025
    const villaFavorita = { lat: 43.31700809564674, lng: -1.9858997367605542 };

    const villaFavoritaContentString =
        '<div id="content">' +
        '<div id="siteNotice">Steven birthday trip 19-23 October 2025 organised by Kathryn</div>' +
        '<h1 id="firstHeading" class="firstHeading">Hotel Villa Favorita</h1>' +
        '<div id="bodyContent">' +
        "The gorgeous hotel where we stayed 19-20 October 2025" +
        " that Kathryn organised for Steven's 50th birthday. The view of" +
        " the beach and sea from the window was stunning. Breakfast and drinks" +
        " in the beautiful bar."
        '</div>' +
        '</div>';

    const villaFavoritaInfoWindow = new google.maps.InfoWindow({
        content: villaFavoritaContentString,
        ariaLabel: "Hotel Villa Favorita",
    });

    const villaFavoritaMarker = new AdvancedMarkerElement({
        map,
        position: villaFavorita,
        title: "Hotel Villa Favorita",
    });

    villaFavoritaMarker.addListener("click", () => {
        villaFavoritaInfoWindow.open({
            anchor: villaFavoritaMarker,
            map,
        });
    });

    const arima = { lat:43.29095667152992, lng: -1.9809372899031183 };

    const arimaContentString =
        '<div id="content">' +
        '<div id="siteNotice">Steven birthday trip 19-23 October 2025 organised by Kathryn</div>' +
        '<h1 id="firstHeading" class="firstHeading">ARIMA Hotel & Spa</h1>' +
        '<div id="bodyContent">' +
        "The beautiful hotel where we stayed 21-22 October 2025" +
        " that Kathryn organised for Steven's 50th birthday. We had a lovely balcony and a great" +
        " view of the grounds and forest. We used the luxury spa and had a relaxing massage." +
        '</div>' +
        '</div>';

    const arimaInfoWindow = new google.maps.InfoWindow({
        content: arimaContentString,
        ariaLabel: "ARIMA Hotel & Spa",
    });

    const arimaMarker = new AdvancedMarkerElement({
        map,
        position: arima,
        title: "ARIMA Hotel & Spa",
    });

    arimaMarker.addListener("click", () => {
        arimaInfoWindow.open({
            anchor: arimaMarker,
            map,
        });
    });

    const martinb = { lat: 43.26694601928382, lng: -2.0156468200988975 };
    const martinbContentString =
        '<div id="content">' +
        '<div id="siteNotice">Steven birthday trip 19-23 October 2025 organised by Kathryn</div>' +
        '<h1 id="firstHeading" class="firstHeading">Restaurante Martin Berasategui</h1>' +
        '<div id="bodyContent">' +
        "Also referred to as Martin B, Three Star Michelin restaurant in " +
        "San Sebastián visited on 22 October 2025 for lunch to celebrate " +
        "Steven's 50th birthday. We had the amazing tasting menu." +
        '</div>' +
        '</div>';

    const martinbInfoWindow = new google.maps.InfoWindow({
        content: martinbContentString,
        ariaLabel: "Martin Berasategui",
    });

    const martinbMarker = new AdvancedMarkerElement({
        map,
        position: martinb,
        title: "Martin Berasategui",
    });

    martinbMarker.addListener("click", () => {
        martinbInfoWindow.open({
            anchor: martinbMarker,
            map,
        });
    });
}

window.initMap = initMap();
