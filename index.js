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
        '<div id="siteNotice"></div>' +
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
        title: "Argeles Sur Mer",
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
        title: "Lloret de Mar",
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
        title: "Cesme",
    });

    cesmeMarker.addListener("click", () => {
        cesmeInfoWindow.open({
            anchor: cesmeMarker,
            map,
        });
    });

    // Amsterdam April 2023
    const hotelJakarta = { lat: 52.37950628254069, lng: 4.922408613241471 };

    const hotelJakartaContentString =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Hotel Jakarta</h1>' +
        '<div id="bodyContent">' +
        "Trip with Kathryn 25-26 April 2023. Our first holiday together." +
        "</div>" +
        "</div>";

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
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Keukenhof</h1>' +
        '<div id="bodyContent">' +
        '<ul>' +
        '<li>26 April 2023 - Kathryn</li>' +
        '<li>28 March 2019 - Mum</li>' +
        '<li>15 May 2016 - Neil Gordon</li>' +
        '</ul>'
        "</div>" +
        "</div>";

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

    // Barcelona April 2024
    //const sallesPere:

    // San Sebastian October 2025
    const villaFavorita = { lat: 43.31700809564674, lng: -1.9858997367605542 };

    const villaFavoritaContentString =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Hotel Villa Favorita</h1>' +
        '<div id="bodyContent">' +
        "The gorgeous hotel where we stayed 19-20 October 2025" +
        " that Kathryn organised for Steven's 50th birthday. The view of" +
        " the beach and sea from the window was stunning. Breakfast and drinks" +
        " in the beautiful bar."
        "</div>" +
        "</div>";

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
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">ARIMA Hotel & Spa</h1>' +
        '<div id="bodyContent">' +
        "The beautiful hotel where we stayed 21-22 October 2025" +
        " that Kathryn organised for Steven's 50th birthday. We had a lovely balcony and a great" +
        " view of the grounds and forest. We used the luxury spa and had a relaxing massage." +
        "</div>" +
        "</div>";

    const arimaInfoWindow = new google.maps.InfoWindow({
        content: arimaContentString,
        ariaLabel: "ARIMA Hotel  Spa",
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
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Restaurante Martin Berasategui</h1>' +
        '<div id="bodyContent">' +
        "Also referred to as Martin B, Three Star Michelin restaurant in " +
        "San Sebastián visited on 22 October 2025 for lunch to celebrate " +
        "Steven's 50th birthday organised by Kathryn. We had the amazing tasting menu." +
        "</div>" +
        "</div>";

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