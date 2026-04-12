import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

export type LeafletMapRef = {
  flyTo: (lat: number, lng: number) => void;
  zoomIn: () => void;
  zoomOut: () => void;
};

const LeafletMap = forwardRef<LeafletMapRef>((_, ref) => {
  const webviewRef = useRef<WebView>(null);

  const run = (js: string) => {
    webviewRef.current?.injectJavaScript(js);
  };

  useImperativeHandle(ref, () => ({
    flyTo: (lat: number, lng: number) => {
      run(`
        if (window.map) {
          window.map.setView([${lat}, ${lng}], 15);

          if (window.marker) {
            window.map.removeLayer(window.marker);
          }

          window.marker = L.marker([${lat}, ${lng}]).addTo(window.map);
        }
        true;
      `);
    },
    zoomIn: () => run(`window.map && window.map.zoomIn(); true;`),
    zoomOut: () => run(`window.map && window.map.zoomOut(); true;`),
  }));

  const html = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"/>
    <style>
      html, body, #map {
        margin: 0;
        height: 100%;
        width: 100%;
      }
    </style>
  </head>
  <body>
    <div id="map"></div>

    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
    <script>
      window.map = L.map('map', {
        zoomControl: false // ✅ REMOVE DEFAULT ZOOM
      }).setView([10.3157, 123.8854], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap'
      }).addTo(window.map);

      window.marker = null;
    </script>
  </body>
  </html>
  `;

  return (
    <View style={{ flex: 1 }}>
      <WebView
        ref={webviewRef}
        originWhitelist={['*']}
        source={{ html }}
        javaScriptEnabled
      />
    </View>
  );
});

export default LeafletMap;